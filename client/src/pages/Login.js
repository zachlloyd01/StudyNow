import { Button, TextField, Grid } from "@material-ui/core";
import React, { useState } from "react";
import axios from 'axios';

export default function Loging(props) {

    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    const submitHandler = async function(event) {
        event.preventDefault(); // Do not reload

        const data = { email, password }; // Data to pass to backend

        let res = await axios.post('/api/profiles', data);

        // TODO: Write response handler!
        console.log(res);   

    }
    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <Grid container xs={12} spacing={3} xs={12}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" type="email" onChange={event => changeEmail(event.target.value)} variant="outlined" value={email} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Password" type="password" onChange={event => changePassword(event.target.value)} variant="outlined" value={password} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" style={{float: 'right', marginRight: '2.25em'}}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}