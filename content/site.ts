// All of the site's text lives here. Edit this file to update the website.

export const profile = {
  name: "Joshua Jung",
  instruments: "Oboe & English Horn",
  tagline: "Oboist · English Hornist · Nashville, TN",
  email: "joshua.jung105@gmail.com",
  location: "Nashville, Tennessee",
  siteUrl: "https://joshuajungoboe.com", // TODO: replace with your real domain
  // Optional social links. Leave a value empty ("") to hide it.
  social: {
    instagram: "https://www.instagram.com/josh.oboe/",
    youtube: "https://www.youtube.com/@Jjung__105",
  },
  // Public copy of the résumé with home address and phone removed.
  resumeUrl: "/resume/Joshua-Jung-Oboe-Resume.pdf",
};

export const bio = {
  lede: "Joshua Jung is an oboist and English hornist whose playing has been recognized with first prize at the 2026 ENKOR International Music Competition and selection as a 2026 Yamaha Young Performing Artist.",
  paragraphs: [
    "A Nashville-based freelancer since 2023, Joshua performs as substitute second oboe with the Nashville Opera Orchestra, second oboe with the period ensemble Early Music City, and principal oboe of the Blair Sinfonietta.",
    "In summer 2026, Joshua served as assistant principal oboe and English horn at the Aspen Music Festival and School, following a residency as principal oboe and English horn at the Sarasota Music Festival. A dedicated chamber musician, Joshua has played in the Blair School of Music Wind Quintet since 2023, coached by Jared Hauser, Mariam Adam, and Peter Kolkay.",
    "Joshua is pursuing a Bachelor of Musical Arts in Oboe Performance alongside a second major in Computer Science at Vanderbilt University's Blair School of Music, studying with Jared Hauser as a Blair Merit Scholar. Before Vanderbilt, Joshua studied with Erin Hannigan, principal oboe of the Dallas Symphony Orchestra.",
  ],
};

export const highlights = [
  {
    value: "1st Prize",
    label: "ENKOR International Music Competition",
    year: "2026",
  },
  { value: "Winner", label: "Yamaha Young Performing Artists", year: "2026" },
  {
    value: "Aspen",
    label: "Asst. Principal Oboe & English Horn",
    year: "2026",
  },
  { value: "Sarasota", label: "Principal Oboe & English Horn", year: "2026" },
];

export type Role = {
  ensemble: string;
  role: string;
  years: string;
  note?: string;
};

export const professional: Role[] = [
  {
    ensemble: "Nashville Opera Orchestra",
    role: "Substitute 2nd Oboe",
    years: "2025 – present",
  },
  {
    ensemble: "Early Music City",
    role: "2nd Oboe",
    years: "2025 – present",
    note: "Nashville, TN",
  },
  {
    ensemble: "Blair Sinfonietta",
    role: "Principal Oboe",
    years: "2025 – present",
  },
  {
    ensemble: "Freelance Oboist",
    role: "Oboe & English Horn",
    years: "2023 – present",
    note: "Nashville, TN",
  },
];

export const festivals: Role[] = [
  {
    ensemble: "Aspen Music Festival and School",
    role: "Assistant Principal Oboe & English Horn",
    years: "Summer 2026",
  },
  {
    ensemble: "Sarasota Music Festival",
    role: "Principal Oboe & English Horn",
    years: "June 2026",
  },
  {
    ensemble: "Vanderbilt University Orchestra",
    role: "All positions, including English Horn",
    years: "2023 – present",
  },
  {
    ensemble: "Greater Dallas Youth Orchestra",
    role: "Principal Oboe",
    years: "2020 – 2023",
  },
  {
    ensemble: "TMEA All-State Symphony Orchestra",
    role: "Principal Oboe",
    years: "2020 – 2023",
  },
];

