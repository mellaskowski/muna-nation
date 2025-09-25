import { redirect } from "@remix-run/node";

interface ButtonProps {
    option: string,
    initialState: any,
    updateChoice: any
}

const choice = "justify-center rounded-md bg-violet-400 px-4 py-3 font-medium text-white hover:bg-violet-600";
const SelectedChoice = "justify-center rounded-md bg-violet-800 px-4 py-3 font-medium border-violet-900 text-white hover:bg-violet-600";

function MusicRadioButton(ButtonProps:ButtonProps) {

    const options = ["Music Videos", "Gayotic", "Live Performances"];
   
    const onClick = () => {
        // if (ButtonProps.option === options[1]) {
        //     return redirect("/gayotic/thatsrank");
        // }
        return ButtonProps.updateChoice(ButtonProps.option);
    }

    return (
            <button 
                onClick={onClick}
                type="button"
                radioGroup="options"
                value={ButtonProps.option}
                className={ButtonProps.option == ButtonProps.initialState ? SelectedChoice : choice}
            >
                {ButtonProps.option}
            </button>

    )

}

export default MusicRadioButton;