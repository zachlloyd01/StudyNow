import { AppBar, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar(props) {

    const [value, setValue] = useState(0);

    const handleTabChange = (e, newValue) => {
        setValue(newValue);
    }

    return(
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography>StudyNow</Typography>
                <Tabs
                    value={value}
                    indicatorColor={"primary"}
                    onChange={handleTabChange}
                    style = {{ marginLeft: 'auto' }}
                >
                    <Tab to="/" label="Home" component={Link} />
                    <Tab to="/signup" label="Signup" component={Link} />
                    <Tab to="/login" label="Login" component={Link} />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}