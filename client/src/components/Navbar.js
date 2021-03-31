import { AppBar, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar(props) {

    const [value, setValue] = useState(window.location.pathname);

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
                    <Tab to="/" label="Home" value="/" component={Link} />
                    <Tab to="/signup" value="/signup" label="Signup" component={Link} />
                    <Tab to="/login" value="/login" label="Login" component={Link} />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}