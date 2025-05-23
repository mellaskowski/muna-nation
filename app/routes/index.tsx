import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import SideWallPhotos from "~/components/SideWallPhotos";
import VideoSection from "~/components/Video/VideoSection";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-violet-100 sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
                  MUNA
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                The Greatest Band In The World.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-violet-500 px-4 py-3 font-medium text-white hover:bg-violet-600  "
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
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
              <VideoSection page='header'/>

              <iframe src="https://open.spotify.com/embed/artist/6xdRb2GypJ7DqnWAI2mHGn" width="100%" height="380" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

      </div>
    </main>
  );
}
