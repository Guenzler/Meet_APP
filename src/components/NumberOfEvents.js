// src/components/NumberOfEvents.js
import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
    const [numberEvents, setNumberEvents] = useState(32);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setNumberEvents(value);
        setCurrentNOE(value);
    }

    return (
        <div id="number-of-events">
            <p>Number of Events:</p>
            <p id="infoText">please enter number between 1 and 100</p>
            <input
                className="numberOfEvents"
                value={numberEvents}
                id="numberInput"
                type="number"
                min="1" max="100" step="1"
                onChange={handleInputChange}
            />
        </div>
    );
}

export default NumberOfEvents;
