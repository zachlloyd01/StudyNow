import { AppBar, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar(props) {

    const links = props.links;

    const [value, setValue] = useState(window.location.pathname);

    const handleTabChange = (e, newValue) => {
        setValue(newValue);
    }
/*

    {
        link: '/',
        label: 'Home'
    }
*/
    const navTabs = links.map((tab) => 
        <Tab to={tab.to} label={tab.label} value={tab.to} component={Link} />
    );

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
                    {navTabs}    
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}