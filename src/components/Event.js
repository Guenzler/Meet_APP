// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li className="event" key={event.id}>
            <h2>{event.summary}</h2>
            <p>{event.start.dateTime}</p>
            <p>{event.start.timeZone}</p>
            <p>{event.location}</p>
            <button className='showDetailsButton' onClick={toggleDetails}>
                {showDetails ? 'hide details' : 'show details'}
            </button>
            {showDetails ? (
                <div className="eventDetails">
                    <h3>Event Details</h3>
                    <p>{event.description}</p>
                    <p>{event.htmlLink}</p>
                </div>) : null}
        </li>
    );
}

export default Event;
