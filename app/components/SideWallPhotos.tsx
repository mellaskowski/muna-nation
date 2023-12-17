/** function component to display photos of muna on third of screen
*
**/

// images appearings in the background or side 
// for web version .. mobile view will collapise and show photos after the content

// each page will map to a different set of photos so the same photos aren't shown on every page

function SideWallPhoto() {
  return (
  	    <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/greatest_band.avif",
                alt: "Supabase",
                href: "https://www.whereismuna.com/",
              },
              {
                src: "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/cuties.jpeg",
                alt: "Tailwind",
                href: "https://www.whereismuna.com/",
              },
              {
                src: "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/hotties.jpeg",
                alt: "Testing Library",
                href: "https://www.whereismuna.com/",
              },
                            {
                src: "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/greatest_band.avif",
                alt: "Cypress",
                href: "https://www.whereismuna.com/",
              },
              {
                src: "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/hotties.jpeg",
                alt: "Prettier",
                href: "https://www.whereismuna.com/",
              },
              {
                src: "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/muna_group.jpeg",
                alt: "ESLint",
                href: "https://www.whereismuna.com/",
              },
              {
                src: "https://raw.githubusercontent.com/mellaskowski/muna-nation/main/public/cuties.jpeg",
                alt: "TypeScript",
                href: "https://www.whereismuna.com/",
              },
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-20 w-60 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} className="rounded-lg"/>
              </a>
            ))}
          </div>
        </div>

  );
}

export default SideWallPhoto;