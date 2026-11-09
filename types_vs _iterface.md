1.What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

Ans: In typescript there are two fundamental and most common used keyword or features are "type" and "interface". Almost all kind of tech around us uses this two features when using typescript. The purpose of these two features are analyze code during development and catch bugs before the code goes live.

Types: In regular Javascript we face a lot problem during development or in production state because of inefficient type declarations. Because Javascript is dynamically types language so it accepts any kind of inputs weather its string or boolean at any stage of production. So its a nightmare for developers to find bugs because of the dynamic behavior of Javascript which is very inefficient when it comes to type declaration. So in this dire situation Typescript comes with life saving feature like "type". Now we can specify certain type for any variable in Typescript file which comes clean in the actual Javascript file.

Interface: In Typescript we get another fantastic feature like "Interface". It function like type but it provides much more flexibility and readability of codes during development. Interface mainly shapes an object structurally. It specify what behavior and properties of an object should have.

For actual implementation in project interface should be used for defining an object and type for unifying several types of variable or for complex type logic.