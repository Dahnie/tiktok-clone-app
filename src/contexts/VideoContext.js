// import { ThemeProvider } from "@emotion/react";
import { createContext, useState, Component } from "react";

export const VideoContext = createContext();

// const VideoContextProvider = (props) => {
//     const [url, setUrl] = useState("");
//     const [isPlaying, setIsPlaying] = useState(false)
//     const togglePlaying = () => {
//         setIsPlaying(!isPlaying)
//     }
//     return (
//         <VideoContext.Provider value={{ url, isPlaying, togglePlaying }}>
//             {props.children}
//         </VideoContext.Provider>
//     );
// }

// export default VideoContextProvider;

class VideoContextProvider extends Component {
    state = {
        videoUrl: "",
        likes: 100,
        shares: 38,
        comments: 19,
        isPlaying: false,
        channel: "@anime_god",
        description: "Charon is so strong #fireforce",
        sound: "animation sound",
        isLiked: false,

    }
    togglePlaying() {
        this.setState({ isPlaying: !this.state.isPlaying })
    }

    toggleLiked() {
        this.setState({ isLiked: !this.state.isLiked })
    }
    render() {
        return (
            <VideoContext.Provider value={{ ...this.state, togglePlaying: this.togglePlaying, toggleLiked: this.toggleLiked }}>
                {this.props.children}
            </VideoContext.Provider>
        );
    }
}

export default VideoContextProvider;