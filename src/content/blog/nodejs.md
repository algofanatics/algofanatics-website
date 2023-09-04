---
title: "A Spice of Node (Not the computer!)"
meta_title: ""
description: "Basic things you should know about node js."
date: 2023-09-03T05:00:00Z
categories: ["backend", "node.js", "web2"]
author: "Samson Ajulor"
tags: ["interview questions" ]
draft: false
---

#### What is Node.js?
This is an opensource, javascript runtime environment that allows developers to run javascript codes on the server-side. It was created in 2009 by Ryan Dahl.

It was designed to run in a non-blocking manner by default. On the other hand, it can as well handle I/O operations asynchronously by making use of the event loop. This way it can handle concurrent connections without making use of multiple threads. i.e. single threaded.

#### Is Node.js single or multi-threaded
Node.js uses only one thread to execute javascript code. However it make use of the event loop to handle multiple requests and events simultaeneously without making use of additional threads.

Additionally, developers can make use of the cluster mode to create multiple Node.js processes and utilize multiple cpu cores in the process to create a network of processes that can work together to handle incoming requests.

#### Can we simulate multithreading with node.js?

Yes! Multithreading simulation is possible via the following methods.

1. The worker threads module: With this module, you can create new worker threads that can execute javascript code in parallel with the main thread.

2. Child Processes Module: This makes use of Inter-Process Communication (IPC) to interact with the main chain by spawning new Node.js processes that run in parallel with the main process.

3. External Libraries: There are several external libraries available that can help you simulate multithreading in a Node.js application. One such library is threads.js, which provides a simple API for creating and managing JavaScript threads within a Node.js process.

4. Cluster Module: This module is capable of creating a pool of worker processes, where each process runs a copy of the same server code. The main process distributes incoming requests across the worker processes.

Creating and managing threads and processes are resource intensive methods which can lead to performance trade-offs.

#### what is a callstack
This is a data structure that is used by computer programs to keep track of the sequence of function calls during the execution of a program. Each level of the stack contains information about the function's parameters, local variables, and return address.

Whenever a function is called, nodejs pushes the function call frame onto the top of the call stack and subsequently, when the function completes execution, its call-frame is popped of the stack.

The call stack allows programs to maintain the order of function calls and to properly handle function returns. It also ensures that functions are executed in the correct order and prevents them from overlapping or interfering with each other.


#### What is the difference between websockets and RESTful APIs

Both are popular approaches for building web applications, but they differ in their communication protocols, data formats, and performance characteristics.

We use websockets to design applications that require realtime communications between the server and the client without the need for the server to repeatedly send requests to the server. Websockets are fast.

RESTful apis stand for Representational State Transfer. It utilizes http requests to transfer data between the client and the server typically making use of request methods like Get, Post, Put, Delete etc.

REST is stateless. This means that there is no persistent connection between the client and the server and thus require less resources compared to websockets.

#### what are event emitters and how are they utilized in node.js

An event emitter in Node.js is an object that emits events and enables other objects to subscribe to them so they can be notified when they happen. It is the foundation of Node.js.

In node.js, we make use of the events module's EventEmitter class as event emitters in Node.js.

Let us analyze the sample code below:

```
const IWillEmitEvent = require('events');

const theEmitter = new IWillEmitEvent();

theEmitter.on('event', () => {
  console.log('event occurred');
});

theEmitter.emit('event');
```

In this example, we first use the EventEmitter constructor to create a brand-new event emitter. The on method is then used to associate a listener function with the event occurrence. Finally, we use the emit function to broadcast the event event with two arguments.
