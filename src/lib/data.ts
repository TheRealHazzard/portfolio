import credits from "./credits.json";

export const profile = {
  name: "Robin Thomas",
  email: "rj1447@hotmail.com",
  linkedin: "https://www.linkedin.com/in/robin-thomas-rj1447/",
  github: "https://github.com/TheRealHazzard",
  place: "Bengaluru, India",
};

// The route: a transit-style map of the work. Add a station by adding a row here, in time order.
// "on" lists the lines that stop at the station; two or more makes an interchange.
// "stage" opens that project in the pinned stage; "href" adds a plain link.
export type LineId = "code" | "stage" | "build";

export const lines: { id: LineId; name: string }[] = [
  { id: "code", name: "Code" },
  { id: "stage", name: "Stage and screen" },
  { id: "build", name: "Builds" },
];

export type Station = {
  year: string;
  title: string;
  text: string;
  on: LineId[];
  stage?: number;
  href?: string;
  hrefLabel?: string;
};

// Years marked (?) are inferred from file dates and registration numbers: please confirm.
export const journey: Station[] = [
  { year: "2017", title: "VIT, Vellore", text: "B.Tech in computer science, finished with a CGPA of 9.09.", on: ["code"] },
  { year: "2018", title: "Hollowness", text: "A short film. The scripts still live in a repo.", on: ["stage"] },
  { year: "2020", title: "Arduino home automation", text: "Bluetooth lights switched from an Android phone, built as a university project.", on: ["code", "build"] },
  { year: "2021", title: "Tekion, intern", text: "React.js and Ant Design, in a real product from the first week.", on: ["code"] },
  { year: "2021", title: "Contact history, rebuilt", text: "As an associate engineer on CRM systems: an infinite-scroll view that lifted measured productivity by 22%.", on: ["code"], href: "#work", hrefLabel: "The Tekion plates" },
  { year: "Always", title: "Plays", text: "Writing, directing and acting in stage plays, alongside the day job.", on: ["stage"], href: "#backstage", hrefLabel: "Backstage" },
  { year: "2022", title: "Access control and security", text: "Software Engineer I, working on permissions and security.", on: ["code"] },
  { year: "2023", title: "Micro-frontends", text: "Software Engineer II. Every team-owned core app moved to Module Federation, a 12 second bootstrap cut to 5, and a legacy configuration system rebuilt as a self-serve platform.", on: ["code"], href: "#work", hrefLabel: "The details" },
  { year: "2026", title: "Senior Software Engineer", text: "Architecture and mentoring at Tekion.", on: ["code"] },
  { year: "2026", title: "Tickerline", text: "Live crypto prices over a WebSocket, with candlestick charts.", on: ["build"], stage: 0 },
  { year: "2026", title: "schema-ui", text: "Forms and tables from JSON, accessible and tested.", on: ["build"], stage: 1 },
  { year: "2026", title: "mfe-starter", text: "The day job's micro-frontend work, rebuilt in the open as a starter.", on: ["build", "code"], stage: 2 },
  { year: "2026", title: "perf-case-study", text: "A slow page fixed in five measured steps: Lighthouse 52 to 93.", on: ["build"], stage: 3 },
  { year: "Today", title: "Bengaluru", text: "Still building and still on stage. More stations to come.", on: ["code", "stage", "build"] },
];

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
