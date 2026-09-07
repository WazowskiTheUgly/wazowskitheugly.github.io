/* ==========================================================================
   EDIT YOUR CONTENT HERE
   --------------------------------------------------------------------------
   GAMES    = shipped Roblox games (thumbnail image + play link + visits)
   PROJECTS = systems/showcases with a YouTube video demo ("video" is the
              YouTube video ID — the part after watch?v= in the URL)
   To add a new entry, copy one block { ... }, and edit it.
   ========================================================================== */

const GAMES = [
  {
    name: "Steal A Masterpiece",
    role: "Independent · Full Game",
    contribution: "My own game — designed, programmed and shipped solo. Launched September 2026.",
    studio: "Mambo The Thief",
    visits: 5538,
    link: "https://www.roblox.com/games/103811481905543",
    image: "assets/games/steal-a-masterpiece.png",
    desc: "Build a museum, collect masterpieces and steal them from other players. Break into rival museums at night with bats, C4 and traps, then defend your own.",
  },
  {
    name: "Trap and Bait",
    role: "Solo Programmer",
    contribution: "Fully coded by me.",
    studio: "Devextra",
    visits: 32157487,
    link: "https://www.roblox.com/games/117957332897543",
    image: "assets/games/trap-and-bait.png",
    desc: "Traps must prevent their bait from being taken, rats must steal it and sell it. Buy better traps and abilities to steal or trap more.",
  },
  {
    name: "Rescue Animals",
    role: "LiveOps · 3 updates",
    contribution: "Shipped 3 urgent updates.",
    studio: "Devextra",
    visits: 29824338,
    link: "https://www.roblox.com/games/105775525885873",
    image: "assets/games/rescue-animals.png",
    desc: "Rescue animals from a burning tower and earn income from them on your plot. The higher you climb, the better the pets.",
  },
  {
    name: "STARFALL",
    role: "LiveOps · 1 update",
    contribution: "Coded 1 update for the game.",
    studio: "Darkstar Interactive",
    visits: 9833431,
    link: "https://www.roblox.com/games/102529979143737",
    image: "assets/games/starfall.png",
    desc: "Large-scale interstellar PvE and PvP battles. Team up with friends against waves of mercenaries, machines and monsters — and call in your choice of three mecha classes.",
  },
  {
    name: "K-Pop Baddies",
    role: "Solo Programmer",
    contribution: "Produced within 2 weeks.",
    studio: "ZING0",
    visits: 6023432,
    link: "https://www.roblox.com/games/103291871182886",
    image: "assets/games/k-pop-baddies.png",
    desc: "Slay K-pop Baddies, hang out, get money. Combat with stomps, soul pulls, carrying downed players, sprinting and fist fighting.",
  },
  {
    name: "Ride down a Waterslide",
    role: "LiveOps · 1 update",
    contribution: "Initially coded by another programmer — I was in charge of coding an update for it.",
    studio: "Devextra",
    visits: 5177043,
    link: "https://www.roblox.com/games/118399364638145",
    image: "assets/games/ride-down-a-waterslide.png",
    desc: "Ride a tube down a waterslide, earn money for distance, buy better tubes and use bullets to blow up and troll your friends.",
  },
  {
    name: "Dodge Walls For Brainrots!",
    role: "Solo Programmer",
    contribution: "Fully coded by me.",
    studio: "mcgiggity game production studio",
    visits: 2437712,
    link: "https://www.roblox.com/games/129542554998533",
    image: "assets/games/dodge-walls-for-brainrots.png",
    desc: "Run through tricky obstacles, dodge giant incoming walls and rescue Brainrots to earn cash for upgrades and rewards.",
  },
  {
    name: "My Singing Fish!",
    role: "Solo Programmer",
    contribution: "Programmed the entire game within a week.",
    studio: "HowtoCCU?",
    visits: 918626,
    link: "https://www.roblox.com/games/117050355640712",
    image: "assets/games/my-singing-fish.png",
    desc: "Buy unique eggs, hatch incredible fish and build a musical fish orchestra that earns money as it performs.",
  },
  {
    name: "Build a Snowman ☃️",
    role: "Solo Programmer",
    contribution: "Coded the entire game within the span of a week.",
    studio: "D2D Studio",
    visits: 881020,
    link: "https://www.roblox.com/games/105953253717179",
    image: "assets/games/build-a-snowman.png",
    desc: "Roll giant snowballs, stack them into snowmen on your plot, then decorate them to earn money — even while offline.",
  },
  {
    name: "Raise ur Dog 🐶",
    role: "Solo Programmer",
    contribution: "Coded the entire game within a few days.",
    studio: "D2D Studio",
    visits: 470702,
    link: "https://www.roblox.com/games/113977671592780",
    image: "assets/games/raise-ur-dog.png",
    desc: "Watch your dog grow older, earn and unlock toys for it to play with, and watch it play even while you're offline.",
  },
  {
    name: "Flamethrower Ice For Brainrots!",
    role: "Solo Programmer",
    contribution: "Fully coded by me.",
    studio: "my pfp studios",
    visits: 274056,
    link: "https://www.roblox.com/games/135655248565072",
    image: "assets/games/flamethrower-ice-for-brainrots.png",
    desc: "Melt ice to uncover hidden Brainrots, upgrade them to boost income and expand your base. Earns cash while offline.",
  },
  {
    name: "Lucky Block Arena",
    role: "Solo Programmer",
    contribution: "In charge of coding the entire game — multiple systems and challenging combat mechanics, produced over 2 months.",
    studio: "Devextra",
    visits: 237532,
    link: "https://www.roblox.com/games/94407429155803",
    image: "assets/games/lucky-block-arena.png",
    desc: "The first ever battlegrounds simulator. Open lucky blocks for rare abilities, build the best loadout and fight for crowns.",
  },
  {
    name: "Elemental Merge Defense",
    role: "Solo Programmer",
    contribution: "Fully coded by me.",
    studio: "Mambo The Merger",
    visits: 104996,
    link: "https://www.roblox.com/games/76596765173101",
    image: "assets/games/elemental-merge-defense.png",
    desc: "Defend your base against endless waves of enemies and bosses. Merge matching towers to unlock stronger ones, and infuse them with magic elements for devastating abilities.",
  },
  {
    name: "Spin to Skydive",
    role: "Solo Programmer",
    contribution: "Fully coded by me.",
    studio: "D2D Studio",
    visits: 30953,
    link: "https://www.roblox.com/games/71698412165346",
    image: "assets/games/spin-to-skydive.png",
    desc: "Spin to win, then skydive.",
  },
  {
    name: "Save Animals From Drowning!",
    role: "Solo Programmer",
    contribution: "Fully coded by me.",
    studio: "The top 67%",
    visits: 8125,
    link: "https://www.roblox.com/games/131683972885424",
    image: "assets/games/save-animals-from-drowning.png",
    desc: "Throw your lasso at drowning animals, pull them to safety, and earn money from every rescue — your animals earn and level even while offline.",
  },
];

