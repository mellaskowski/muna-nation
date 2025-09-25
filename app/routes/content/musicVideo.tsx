import { useLoaderData } from "@remix-run/react";
import VideoSection from "~/components/Video/VideoSection";
import VideoOptions from "~/components/Video/VideoOptions";
import { MusicVideo as Video } from "~/models/Content/Video";
import { JSONParser } from "~/server/JSONParser";
import { useState } from "react";

export async function loader() {
    const parser = new JSONParser('data/videos_of_muna.JSON');
    return parser.parse();

}

export default function MusicVideo () {


    const videos = useLoaderData() as Video[];
    const [option, setOption] = useState("Music Videos"); // default option

    const updateVideoChoice = (option: string) => {
        console.log("Selected option:", option);
        setOption(option);
        console.log('videos', videos[0].type);

        // videos = videos.filter((video) => video.type === option);
    }

    // const parser = new JSONParser('data/official_music_videos.JSON');
    // const musicVideos = parser.parse();
    // console.log(musicVideos);

    console.log('videos', videos);

    return (
        <div>
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-violet-500 drop-shadow-md">
                  Videos
                </span>
            </h1>
 
            <VideoOptions updateVideoChoice={updateVideoChoice}/>
            <VideoSection page='music_video' type="music_video" videos={videos} filter={option}/>
            

        </div>
    );
}