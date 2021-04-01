import React, { useEffect, useState } from "react";
import Notification from "./Notification";


export default function Notifier(props) {

    return(
        <React.Fragment>
            {
                props.notifications.map(function(notification) {
                    <Notification severity={notification.severity} message={notification.message} />
                })
            }
        </React.Fragment>
    );
}
