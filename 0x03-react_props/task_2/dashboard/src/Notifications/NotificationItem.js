import React from 'react';

function Notificationitems(props){
    if(props.html)
    {
        return(<li dangerouslySetInnerHTML={{__html: props.html}} data-notification-type={props.type}></li>)
    }
    return (<li data-notification-type={props.type}>{props.value}</li>)
    
}

export default Notificationitems;