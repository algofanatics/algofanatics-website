---
title: "StarkNet Messaging Contract"
meta_title: ""
description: "How to deploy a Cairo Contract to Starknet!"
date: 2023-09-21T05:00:00Z
# image: "https://res.cloudinary.com/samsonajulor/image/upload/f_auto,q_auto/v1/algofanatics_assets/assets/blog/xyruli9slbwtazplckgs"
categories: ["web3"]
author: "Samson Ajulor"
tags: ["smartcontracts", "blockchain"]
draft: false
---

This contract showcases key StarkNet development concepts, including storage, events, and functions. It allows users to send messages to each other and retrieve them.

## Prerequisites

Before we dive into building our contract, make sure you have the following:

1. Basic understanding of Rust programming language.
2. A development environment set up for StarkNet development.
3. Access to StarkNet documentation for reference.

## Step 1: Setting Up the Contract

We start by defining our StarkNet contract module and importing necessary libraries:

```rust
#[contract]
mod HelloStarknet {
    use starknet::get_caller_address;
    use starknet::ContractAddress;
    use starknet::felt::{felt252, felt64};

    // ...
}
```

In this code, we import libraries for accessing the caller's address, defining contract addresses, and working with various data types.

## Step 2: Defining the Message Struct

We define a `Message` struct to represent our messages. Each message includes the sender's address, message content, and a timestamp:

```rust
struct Message {
    sender: ContractAddress,
    content: felt252,
    timestamp: felt64,
}
```

## Step 3: Adding Storage

We introduce a storage vector `messages` to store our messages:

```rust
static mut messages: Vec<Message> = Vec::new();
```

This vector will hold all the messages exchanged within the contract.

## Step 4: Creating Events

We define two events, `MessageSent` and `MessageReceived`, to log when messages are sent and received:

```rust
#[event]
fn MessageSent(sender: ContractAddress, content: felt252, timestamp: felt64) {}

#[event]
fn MessageReceived(sender: ContractAddress, content: felt252, timestamp: felt64) {}
```

These events will help us track and log the actions happening within our contract.

## Step 5: Implementing Message Sending

We create an `external` function, `Send_Message`, for users to send messages. This function logs the `MessageSent` event:

```rust
#[external]
fn Send_Message(content: felt252) {
    let sender = get_caller_address();
    let timestamp = starknet::block_timestamp();
    let message = Message {
        sender,
        content,
        timestamp,
    };
    messages.push(message.clone());

    MessageSent(sender, content, timestamp);
}
```

This function records the sender's address, the message content, and the timestamp. It then logs the event and adds the message to the `messages` vector.

## Step 6: Implementing Message Retrieval

We create a `view` function, `Get_Messages`, to allow users to retrieve their messages. This function logs the `MessageReceived` event for each message retrieved:

```rust
#[view]
fn Get_Messages() -> Vec<Message> {
    let caller = get_caller_address();
    let mut received_messages: Vec<Message> = Vec::new();

    for message in messages.iter() {
        if message.sender == caller {
            MessageReceived(message.sender, message.content, message.timestamp);
            received_messages.push(message.clone());
        }
    }

    received_messages
}
```

This function collects and returns messages sent to the caller while logging the `MessageReceived` event for each of them.

## Step 7: Implementing Message Clearing

Finally, we add an `external` function, `Clear_Messages`, which allows the contract owner (for demonstration purposes) to clear all messages:

```rust
#[external]
fn Clear_Messages() {
    let caller = get_caller_address();

    if caller == ContractAddress::default() {
        messages.clear();
    }
}
```

This function checks if the caller is the contract owner and clears all messages if the condition is met.


# How to Deploy the Contract

**Note:** Before you begin, make sure you have the StarkWare Cairo language compiler (`starkware-compile`) and the StarkWare deployment tools (`starknet`) installed. You should also have a working knowledge of Cairo and StarkNet development.

### Step 1: Audit the Contract

Ensure that your contract code is correct and well-tested.

### Step 2: Compile the Cairo Contract

Compile your Cairo contract into the StarkNet contract format. Use the `starkware-compile` command to do this:

```bash
starkware-compile <your-contract>.cairo --output <your-contract>.json
```

This command compiles your Cairo contract into a JSON file that can be used for deployment.

### Step 3: Set Up StarkNet Environment

Before you can deploy your contract, you need to configure your StarkNet environment. Initialize a StarkNet environment using:

```bash
starknet setup
```

This command will guide you through the setup process, including creating or importing an Ethereum private key, configuring the StarkNet project directory, and setting up the environment.

### Step 4: Deploy the Cairo Contract

Deploy your Cairo contract using the `starknet deploy` command. You'll need to specify the path to the compiled contract JSON file, the contract name, and other deployment options:

```bash
starknet deploy --contract <your-contract>.json --contract_name <contract-name> --network <network>
```

Replace `<your-contract>.json` with the path to your compiled contract JSON file, `<contract-name>` with the name you want to give your StarkNet contract, and `<network>` with the StarkNet network you want to deploy to (e.g., `ropsten` for the testnet).

You'll be prompted to confirm the deployment, and the deployment process will begin. Wait for the deployment to complete, and you'll receive a contract address once it's done.

### Step 5: Interact with Your Deployed Contract

Once your Cairo contract is deployed, you can interact with it using StarkNet's provided tools. You can call contract functions, send transactions, and query contract data as needed. Refer to the StarkNet documentation and tools for specific instructions on how to interact with your deployed contract.

Remember to manage your private keys and keep them secure when interacting with StarkNet contracts, especially in production environments.

That's it! You've successfully deployed a Cairo contract on StarkNet. You can now use the deployed contract for your decentralized application or project.

