import { Link } from "@remix-run/react";

export default function TextOnImage(params: {headText: string, imgChoice: string, smallText: string, buttonText: string}) {

    // params tell us which img to use based on page and location
    // this component can be used as the top header of the page
    let topText = typeof params.headText === "string" ? params.headText : 'MUNA';
    let img = params.imgChoice || 'default';
    let description = typeof params.smallText === "string" ? params.headText : 'muna';
    let link = params.buttonText || 'find more';
debugger;

    return(
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/muna-horizontal.webp"
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
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <Link
                to="/notes"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
              >
             {link}
              </Link>
            
          </div>
        </div>
      </div>
    );
}