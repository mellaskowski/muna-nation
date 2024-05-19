
function VideoSection(page) {



    return (
        <div className="grid grid-rows-1 grid-flow-col gap-1 mx-45">
        <div className="flex flex-wrap justify-center gap-8">
          <iframe width="520" height="245" src="https://www.youtube.com/embed/-auMY71v5cs" className="rounded-lg">
          </iframe>
          <iframe width="520" height="245" src="https://www.youtube.com/embed/ysQl74R_Tog" className="rounded-lg" />
        </div>
      </div>
    );
}

export default VideoSection