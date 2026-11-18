import credits from "./credits.json";

export const profile = {
  name: "Robin Thomas",
  email: "rj1447@hotmail.com",
  linkedin: "https://www.linkedin.com/in/robin-thomas-rj1447/",
  github: "https://github.com/TheRealHazzard",
  place: "Bengaluru, India",
};

// Each plate is a piece of Tekion work, told as outcomes. No internal details.
export const plates = [
  {
    id: "config",
    title: "Config-driven, from scratch",
    fact: "Survived 3 migrations",
    stat: "0",
    statLabel: "breaking changes for consumers",
    text: "A legacy configuration system made every change a deploy. I led the rebuild into a self-serve platform with proper data indexing, then re-architected the API layer into a routing system that absorbed three platform migrations with zero breaking changes for consumers.",
  },
  {
    id: "mfe",
    title: "One monolith, many releases",
    fact: "Every core app, its own release",
    stat: "All",
    statLabel: "team-owned core apps, each on its own release",
    text: "One team's change could block every other team's release. I led the migration of every team-owned core application to micro-frontends with Module Federation, so deploys stopped being all-or-nothing events.",
  },
  {
    id: "speed",
    title: "Twelve seconds to five",
    fact: "12 s to 5 s load time",
    stat: "−58%",
    statLabel: "time to interactive",
    text: "A bootstrap-heavy enterprise application took 12 seconds to become interactive, and users were opening tickets about it. I profiled the bootstrap path, moved to lazy loading and deferred calls, and removed the synchronous work that blocked first paint.",
  },
  {
    id: "history",
    title: "Contact history, rebuilt",
    fact: "22% more productive",
    stat: "+22%",
    statLabel: "measured user productivity",
    text: "Contact history was paginated and slow to navigate. I built an infinite-scroll view with a layout shaped by how people actually search it. Measured user productivity rose 22%, with no increase in support tickets.",
  },
] as const;

// The stage: real, running projects. `live` is the deployed site shown in the frame.
export const projects = [
  {
    id: "tickerline",
    name: "Tickerline",
    live: "https://therealhazzard.github.io/tickerline/",
    code: "https://github.com/TheRealHazzard/tickerline",
    poster: "/work/tickerline.webp",
    text: "Live crypto prices over a WebSocket, candlestick charts and plain-English indicator signals. It reconnects on its own and keeps your watchlist.",
    facts: "Lighthouse 97, 19 tests",
  },
  {
    id: "schema-ui",
    name: "schema-ui",
    live: "https://therealhazzard.github.io/schema-ui/",
    code: "https://github.com/TheRealHazzard/schema-ui",
    poster: "/work/schema-ui.webp",
    text: "Forms and tables from JSON. Edit the schema on the left and watch an accessible, validated form render on the right.",
    facts: "Lighthouse 100, 33 tests",
  },
  {
    id: "mfe-starter",
    name: "mfe-starter",
    live: "https://therealhazzard.github.io/mfe-starter/",
    code: "https://github.com/TheRealHazzard/mfe-starter",
    poster: "/work/mfe-starter.webp",
    text: "A shell and two apps, deployed separately and joined in the browser. Take one down and the rest keeps working.",
    facts: "Lighthouse 94, three deployments",
  },
  {
    id: "perf-case-study",
    name: "perf-case-study",
    live: null,
    code: "https://github.com/TheRealHazzard/perf-case-study",
    poster: "/work/perf-results.svg",
    text: "A deliberately slow Next.js page, fixed in five measured steps. Lighthouse 52 to 93, and the largest paint from 8.9 seconds to 1.7.",
    facts: "Every step is a git tag",
  },
] as const;

// More apps. Shown as tiles that open the code; they run on a home network or a device, so there is no hosted frame.
export const more = [
  {
    id: "home-dashboard",
    name: "Home dashboard",
    code: "https://github.com/TheRealHazzard/home-dashboard",
    image: "/work/home-dashboard.webp",
    text: "An always-on kiosk for a mounted tablet: time, weather, tasks, quick links, lights and Spotify.",
  },
  {
    id: "smart-home-dashboard",
    name: "Smart home dashboard",
    code: "https://github.com/TheRealHazzard/smart-home-dashboard",
    image: "/work/smart-home.webp",
    text: "One page that controls Hue, Tapo and Nanoleaf lights on your network. Demo mode needs no hardware.",
  },
  {
    id: "this-site",
    name: "This site",
    code: "https://github.com/TheRealHazzard/portfolio",
    image: "/work/portfolio.webp",
    text: "Static Next.js with no UI library: sticky sections, figures drawn in code and live frames.",
  },
] as const;

export const backstage = [
  {
    id: "plays",
    image: "/img/stage.webp",
    title: "Plays",
    text: "I write, direct and act in stage plays.",
    credit: "Photo: Nilo Velez, CC0",
  },
  {
    id: "films",
    image: "/img/camera.webp",
    title: "Films",
    text: "And in short films, from the script to the last cut.",
    credit: "Photo: Joe Haupt, CC BY-SA 2.0",
  },
  {
    id: "books",
    image: "/img/desk.webp",
    title: "Stories",
    text: "Most of the rest goes to books, games and the board game table.",
    credit: "Photo: Thomas Quine, CC BY 2.0",
  },
  {
    id: "city",
    image: "/img/glasshouse.webp",
    title: "Bengaluru",
    text: "Home, and happiest when the next trip is already planned.",
    credit: "Photo: Swathi ural, CC BY-SA 4.0",
  },
] as const;

type Credit = { file: string; title: string; creator: string | null; license: string; page: string };

const short: Record<string, string> = {
  "fox-theatre-detroit-interior": "Fox Theatre, Detroit",
  "an-empty-auditorium-with-rows-of-orange": "An empty auditorium",
  "vintage-bolex-233-compact-super-8-movie": "Bolex 233 camera",
  "antique-writing-desk-casa-loma": "Writing desk, Casa Loma",
  "glasshouse-lalbagh": "Glasshouse, Lalbagh",
  "vidhana-souda-bangalore": "Vidhana Soudha, Bengaluru",
};

export const photoCredits = (credits as Credit[]).map((c) => {
  const key = c.file.replace(/^.*\//, "").replace(/\.\w+$/, "");
  return { name: short[key] ?? c.title, by: c.creator ?? "Unknown", license: c.license, page: c.page };
});
