import React from 'react';
import propTypes from 'prop-types';

function Notificationitems(props){
    if(props.html)
    {
        return(<li dangerouslySetInnerHTML={{__html: props.html}} data-notification-type={props.type}></li>)
    }
    return (<li data-notification-type={props.type}>{props.value}</li>)
    
}


Notificationitems.defaultProps = {
    type : 'default',
};

Notificationitems.propTypes = {
	html: propTypes.shape({
		__html: propTypes.string,
	}),
    type : propTypes.string.isRequired,
    html : propTypes.elementType
};

export default Notificationitems;