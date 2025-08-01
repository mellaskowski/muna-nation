import { Link, useHref } from "@remix-run/react";
import { useState } from "react";
import { MusicVideo } from "~/models/Content/Video";

enum MusicVideoURL {
  OneThatGotAway = "https://www.youtube.com/embed/-auMY71v5cs",
  WhatIWant = "https://www.youtube.com/embed/ysQl74R_Tog",
  SilkChiffonAtTheGreek = "https://www.youtube.com/embed/P4cw2YiOykk?si=PaAn6XgCjNhwv0lA"
}

function VideoSection(params: {page: string, type?: string, videos?: MusicVideo[]}) {

  let mainPage = false;
  if (params.page==='music_video') {
    // get page specific order of videos
    mainPage = true;
    return (
      <div className="grid grid-rows-flex gap-9 mx-45 py-6 align-middle">
        {params.videos && params.videos.length > 0 &&
        params.videos.map((video) => (
          <Link key={video.link} className="flex flex-wrap justify-center gap-8 hover:violet-500" 
            to={{
              pathname:'~/gayotic/thatsrank',
            }}>
              <p>
                {video.date}
              </p>
            <iframe width="520" height="245" src={video.link} className="rounded-lg"/>
            </Link>
        ))}
        </div>
    )
  }



  // return default video section
    return (

      
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
        
          <iframe width="420" height="225" src={MusicVideoURL.OneThatGotAway} className="rounded-lg">
          </iframe>
          <iframe width="420" height="225" src={MusicVideoURL.WhatIWant} className="rounded-lg" />
       
        { !mainPage && 
        <Link to="/content/musicVideo"
              className="flex items-center justify-center rounded-md bg-violet-500 px-4 py-3 font-medium text-white hover:bg-violet-600  "
        > Check Out More Music Videos
        </Link> }
         </div>
      </div>
    );
}

function getMusicVideoPage() {

}

export default VideoSection