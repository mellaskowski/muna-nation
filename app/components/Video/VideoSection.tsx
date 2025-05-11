import { Link } from "@remix-run/react";
import { useState } from "react";

enum MusicVideoURL {
  OneThatGotAway = "https://www.youtube.com/embed/-auMY71v5cs",
  WhatIWant = "https://www.youtube.com/embed/ysQl74R_Tog",
  SilkChiffonAtTheGreek = "https://www.youtube.com/embed/P4cw2YiOykk?si=PaAn6XgCjNhwv0lA"
}

function VideoSection(params: {page: string, type: string}) {

  let mainPage = false;
  if (params.page==='music_video') {
    // get page specific order of videos
    mainPage = true;
  }



  // return default video section
    return (

      
        <div className="grid grid-rows-1 grid-flow-col gap-1 mx-45 py-6 align-middle">
        <div className="flex flex-wrap justify-center gap-8">
        
          <iframe width="520" height="245" src={MusicVideoURL.OneThatGotAway} className="rounded-lg">
          </iframe>
          <iframe width="520" height="245" src={MusicVideoURL.WhatIWant} className="rounded-lg" />
        </div>
        { !mainPage && 
        <Link to="/content/musicVideo"
              className="flex items-center justify-center rounded-md bg-violet-500 px-4 py-3 font-medium text-white hover:bg-violet-600  "
        > Check Out More Music Videos
        </Link> }
      </div>
    );
}

function getMusicVideoPage() {

}

export default VideoSection