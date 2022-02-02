// import { ThemeProvider } from "@emotion/react";
import { createContext, Component } from "react";

const VideoContext = createContext();
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
            <VideoContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </VideoContext.Provider>
        );
    }
}

export default VideoContextProvider;