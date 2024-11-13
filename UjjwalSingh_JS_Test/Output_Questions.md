<!-- 1.
`console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");`
 -->
Start
End
Promise
Timeout

Explanation :- console.log("Start") runs first and logs "Start". After that setTimeout pushed to macrotask queue and Promise pushed to microtask queue and code moves to last line where console.log("End") runs immediately and logs "End". After that event loop works and logs Promise and timeout.
The microtask queue (containing the Promise callback) is processed before the macrotask queue (containing the setTimeout callback).



<!-- 2.
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c);
 -->
3

Explanation :- The spread operator creates a shallow copy of the object, meaning that only the first level of properties is copied. For nested objects, like original.b, the copy still holds a reference to the same object in memory as the original.


<!-- 3. 
`for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 1000);
}
for (let j = 1; j <= 3; j++) { setTimeout(() => console.log(j), 1000);
}`
 -->
4
4
4
1
2
3
Explanation :- The first for loop uses var, which has function scope,Due to function-scoping, all setTimeout callbacks share the same i, which ends up being 4 after the loop.
The second for loop uses let, which has block scope, Each iteration creates a new block-scoped j, maintaining the correct value for each callback.


<!-- 4.
`let obj1 = { a: 10 };
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);`
 -->
20
Explanation :- obj2 is a reference to obj1, so changing obj2.a changes obj1.a, When obj2.a is modified to 20, it affects the shared object that both obj1 and obj2 reference. Therefore, console.log(obj1.a) prints 20, as obj1 reflects the change made through obj2
