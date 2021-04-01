import { Button, TextField, Grid } from "@material-ui/core";
import React, { useState } from "react";
import axios from '../axios.config';

export default function Loging(props) {

    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [name, changeName] = useState('');

    const submitHandler = async function(event) {
        event.preventDefault(); // Do not reload

        try {
            const data = { email, name, password }; // Data to pass to backend
            let res = await axios.post('/api/profiles', data);
        }
        catch(error) {
            return;
        }
         

    }
    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <Grid container xs={12} spacing={3} xs={12}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" type="email" onChange={event => changeEmail(event.target.value)} variant="outlined" value={email} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" type="text" onChange={event => changeName(event.target.value)} variant="outlined" value={email} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Password" type="password" onChange={event => changePassword(event.target.value)} variant="outlined" value={password} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" variant="contained" type="submit" style={{float: 'right', marginRight: '2.25em'}}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}