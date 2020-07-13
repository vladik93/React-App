import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login() {
    return (
        <form>
            <TextField label="E-Mail" fullWidth />
            <TextField label="Password" fullWidth />
            <Button variant="contained" color="secondary" type="submit">
              LOGIN
            </Button>
        </form>
    )
}


export default Login;