---
title: "Functions Storage in Solidity."
meta_title: ""
description: "How functions interact with the evm."
date: 2023-08-28T05:00:00Z
# image: "https://res.cloudinary.com/samsonajulor/image/upload/f_auto,q_auto/v1/algofanatics_assets/assets/blog/ziwoaqupqbqu7atligdy"
categories: ["blockchain", "cryptocurrency", "web3"]
author: "Samson Ajulor"
tags: ["ethereum", "functions", "web3bridge" ]
draft: false
---
- There are three distinct areas for storing and managing data within a smart contract

1. Calldata: This is a special, read-only, non-modifiable area where function arguments and external calldata is stored. It is used to hold the input data for a function call.
2. Memory: This is a temporary storage area that is used for data execution of a function. It is not persistent and only lasts until the function call ends. We normally use it to store  data that is needed temporarily within a function but does not need to be stored on the blockchain.
3. Storage: This is a persistent and high cost storage area that is used to store data between function calls and even across transactions. Using the storage location is expensive and should be used with caution. It is the location of all state variables as well as the state of the contract.

#### Default Location
The default location for function parameters in solidity is the calldata.

When a function call is made to another contract, the parameters passed to the function are copied to the calldata area. This means that the called function operates on a copy of the data and the original values of the parameters are not affected.

Value types are stored directly in the calldata area. However for reference types, the actual data is stored in the caller's memory. This means that you can specify the storage location for this type of parameters as memory or calldata. For example:

```
// in calldata
Data(uint[] calldata data) external pure returns (uint)
```

```
// in memory
Data(string memory data) external pure returns (uint)
```

#### How exactly are functions stored?

Functions are stored differently based on their visibility and type.

1. Internal functions are stored in the contracts bytecode itself. The EVM can directly execute this code since it is part of the same contract's bytecode.
2. External and Public functions are also stored in teh contract's bytecode. However, when they are called from another contract, the EVM generates a signature and selector by passing the required parameters. This serves as a message that can be used to invoke the function.
3. Library Functions which contain reusable codes allows contracts to share code without the overhead of full contract deployment. The EVM in this case creates a delegate call to the library's code, and the library's storage is used during the execution of the function.
4. Constructor functions are also stored in the contract's bytecode but are only executed once only during the deployment to set initial values.
5. Fallback and Receive functions are special functions that are also stored in the contract's bytecode. However, they are only executed when someone sends ether or a transaction to the contract address without specifying a function.
6. Interface functions do not have implementation details hence the actual functions are not stored only the prototype is stored. The prototype is a kind of definition that enforces other contract to implement that function.

#### Function signature and Function selector
The function signature is the human-readable representation of a function's name and parameters, while the function selector is the hashed representation of the function signature used by the EVM to identify and route function calls.

The function selector helps the contract determine which function is being called and how to decode the function's arguments from the transaction data.

### Function Payload
The function payload is typically encoded in a specific format that includes the function's selector (a hash of the function's signature) and the arguments packed in a way that the smart contract can understand and parse.

The contract's function dispatcher uses the function selector to determine which function is being called, and then it unpacks the arguments and executes the corresponding function.

Consider the function below:

```
pragma solidity ^0.8.0;

contract Example {
    string public name;

    function setName(string memory _newName) public {
        name = _newName;
    }
}
```

Assume we call the setName function parsing the argument "Adeleke", this is what the payload will look like:

```
Function Selector: 0x60fe47b1
Argument: "Adeleke" (packed as bytes)
Payload: 0x60fe47b1000000000000000000000000000000000000000000000000000000000000000416c696365
```

This payload is included in the transaction data sent to the contract's address and is used to execute the desired function with the specified arguments.

#### Interface and Abstractions
In the world of computer programs, an "interface" is like a rule book. It's a set of instructions that say, "If you want to play with me or make use of me, you need to have these buttons and do these things."

This way, different programmers can use the same interface to make sure their computer programs work together in the right way, even if the insides of their programs are different.

Interfaces list function signatures and define the external-facing behavior that contracts must adhere to when interacting with each other. It does not have any state variables.

```
interface ERC20 {
    function transfer(address to, uint amount) external;
    function balanceOf(address account) external view returns (uint);
}
```

Abstraction is a blueprint or a plan that helps to define the structure of a contract that needs to be inherited. Complex details in a contract can be hidden by abstractions. It cannot be deployed on its own.

```
abstract contract Token {
    function transfer(address to, uint amount) public virtual;
    function balanceOf(address account) public view virtual returns (uint);
}
```

Notice the modifier called virtual. This informs the child contract that the function with this modifier can be overridden. You can use override modifier on the sister function of the child contract that typically has the same name


#### Inheritance
You can create a new smart contract that "inherits" the properties and functions of an existing smart contract. This existing smart contract is known as the "parent" contract or base contract. The new smart contract is called the "child" contract.
