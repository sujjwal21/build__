<!-- Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial. -->
Closures in JavaScript allow an inner function to access variables from its outer function even after the outer function has executed. This enables functions to maintain state across calls and create private variables. They are beneficial for data encapsulation and managing persistent state.


<!-- Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope. -->
var is function-scoped, hoisted to the top of its function, and accessing it before declaration gives undefined. 
let and const are block-scoped, hoisted but stay in a "temporal dead zone" until their declaration, so accessing them before declaration results in a ReferenceError. 
let can be updated but not re-declared in the same scope, while const cannot be updated or re-declared.


<!-- What are the differences between a programming language and a scripting language? Where does JavaScript fit in? -->
A programming language is typically compiled and used to build standalone applications; it can be low or high-level. A scripting language is often interpreted, used for automating tasks, or running scripts within existing environments. JavaScript fits as a scripting language because it was initially designed to be run in browsers to add interactivity to web pages. However, with the advent of engines like Node.js, JavaScript is now used for full-scale application development, so it comes in both scripting and programming languages.