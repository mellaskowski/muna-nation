import Button from "~/components/MusicRadioButton";
import VideoSection from "./VideoSection";


function VideoOptions() {
    const options = ["Music Videos", "Gayotic", "Live Performances"];

    const updateChoice = (option: string) => {
        console.log(`Selected option: ${option}`);
    }

  return (
    <div className="grid grid-flow-row gap-1 mx-45 py-6 align-middle">
    <div className="grid-row flex align-middle justify-center space-x-4 py-6">
            <Button
                option={options[0]}
                initialState={options[0]}
                updateChoice={updateChoice}
            />

            <Button
                option={options[1]}
                initialState={options[0]}
                updateChoice={updateChoice}
            />
            
            <Button
                option={options[2]}
                initialState={options[0]}
                updateChoice={updateChoice}
            />

    </div>
    <div className="grid grid-row flex flex-wrap justify-center gap-8">
        <VideoSection page='music_video' type="music_video"/>
        </div>
    </div>
  );
}
export default VideoOptions;