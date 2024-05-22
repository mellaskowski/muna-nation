import { Button } from "@mui/material";

enum MusicVideoURL {
  OneThatGotAway = "https://www.youtube.com/embed/-auMY71v5cs",
  WhatIWant = "https://www.youtube.com/embed/ysQl74R_Tog"
}

function VideoSection(page) {

  if (page) {
    // get page specific order of videos
  }

  // return default video section
    return (
        <div className="grid grid-rows-1 grid-flow-col gap-1 mx-45 py-6 align-middle">
        <div className="flex flex-wrap justify-center gap-8">
          <iframe width="520" height="245" src={MusicVideoURL.OneThatGotAway} className="rounded-lg">
          </iframe>
          <iframe width="520" height="245" src={MusicVideoURL.WhatIWant} className="rounded-lg" />
        </div>
        <Button className="bg-violet-300 text-white text-center size-20  ml-6 max-h-10" href={'/content/musicvideo'}>
          <span className="">
              Check Out More Music Videos
          </span>
        </Button>
      </div>
    );
}

function getMusicVideoPage() {

}

export default VideoSection