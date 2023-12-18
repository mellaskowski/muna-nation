import { Link } from "@remix-run/react";

// if more than one link button => need numOfButton param which will parse the button text on commas
export default function TextOnImage(params: {headText: string, imgChoice: string, smallText: string, buttonText: string, numOfButtons?: number}) {

    // params tell us which img to use based on page and location
    // this component can be used as the top header of the page
    let topText = typeof params.headText === "string" ? params.headText : 'MUNA';
    let imgLink = getImageReferenceLink(params.imgChoice);
    let description = typeof params.smallText === "string" ? params.smallText : 'muna';
    let link = params.buttonText || 'find more';
    let links;
    if (params.numOfButtons && params.numOfButtons > 1) {
        links = getLinks(link, params.numOfButtons);
    }

    return(
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={imgLink}
            alt="MUNA members all looking at the camera. one that got away text"
          />
          <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
        </div>
        <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
          <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
            <span className="block uppercase text-violet-500 drop-shadow-md">
              { topText } 
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
           {description} 
          </p>
          <div className="mx-auto mt-10 sm:flex sm:max-w-none sm:justify-center">

             {links}
             
            
          </div>
        </div>
      </div>
    );
}

function getLinks(buttonText: string, numOfButton: number) {
    const buttons = buttonText.split(',');
    const links = [];
    if (buttons.length === numOfButton) {
        buttons.forEach((button) => {
            links.push(
                <Link
                to="/notes"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm ml-10 mt-2 hover:bg-violet-50 sm:px-8"
              >
             {button}
              </Link>
            );
        });
    }
    return links;
}

function getImageReferenceLink(imgChoice:string) {
    let image = imgChoice;

    switch(image){
        case "about_page": {
            return "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/penelope_martinez_2023.webp";
        }
        case "home": {
            return "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/muna-horizontal.webp";
        }
        default: {
            return "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/greatest_band.avif";
        }
    }
} 