import {
  FaDiscord,
  FaGithub,
  FaReddit,
  FaSpotify,
  FaSteam,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiBungie } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    url: "https://go.wolfyta.dev/github",
    icon: FaGithub,
  },
  {
    name: "Discord Profile",
    url: "https://go.wolfyta.dev/discord-profile",
    icon: FaDiscord,
  },
  {
    name: "Discord Server",
    url: "https://go.wolfyta.dev/discord-server",
    icon: FaDiscord,
  },
  {
    name: "Bungie",
    url: "https://go.wolfyta.dev/bungie",
    icon: SiBungie,
  },
  {
    name: "Spotify",
    url: "https://go.wolfyta.dev/spotify",
    icon: FaSpotify,
  },
  {
    name: "Reddit",
    url: "https://go.wolfyta.dev/reddit",
    icon: FaReddit,
  },
  {
    name: "Twitch",
    url: "https://go.wolfyta.dev/twitch",
    icon: FaTwitch,
  },
  {
    name: "Twitter (x)",
    url: "https://go.wolfyta.dev/twitter",
    icon: FaTwitter,
  },
  {
    name: "YouTube",
    url: "https://go.wolfyta.dev/youtube",
    icon: FaYoutube,
  },
  {
    name: "Steam",
    url: "https://go.wolfyta.dev/steam",
    icon: FaSteam,
  },
];

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-neutral-900 min-h-screen">
      <div className="text-center">
        <img
          src="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/CSS/Sakurajima_Mai_Beginning_CSS.jpg?raw=true"
          alt="Anime Girl Holding CSS Book"
          className="shadow-lg mx-auto rounded-lg w-full max-w-lg"
        />
        <h2 className="mt-4 text-white text-xl">
          Words can't describe how much I hate web dev, It's mainly the design
          aspect that I hate..
        </h2>
        <div className="flex justify-center space-x-4 mt-6 text-[30px] text-white">
          {socials.map((social) => (
            <a key={social.name} href={social.url} rel="noreferrer">
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
