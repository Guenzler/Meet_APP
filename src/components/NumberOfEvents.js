// src/components/NumberOfEvents.js
import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [numberEvents, setNumberEvents] = useState(32);

    const handleInputChange = (event) => {

        let errorText;
        const value = event.target.value;
        setNumberEvents(value);

        if (isNaN(value) || value > 100 || value <= 0) {
            errorText = "Please enter a number between 1 and 100";
            setErrorAlert(errorText);
        } else {
            setErrorAlert("");
            setCurrentNOE(value);
        }
    }

    return (
        <div id="number-of-events">
            <p>Number of Events:</p>
            <p id="infoText">enter number between 1 and 100</p>
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
