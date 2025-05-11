import Header from "~/components/Header";
import VideoOptions from "~/components/Video/VideoOptions";
import { JSONParser } from "~/server/JSONParser";

export default function MusicVideo () {

    const options = ["Music Videos", "Gayotic", "Live Performances"];
    // const parser = new JSONParser('data/official_music_videos.JSON');
    // const musicVideos = parser.parse();
    // console.log(musicVideos);


    return (
        <div>
            <Header />
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-violet-500 drop-shadow-md">
                  Videos
                </span>
            </h1>
 
            <VideoOptions />

            

        </div>
    );
}