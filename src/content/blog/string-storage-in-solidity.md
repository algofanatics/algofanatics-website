---
title: "String Storage in Solidity (A very short read)"
meta_title: ""
description: "How strings interact with the evm"
date: 2023-08-17T05:00:00Z
# image: "https://res.cloudinary.com/samsonajulor/image/upload/f_auto,q_auto/v1/algofanatics_assets/assets/blog/ziwoaqupqbqu7atligdy"
categories: ["blockchain", "cryptocurrency", "web3"]
author: "Samson Ajulor"
tags: ["algorithms", "ethereum", "strings", "web3bridge" ]
draft: false
---
<!-- <a href="https://www.freepik.com/free-vector/abstract-modern-wavy-stripe-background-vector-graphic-design-from-colorful-curved-wave-lines_1269841.htm#query=string&position=44&from_view=keyword&track=sph">Image by davidzydd</a> on Freepik -->
- In Solidity, strings are a reference type of data that stores the position of the data rather than the data itself.
- They consist of various characters like alphabets, numbers, special characters, and spaces.
- Strings in Solidity are stored using UTF-8 encoding.

In Solidity, strings must be converted to bytes before storage.

```solidity
function stringToBytes(string memory _text) public pure returns (bytes memory) {
    bytes memory b = bytes(_text);
    return b;
}

function bytesToString(bytes memory _bytes) public pure returns (string memory) {
    string memory s = string(_bytes);
    return s;
}

function getStringLength(string memory _text) public pure returns (uint) {
    return bytes(_text).length;
}

function getBytesLength(bytes memory _bytes) public pure returns (uint) {
    return _bytes.length;
}
```
*Function to convert string to bytes and manipulate the string.*


![Deploying the contract to show the length of the byte of the string](https://res.cloudinary.com/samsonajulor/image/upload/f_auto,q_auto/v1/algofanatics_assets/assets/blog/bzb44rgfdlfkvnshypyt)

As we can see, the length of a string cannot be directly derived; only the length of the bytes can be successfully returned.

#### How is a String Converted to Bytes?

1. **Character Encoding**: Each character corresponds to a Unicode code point, which needs to be encoded into bytes for storage.
2. **Character Encoding Scheme**: Different schemes like UTF-8, UTF-16, etc., map Unicode code points to bytes.
3. **Byte Representation**: UTF-8 uses variable-length byte sequences for characters.
4. **Encoding Process**: Characters are looked up, and encoding rules are followed to convert code points to bytes.
5. **Decoding Process**: Bytes are interpreted based on encoding rules to reconstruct code points and characters.
6. **Error Handling**: Errors can occur if decoding fails or unsupported characters are encoded.

The conversion involves mapping characters' Unicode code points to bytes based on the chosen encoding scheme.

This process ensures that text data can be represented, stored, and transmitted in a format that computers can understand.

##### UTF-8 Encoding Scheme for "Hello World"

1. Each character in the string corresponds to a Unicode code point. Here are the Unicode code points for each character:
   
   - 'H': U+0048
   - 'e': U+0065
   - 'l': U+006C
   - 'l': U+006C
   - 'o': U+006F
   - ',': U+002C
   - ' ': U+0020 (space)
   - 'W': U+0057
   - 'o': U+006F
   - 'r': U+0072
   - 'l': U+006C
   - 'd': U+0064
   - '!': U+0021

source: [unicode.org](https://home.unicode.org/)

2.  UTF-8 is a variable-length encoding scheme, which means that the number of bytes used to represent a character varies depending on the character itself. The basic rules for UTF-8 encoding are as follows:
   
   - For characters in the ASCII range (U+0000 to U+007F), a single byte is used, and the byte's value is the same as the character's Unicode code point.
   - For characters outside the ASCII range, multiple bytes are used. The high-order bits of the first byte indicate the total number of bytes used for encoding the character.
   - The remaining bytes start with '10' as their two high-order bits.

3. Thus:
   
   - 'H' (U+0048): Since 'H' is in the ASCII range, it is represented as `0x48` (72 in decimal).
   - 'e' (U+0065): Also in the ASCII range, so it is `0x65` (101 in decimal).
   - 'l' (U+006C): Again, ASCII, so it's `0x6C` (108 in decimal).
   - ... and so on for the rest of the characters.

   The comma (',') and space (' ') are also in the ASCII range, so they are represented as `0x2C` and `0x20`, respectively.

   Now, when we encounter characters that are not in the ASCII range, we need to use multi-byte encoding:
   
   - 'W' (U+0057): It's not in the ASCII range, so it's encoded as follows:
     - The high-order bit of the first byte is '110', indicating that there are two bytes used for encoding.
     - The remaining bits of the first byte represent the first five bits of the Unicode code point: `010111`.
     - The second byte starts with '10' and contains the remaining six bits of the Unicode code point: `001110`.

   Similarly, you'd follow the multi-byte encoding process for the remaining characters that are outside the ASCII range.

4.  After encoding all the characters, the UTF-8 encoded byte sequence for the string "Hello, World!" might look something like this (in hexadecimal):
   
   ```
   48 65 6C 6C 6F 2C 20 57 6F 72 6C 64 21
   ```

   Here, each pair of hexadecimal digits represents a byte in the encoded sequence.

That's how the UTF-8 encoding scheme is used to encode the string "Hello, World!" into a sequence of bytes. The variable-length encoding allows it to represent characters from various languages and scripts efficiently.

#### Solidity's String Storage on Ethereum

Imagine you have a computer program, and you want to store some text in it. In most programming languages, you can use a data type called "string" to hold text. Solidity, the programming language for Ethereum smart contracts, also has a string data type.

However, in Ethereum, things work a bit differently due to the way data is stored on the blockchain. Ethereum's blockchain is a distributed database shared by many computers, and every bit of data stored on it needs to be managed carefully.

When you store a string in a Solidity smart contract, it's not as simple as just saving the text. Solidity stores strings in a more structured way to keep the blockchain efficient and secure. Here's how it works:

1. **Length Prefix**: Solidity stores a string's length before the actual text. This is like saying, "Hey, this string is X characters long." The length is typically stored in a 32-byte slot.

2. **Content**: The actual text content of the string is stored in 32-byte "chunks." If your string is shorter than 32 characters, it still takes up a full 32-byte slot because that's the smallest storage unit on the Ethereum blockchain. If the string is longer than 32 characters, it uses additional 32-byte slots for each chunk of text.

For example, let's say you have a string: "Hello, Ethereum!" Here's how it might be stored on the blockchain:

- Length Prefix: 32 bytes (for example, storing the value 17)
- Content: 32 bytes (for "Hello, Ethereum!")
- Total storage used: 64 bytes

And if you had a longer string like "This is a much longer string that goes beyond 32 characters," it might be stored like this:

- Length Prefix: 32 bytes (for example, storing the value 59)
- Content: 32 bytes (for the first 32 characters)
- Content: 32 bytes (for the next 32 characters)
- Content: 32 bytes (for the remaining characters)
- Total storage used: 128 bytes

So, while storing strings in Solidity is a bit more complex than in regular programming, it's done this way to ensure efficient use of blockchain resources and to maintain the security and integrity of the data stored on the Ethereum network.

*Do not save just anything in us...We'll bill you. - world machines.*