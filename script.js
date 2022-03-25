const page = (
    <div>
        <img src="./logo.png" width="200px"></img>
        <h1>Fun facts about React:</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)

/* 
1. Why do we need to `import React from "react"` in our files? 
A: JSX syntax is defined in React so we need it to define our code.

2. If I were to console.log(page) in script.js, what would show up? 
A: JavaScript object variation of the JSX code. 

3. What's wrong with this code? 
```
const page = (
    <h1>Hello</h1>
    <p>This is my website</p>
)
```
A: There is no single parent element. 

4. What does it mean for something to be "declarative" instead of "imperative"?
A: It means we use code to say what we want, rather than using code to say how to do each step.

5. What does it mean for something to be "composable"?
A: Using smaller pieces to make something larger. 
*/