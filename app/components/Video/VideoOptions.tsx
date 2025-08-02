import Button from "~/components/MusicRadioButton";
import VideoSection from "./VideoSection";
import { MusicVideo } from "~/models/Content/Video";
import React, { useState } from "react";



function VideoOptions(params: {videos: MusicVideo[], updateChoice?: (option: string) => void}) {
    const options = ["Music Videos", "Gayotic", "Live Performances"];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const updateChoice = (option: string) => {
        setSelectedOption(option);
        params.updateChoice?.(option);
        // console.log("Selected option:", option);
        // console.log("Selected option state:", SelectedOption);
        // console.log("Videos:", params.videos);
    }

  return (
    <div className="grid grid-flow-row gap-1 mx-45 py-6 align-middle">
    <div className="grid-row flex align-middle justify-center space-x-4 py-6">
            <Button
                option={options[0]}
                initialState={selectedOption}
                updateChoice={updateChoice}
            />

            <Button
                option={options[1]}
                initialState={selectedOption}
                updateChoice={updateChoice}
            />
            
            <Button
                option={options[2]}
                initialState={selectedOption}
                updateChoice={updateChoice}
            />

    </div>
    <div className="grid grid-row flex flex-wrap justify-center gap-8">
        
        </div>
    </div>
  );
}
export default VideoOptions;