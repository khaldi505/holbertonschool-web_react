import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'
import { getLatestNotification } from './utils.js';
function Notifications() {
    return (
        <div className='Notifications'>
            <button aria-label='close' style={{position: 'absolute',right: '3rem'}} onClick={()=> console.log('Close button has been clicked')}> <img src={closeIcon} alt="close"/> </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
        );
}

export default Notifications;