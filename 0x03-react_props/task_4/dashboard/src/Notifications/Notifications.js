import React from 'react';
import Notificationitems from './NotificationItem';
import './Notifications.css';
import closeicon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import propTypes from 'prop-types';



function Notifications({displayDrawer}){
    let displayValue = 'none'
    if (displayDrawer){
        displayValue = 'block'
    }
    return(
        <div className='notificationsElement'>
        <div className='menuItem'>Your notifications</div>
        <div className='Notifications' style={{display:displayValue}} >
            <button onClick={(e) => console.log('Close button has been clicked')}  aria-label="Close" style={{display: 'inline'}}><img height='16px' width="16px" alt='close' src={closeicon}></img></button>
            <p>Here is the list of notifications</p>
			    <ul>
			    	<Notificationitems value="New course available" type='default'/>
			    	<Notificationitems value="New resume available" type='urgent'/>
			    	<Notificationitems html={getLatestNotification()} type='urgent'/>				
			    </ul>
        </div>
        </div>
    );
}

Notifications.defaultProps = {
    displayDrawer : false,

};

Notifications.propTypes = {
    displayDrawer : propTypes.bool
};


export default Notifications;