const PROJECTS = [
  {
    title: "Pirate Fleet Attack",
    video: "OHZDI_w3c_E",
    desc: "Space combat: pilot a ship against an attacking pirate fleet. Ship flight, weapons and enemy fleet AI all scripted by me.",
  },
  {
    title: "Sword Mech",
    video: "dgZXwx5gYHA",
    desc: "Piloted mech with sword-based melee combat, movement rig and hit detection scripted by me.",
  },
  {
    title: "Combat Tank",
    video: "bChsHZ9-Fqc",
    desc: "A fully functional tank with a custom physics-based rig that simulates tank-like movement. Includes a working cannon and turret, and can be destroyed.",
  },
  {
    title: "Attack Helicopter",
    video: "YXkV9Z9KKoU",
    desc: "Fully operable attack helicopter built on the same framework as the tank — mounted turret, missile system, and destructible.",
  },
  {
    title: "Weapon Framework",
    video: "H3F_W39J5Qg",
    desc: "A complete third-person + FPS weapon framework that supports all types of weapons and is extremely modular.",
  },
  {
    title: "Military Vehicles",
    video: "IjbgEyvpScg",
    desc: "A set of military vehicles on a physics-based chassis rig simulating suspension and other vehicle behavior. Same framework as the tank & heli.",
  },
  {
    title: "Melee Combat",
    video: "FzcvHygie1E",
    desc: "Melee combat system with a 3-hit M1 combo, blocking, and a finisher.",
  },
  {
    title: "Ability Moveset",
    video: "PTH7SES4GLU",
    desc: "An ability moveset for the character Mihawk from One Piece. My first time making Roblox VFX & animations.",
  },
  {
    title: "Card Opening Gacha",
    video: "FojxGOBNQU4",
    desc: "A card-opening gacha animation for an anime game, animated entirely in code. Includes gacha functionality that grants players random weapons.",
  },
  {
    title: "Furniture Placement",
    video: "XpDa0onltag",
    desc: "A complete furniture placement system — placing, grid toggle, resizing, replacing, deleting and more. Inspired by Adopt Me.",
  },
  {
    title: "Skill Tree System",
    video: "X0AB9NdFRQI",
    desc: "Skill tree inspired by PETS GO. Fully modular — skills can be added and removed easily, and it's smooth on the player's end.",
  },
  {
    title: "Pet Simulator",
    video: "ICBlhpvlOQc",
    desc: "A simulator game in the style of Pet Simulator, with pets, destruction mechanics and multiple other features.",
  },
  {
    title: "Pet System",
    video: "UUejeD5T2i0",
    desc: "Interactive inventory system for equipping pets. Pets are client-sided and dynamically match the height of the object they stand on.",
  },
  {
    title: "Egg Hatching System",
    video: "EysCCgAXqOg",
    desc: "Egg hatching for a simulator game, inspired by Pet Sim 99 and made as interactive as possible. Animation & VFX done by me.",
  },
];

