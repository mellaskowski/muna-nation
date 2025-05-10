import Button from "~/components/MusicRadioButton";


function VideoOptions() {
    const options = ["Music Videos", "Gayotic", "Live Performances"];

    const updateChoice = (option: string) => {
        console.log(`Selected option: ${option}`);
    }

  return (
    <div className="flex align-middle justify-center">
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
  );
}
export default VideoOptions;