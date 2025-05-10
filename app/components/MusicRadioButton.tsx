
interface ButtonProps {
    option: string,
    initialState: any,
    updateChoice: any
}
function MusicRadioButton(ButtonProps:ButtonProps) {

    const options = ["Music Videos", "Gayotic", "Live Performances"];
   
    return (
            <button 
                onClick={() => ButtonProps.updateChoice(ButtonProps.option)}
                
                className="justify-center rounded-md bg-violet-500 px-4 py-3 font-medium text-white hover:bg-violet-600"
            >
                {ButtonProps.option}
            </button>

    )

}

export default MusicRadioButton;