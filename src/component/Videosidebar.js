import React, { useState } from 'react';
import "./Videosidebar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Videosidebar({ likes, shares, comments }) {

    const [liked, setLiked] = useState(false)
    return (
        <div className='videosidebar'>

            <div className="videosidebar__button">
                {liked ? <FavoriteIcon onClick={(e) => setLiked(false)} fontSize='large' className='videosidebar__icon' /> : <FavoriteBorderIcon onClick={(e) => setLiked(true)} fontSize='large' className='videosidebar__icon' />}

                <p className='amount'>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videosidebar__button">
                <ShareIcon fontSize='large' className='videosidebar__icon' />
                <p className='amount'>{shares}</p>
            </div>
            <div className="videosidebar__button">
                <MessageIcon fontSize='large' className='videosidebar__icon' />
                <p className='amount'>{comments}</p>
            </div>

        </div>
    );
}

export default Videosidebar;
