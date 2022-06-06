import React, { useState } from "react";
import Home from "./pages/Home"
import LoginForm from "./components/LoginForm";
import Users from "./data/users";

function App() {


    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details)

        Users.forEach(user => {
            if (details.email == user.email && details.password == user.password) {
                setUser({
                    name: details.name,
                    email: details.email
                });
                console.log("logged in")
                return true;
            }
        })


        // else {
        //     setUser({name: "", email: ""});
        //     console.log("details do not match")
        // }
    }

    const Logout = () => {
        console.log("logout")
    }

    return (
        <div className="App">
            {(user.email != "") ? (
                <Home />
            ) : (
                <LoginForm Login={Login} error={error} />
            )
            }
        </div>
    );
}


export default App;
