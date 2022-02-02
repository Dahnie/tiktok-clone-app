import React from 'react';
import "./Videofooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";
import Record from "../assets/img/record1.png"

function Videofooter({ channel, description, sound }) {
    return (
        <div className='videofooter'>
            <div className='videofooter__text'>
                <h3>{channel}</h3>
                <p>{description}</p>
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
        </div>
    );
}

export default Videofooter;
