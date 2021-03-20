import React from "react"
import "./app.css"
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom"

const App = () => (
    <div className="App">
        <Router>
            <ul className="nav">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/users">USER</Link>
                </li>
            </ul>

            <div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/users">
                        <Users />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
)

const Home = () => (
    <div className="page home">
        <h1>HOME PAGE</h1>
    </div>
)

const About = () => (
    <div className="page about">
        <h1>ABOUT PAGE</h1>
    </div>
)

const Users = () => (
    <div className="page users">
        <h1>USERS LIST</h1>
    </div>
)

export default App