import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";
import VideoOptions from "~/components/Video/VideoOptions";
import { MusicVideo as Video } from "~/models/Content/Video";
import { JSONParser } from "~/server/JSONParser";

export async function action( {request}: { request: Request }) {
    const body = await request.formData();
}

export async function loader() {
    const parser = new JSONParser('data/official_live_performances.JSON');
    return parser.parse();

}

const options = [
    {
        "option": "Music Videos",
        "link": "'data/official_music_videos.JSON'"
    }, { 
        "option": "Gayotic", 
        "link": "/gayotic/thatsrank"
    }, 
    { "option": "Live Performances",
      "link": "data/official_live_performances.JSON"  
    }];

export default function MusicVideo () {


    const videos = useLoaderData<Video[]>();

    const updateVideoChoice = (option: string) => {
        console.log("Selected option:", option);
    }

    // const parser = new JSONParser('data/official_music_videos.JSON');
    // const musicVideos = parser.parse();
    // console.log(musicVideos);

    // console.log(videos);

    return (
        <div>
            <Header />
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-violet-500 drop-shadow-md">
                  Videos
                </span>
            </h1>
 
            <VideoOptions videos={videos} updateChoice={updateVideoChoice}/>

            

        </div>
    );
}