/* ==========================================================================
   Site logic below — you shouldn't need to touch anything past this line.
   ========================================================================== */

function formatVisits(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return String(n);
}

/* ---- Shipped games ---- */
const gameGrid = document.getElementById("gameGrid");
for (const game of GAMES) {
  const card = document.createElement("a");
  card.className = "card game-card reveal";
  card.href = game.link;
  card.target = "_blank";
  card.rel = "noopener";
  card.innerHTML = `
    <div class="card-media">
      <img src="${game.image}" alt="${game.name} thumbnail" loading="lazy">
      <span class="role-badge">${game.role}</span>
      <span class="visits-badge">▶ ${formatVisits(game.visits)} visits</span>
    </div>
    <div class="card-body">
      <h3>${game.name}</h3>
      ${game.contribution ? `<p class="card-contrib">${game.contribution}</p>` : ""}
    </div>`;
  gameGrid.appendChild(card);
}

/* ---- Video showcases (muted autoplay, mounted as they scroll into view) ---- */
const projectGrid = document.getElementById("projectGrid");
const EMBED_PARAMS = "autoplay=1&mute=1&loop=1&controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3";

function mountVideo(media, project) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${project.video}?${EMBED_PARAMS}&playlist=${project.video}`;
  iframe.title = project.title;
  iframe.allow = "autoplay; encrypted-media; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.className = "card-media";
  iframe.tabIndex = -1;
  media.replaceWith(iframe);
}

const videoObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        videoObserver.unobserve(entry.target);
        mountVideo(entry.target, entry.target._project);
      }
    }, { rootMargin: "300px 0px" })
  : null;

for (const project of PROJECTS) {
  const card = document.createElement("article");
  card.className = "card reveal";

  const media = document.createElement("div");
  media.className = "card-media";
  media._project = project;

  const thumb = document.createElement("img");
  thumb.src = `https://i.ytimg.com/vi/${project.video}/maxresdefault.jpg`;
  thumb.alt = `${project.title} video preview`;
  thumb.loading = "lazy";
  thumb.onerror = () => {
    thumb.onerror = null;
    thumb.src = `https://i.ytimg.com/vi/${project.video}/hqdefault.jpg`;
  };
  media.append(thumb);

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML = `<h3>${project.title}</h3><p class="card-desc">${project.desc}</p>`;

  card.append(media, body);
  projectGrid.appendChild(card);

  if (videoObserver) videoObserver.observe(media);
  else mountVideo(media, project);
}

/* ---- Copy Discord username ---- */
const copyBtn = document.getElementById("copyDiscord");
const copyHint = document.getElementById("copyHint");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("wazowski_theugly");
    copyHint.textContent = "copied!";
  } catch {
    copyHint.textContent = "copy failed — it's: wazowski_theugly";
  }
  setTimeout(() => (copyHint.textContent = "click to copy"), 2000);
});

/* ---- Footer year ---- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---- Scroll-reveal animation (skipped if user prefers reduced motion) ---- */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

/* ---- Cursor glow on the background grid ---- */
if (!prefersReducedMotion) {
  const bgGrid = document.getElementById("bgGrid");
  window.addEventListener(
    "pointermove",
    (e) => {
      bgGrid.style.setProperty("--glow-x", e.clientX + "px");
      bgGrid.style.setProperty("--glow-y", e.clientY + "px");
    },
    { passive: true }
  );
}
