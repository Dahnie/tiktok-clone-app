import React, { useState } from 'react';
import "./Videosidebar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Videosidebar({ likes, shares, comments }) {

    const [liked, setLiked] = useState(false)
    const editNumbers = function (num) {
        let splitNum = num.split("");
        let truncNum = splitNum.splice(0, 2);
        let newNum;
        if (num >= 1_000_000_000) {
            newNum = `${truncNum[0]}.${truncNum[1]}B`
            return newNum;
        } else if (num >= 1_000_000 && num < 1_000_000_000) {
            newNum = `${truncNum[0]}.${truncNum[1]}M`
            return newNum;
        } else if (num >= 1_100 && num < 1_000_000) {
            newNum = `${truncNum[0]}.${truncNum[1]}K`
            return newNum;
        } else {
            return num;
        }
    }

    return (
        <div className='videosidebar'>

            <div className="videosidebar__button">
                {liked ? <FavoriteIcon onClick={(e) => setLiked(false)} fontSize='large' className='videosidebar__icon' /> : <FavoriteBorderIcon onClick={(e) => setLiked(true)} fontSize='large' className='videosidebar__icon' />}

                <p className='amount'>{liked ? editNumbers(likes + 1) : editNumbers(likes)}</p>
            </div>
            <div className="videosidebar__button">
                <ShareIcon fontSize='large' className='videosidebar__icon' />
                <p className='amount'>{editNumbers(shares)}</p>
            </div>
            <div className="videosidebar__button">
                <MessageIcon fontSize='large' className='videosidebar__icon' />
                <p className='amount'>{editNumbers(comments)}</p>
            </div>

        </div>
    );
}

export default Videosidebar;