export const chamber: Role[] = [
  {
    ensemble: "Blair School of Music Wind Quintet",
    role: "Oboe",
    years: "2023 – present",
    note: "Coached by Jared Hauser, Mariam Adam & Peter Kolkay. Concert, outreach and professional engagements.",
  },
];

export const awards = [
  {
    date: "May 2026",
    title: "ENKOR International Music Competition",
    result: "First Prize, Woodwind Division",
  },
  {
    date: "Mar 2026",
    title: "Yamaha Young Performing Artists Competition",
    result: "Winner",
  },
  {
    date: "Feb 2025",
    title: "Yamaha Young Performing Artists Competition",
    result: "Honorable Mention",
  },
  {
    date: "Mar 2023",
    title: "Greater Dallas Youth Orchestra Concerto Competition",
    result: "Winner, Woodwinds Division",
  },
  {
    date: "Oct 2021",
    title: "American Protégé International Woodwinds & Brass Competition",
    result: "First Place",
  },
  {
    date: "Jan 2020",
    title: "Collin County Young Artist Competition",
    result: "First Place, Senior Division",
  },
];

export const education = {
  school: "Vanderbilt University — Blair School of Music",
  degree: "Bachelor of Musical Arts, Oboe Performance",
  secondMajor: "Second major in Computer Science",
  graduation: "Expected May 2027",
  honors: ["Blair Merit Scholarship, 2023 – 2027", "Dean's List, 2023 – 2025"],
  teachers: [
    { name: "Jared Hauser", years: "2023 – present" },
    { name: "Erin Hannigan", years: "2021 – 2023" },
  ],
  masterclasses: [
    "Elaine Douvas",
    "Titus Underwood",
    "Nancy Ambrose King",
    "Linda Strommen",
    "Mingjia Liu",
    "Eric Ohlsson",
    "Andrea Ridilla",
    "Jung Choi",
    "Nicholas Stovall",
  ],
};

// Videos: add a YouTube video ID (the part after "v=" in the URL) to show it on the site.
// Until then, the section shows placeholder frames.
export type Video = { youtubeId: string; title: string; detail?: string };
// The first video is shown large.
export const videos: Video[] = [
  {
    youtubeId: "Gw2UCNYUVqk",
    title:
      "Pasculli — Concerto sopra motivi dell'opera “La favorita” di Donizetti",
  },
  {
    youtubeId: "GH33DPlCebc",
    title: "Strauss — Oboe Concerto in D major, I. Allegro moderato",
  },
  {
    youtubeId: "Q1Rt6jzXB14",
    title: "Mozart — Oboe Concerto in C major, K. 314",
    detail: "Greater Dallas Youth Orchestra",
  },
  {
    youtubeId: "E9kioKfgHpw",
    title: "Ivan Trevino — So Happy I Could Dance",
  },
];

// Gallery: ids refer to files generated in public/photos by `npm run photos`.
export const gallery: { id: string; caption: string }[] = [
  { id: "tag-5445", caption: "In recital with percussion" },
  { id: "2026-yypa-0909-edit", caption: "Portrait, 2026" },
  { id: "trv-0050a", caption: "In performance" },
  { id: "yypa1019", caption: "Yamaha Young Performing Artists, 2026" },
  { id: "2026-yypa-0901-edit", caption: "Portrait, 2026" },
  {
    id: "tag-7237",
    caption: "Receiving the Yamaha Young Performing Artists award",
  },
  { id: "img-0373", caption: "Portrait" },
  { id: "tgr16503", caption: "Curtain call" },
  { id: "2026-yypa-0937-edit", caption: "With percussionist, 2026" },
  { id: "tag-5227", caption: "Curtain call" },
  { id: "trv-0144a", caption: "Speaking from the stage" },
  { id: "tag-7163", caption: "Yamaha Young Performing Artists, Class of 2026" },
  { id: "yypa0996", caption: "In performance" },
  {
    id: "260622-07-25-54-leica-q3-t1020372-edit",
    caption: "Yamaha Young Performing Artists cohort, 2026",
  },
];
