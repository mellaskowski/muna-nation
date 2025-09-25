import { useLoaderData } from "@remix-run/react";
import VideoSection from "~/components/Video/VideoSection";
import VideoOptions from "~/components/Video/VideoOptions";
import { MusicVideo as Video } from "~/models/Content/Video";
import { JSONParser } from "~/server/JSONParser";
import { useState } from "react";

export async function loader() {
    const parser = new JSONParser('data/videos_of_muna.JSON');
    if (!parser) {
        throw new Response("Failed to load videos because server unavailable", { status: 500 });
    }
    return parser.parse();

}

export default function MusicVideo () {


    const videos = useLoaderData() as Video[];
    const [option, setOption] = useState("Music Videos");

    const updateVideoChoice = (option: string) => {
        setOption(option);
    }

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