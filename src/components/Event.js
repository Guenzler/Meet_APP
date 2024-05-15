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
            <p><span>{event.start.dateTime}</span>  (Timezone <span>{event.start.timeZone}</span>)</p>
            <p>@{event.summary} | <span>{event.location}</span></p>
            <button className='showDetailsButton' onClick={toggleDetails}>
                {showDetails ? 'hide details' : 'show details'}
            </button>
            {showDetails ? (
                <div className="eventDetails">
                    <h4>About Event</h4>
                    <p><a href={event.htmlLink} target="_blank">See details on Google Calendar</a></p>
                    <p>{event.description}</p>

                </div>) : null}
        </li>
    );
}

export default Event;
