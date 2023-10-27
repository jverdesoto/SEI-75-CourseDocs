import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './LoginPage.css'

const LoginPage = ({ user, setUser }) => {

    const [newState, setNewState] = useState(null)

    function handleChange(event) {
        setNewState(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setUser(newState)
    }

    return (
        <form onSubmit={handleSubmit} className="login-container">
            <Stack 
            spacing={2}
            >
                <h1>Please enter your desired username below</h1>
                <TextField id="outlined-basic" label="username" variant="outlined"
                    type="text"
                    value={user}
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">Sign In</Button>
            </Stack>
        </form>
    );
}

export default LoginPage;