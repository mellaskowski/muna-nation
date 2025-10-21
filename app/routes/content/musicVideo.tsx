import { useLoaderData } from "@remix-run/react";
import VideoSection from "~/components/Video/VideoSection";
import VideoOptions from "~/components/Video/VideoOptions";
import { MusicVideo as Video } from "~/models/Content/Video";
import { JSONParser } from "~/JSONParser";
import { useEffect, useState } from "react";

export async function loader() {
    try {
        const parser = new JSONParser('links/videos_of_muna.JSON');
        if (!parser) {
            throw new Response("Failed to load videos because server unavailable", { status: 500 });
        }
        console.log("Parsing video data...");
        return parser.parse();
        console.log("Video data parsed successfully.");
    } catch (error) {
        console.error("Error:", error);
        throw new Response(`Failed to load videos ${error}`, { status: 500 });
    }

}

export default function MusicVideo () {


    const [videos, setVideos] = useState<Video[]>(useLoaderData<typeof loader>());
    const [option, setOption] = useState("Music Videos");

    const updateVideoChoice = (option: string) => {
        setOption(option);
    }

    // useEffect(() => {
    //     const data = useLoaderData<typeof loader>();
    //     console.log("Loader data:", data);
    //     setVideos(data);
    //     console.log("Videos loaded:", videos);
    // }, []);

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