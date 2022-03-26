function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./logo.png" className="logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2022 Jethro's Web. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1 className="title">Reasons I'm excited to learn React.js</h1>
            <ol>
                <li>Advancing WebDev knowledge.</li>
                <li>Career progression.</li>
                <li>Learning is fun!</li>
            </ol>
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <App />,
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

6. Wgat is a React component? 
A: A function that returns React elements. 

7. What's wrong with this code? 
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
``` 
A: Function name needs to be written in PascalCase (i.e., MyComponent()). 

8. What's wrong with this code? 
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
A: Instead of calling the React function, you need to call it as a HTML element (i.e., <Header />)
*/