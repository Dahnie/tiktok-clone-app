import React, { useState, useRef } from 'react';
import "./Videofooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";
import Record from "../assets/img/record1.png"

function Videofooter({ channel, description, sound }) {
    const [moreOpened, setMoreOpened] = useState(false);

    // Function to trim the description
    const trimDescription = function (num, str) {
        // Splits into letter characters
        let splitStr = str.split("");
        console.log(str, str.length);
        if (str.length > num) {
            let cutOutString = splitStr.splice(0, num);
            let truncatedStr = cutOutString.join("") + "...";
            return truncatedStr;
        } else {
            return str;
        }
    }


    // Handle See more on description

    const shortDescriptionRef = useRef(null)
    const videofooterRef = useRef(null)
    const handleSeeMore = function () {
        setMoreOpened(!moreOpened)
        shortDescriptionRef.current.classList.toggle("hidden")
        // To create the little pop-up when see more is pressed
        // If see more is closed  
        if (!shortDescriptionRef.current.classList.contains("hidden")) {
            videofooterRef.current.style.bottom = "180px";
        } else {
            // If See more is opened
            videofooterRef.current.style.bottom = "200px";
        }
    }

    return (
        <div ref={videofooterRef} className='videofooter'>
            <div className='videofooter__text'>
                <h3>{`@${channel}`}</h3>
                {/* <p> { setMoreOpened || } {trimDescription(70, description)} <span onClick={handleSeeMore}>See more</span></p> */}
                <p ref={shortDescriptionRef}> {trimDescription(100, description)} <span onClick={handleSeeMore}>See more</span>  </p>
                <p onClick={handleSeeMore}>{moreOpened && description}</p>
                <div className="videofooter__ticker">
                    <MusicNoteIcon className='videofooter__icon' />

                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                                <p>{sound}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className='videofooter__record' src={Record} alt="record" />
        </div >
    );
}

export default Videofooter;
