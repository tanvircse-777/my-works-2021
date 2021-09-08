import React from "react";
import {Card} from "reactstrap";
import { ReactVideo,YoutubePlayer } from "reactjs-media";

const Video = () => {
    return (
        <div>
        <Card className="card-user">
            <YoutubePlayer src="https://www.youtube.com/watch?v=hkGHaPwj29Y"
                            width='100%'
                            height='500px'
            />
        </Card>
        </div>
    );
};

export default Video;