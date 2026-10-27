/* ==========================================================================
   EDIT YOUR CONTENT HERE
   --------------------------------------------------------------------------
   GAMES    = shipped Roblox games (thumbnail image + play link + visits)
   PROJECTS = systems/showcases with a self-hosted demo clip ("file" is the
              path without extension; drop <file>.mp4 + <file>.jpg in assets/videos)
   To add a new entry, copy one block { ... }, and edit it.
   ========================================================================== */

const GAMES = [
  {
    name: "Trap and Bait",
    role: "Solo Programmer",
    studio: "Devextra",
    visits: 33638644,
    link: "https://www.roblox.com/games/117957332897543",
    image: "assets/games/trap-and-bait.png",
    desc: "Traps must prevent their bait from being taken, rats must steal it and sell it. Buy better traps and abilities to steal or trap more.",
  },
  {
    name: "Rescue Animals",
    role: "LiveOps · 3 updates",
    studio: "Devextra",
    visits: 31941818,
    link: "https://www.roblox.com/games/105775525885873",
    image: "assets/games/rescue-animals.png",
    desc: "Rescue animals from a burning tower and earn income from them on your plot. The higher you climb, the better the pets.",
  },
  {
    name: "STARFALL",
    role: "LiveOps · 1 update",
    studio: "Darkstar Interactive",
    visits: 10462102,
    link: "https://www.roblox.com/games/102529979143737",
    image: "assets/games/starfall.png",
    desc: "Large-scale interstellar PvE and PvP battles. Team up with friends against waves of mercenaries, machines and monsters — and call in your choice of three mecha classes.",
  },
  {
    name: "K-Pop Baddies",
    role: "Solo Programmer",
    studio: "ZING0",
    visits: 6023432,
    link: "https://www.roblox.com/games/103291871182886",
    image: "assets/games/k-pop-baddies.png",
    desc: "Slay K-pop Baddies, hang out, get money. Combat with stomps, soul pulls, carrying downed players, sprinting and fist fighting.",
  },
  {
    name: "Ride down a Waterslide",
    role: "LiveOps · 1 update",
    studio: "Devextra",
    visits: 5179952,
    link: "https://www.roblox.com/games/118399364638145",
    image: "assets/games/ride-down-a-waterslide.png",
    desc: "Ride a tube down a waterslide, earn money for distance, buy better tubes and use bullets to blow up and troll your friends.",
  },
  {
    name: "Dodge Walls For Brainrots!",
    role: "Solo Programmer",
    studio: "mcgiggity game production studio",
    visits: 2535112,
    link: "https://www.roblox.com/games/129542554998533",
    image: "assets/games/dodge-walls-for-brainrots.png",
    desc: "Run through tricky obstacles, dodge giant incoming walls and rescue Brainrots to earn cash for upgrades and rewards.",
  },
  {
    name: "My Singing Fish!",
    role: "Solo Programmer",
    studio: "HowtoCCU?",
    visits: 924059,
    link: "https://www.roblox.com/games/117050355640712",
    image: "assets/games/my-singing-fish.png",
    desc: "Buy unique eggs, hatch incredible fish and build a musical fish orchestra that earns money as it performs.",
  },
  {
    name: "Build a Snowman ☃️",
    role: "Solo Programmer",
    studio: "D2D Studio",
    visits: 885886,
    link: "https://www.roblox.com/games/105953253717179",
    image: "assets/games/build-a-snowman.png",
    desc: "Roll giant snowballs, stack them into snowmen on your plot, then decorate them to earn money — even while offline.",
  },
  {
    name: "Raise ur Dog 🐶",
    role: "Solo Programmer",
    studio: "D2D Studio",
    visits: 513583,
    link: "https://www.roblox.com/games/113977671592780",
    image: "assets/games/raise-ur-dog.png",
    desc: "Watch your dog grow older, earn and unlock toys for it to play with, and watch it play even while you're offline.",
  },
  {
    name: "Flamethrower Ice For Brainrots!",
    role: "Solo Programmer",
    studio: "my pfp studios",
    visits: 278594,
    link: "https://www.roblox.com/games/135655248565072",
    image: "assets/games/flamethrower-ice-for-brainrots.png",
    desc: "Melt ice to uncover hidden Brainrots, upgrade them to boost income and expand your base. Earns cash while offline.",
  },
  {
    name: "Lucky Block Arena",
    role: "Solo Programmer",
    studio: "Devextra",
    visits: 237583,
    link: "https://www.roblox.com/games/94407429155803",
    image: "assets/games/lucky-block-arena.png",
    desc: "The first ever battlegrounds simulator. Open lucky blocks for rare abilities, build the best loadout and fight for crowns.",
  },
  {
    name: "Elemental Merge Defense",
    role: "Solo Programmer",
    studio: "Mambo The Merger",
    visits: 163815,
    link: "https://www.roblox.com/games/76596765173101",
    image: "assets/games/elemental-merge-defense.png",
    desc: "Defend your base against endless waves of enemies and bosses. Merge matching towers to unlock stronger ones, and infuse them with magic elements for devastating abilities.",
  },
  {
    name: "Save Animals From Drowning!",
    role: "Solo Programmer",
    studio: "The top 67%",
    visits: 98831,
    link: "https://www.roblox.com/games/131683972885424",
    image: "assets/games/save-animals-from-drowning.png",
    desc: "Throw your lasso at drowning animals, pull them to safety, and earn money from every rescue — your animals earn and level even while offline.",
  },
  {
    name: "Become The Egg",
    role: "Solo Programmer",
    studio: "Big Bald Egg",
    visits: 86741,
    link: "https://www.roblox.com/games/128283762728120",
    image: "assets/games/become-the-egg.png",
    desc: "Become an impostor egg and steal while the boss sleeps. Train on the treadmill to get faster, then hatch rare eggs and collect rare pets.",
  },
  {
    name: "Steal A Masterpiece",
    role: "Solo Programmer",
    studio: "Mambo The Thief",
    visits: 59863,
    link: "https://www.roblox.com/games/103811481905543",
    image: "assets/games/steal-a-masterpiece.png",
    desc: "Build a museum, collect masterpieces and steal them from other players. Break into rival museums at night with bats, C4 and traps, then defend your own.",
  },
  {
    name: "Bring Dinosaurs To Life",
    role: "Solo Programmer",
    studio: "Tea Rex Studios",
    visits: 44448,
    link: "https://www.roblox.com/games/88227322273517",
    image: "assets/games/bring-dinosaurs-to-life.png",
    desc: "Dig up dinosaur bones, clean them and build the dinosaur to bring it to life. Attract visitors to your park and buy better tools to dig up rarer dinosaurs.",
  },
  {
    name: "Spin to Skydive",
    role: "Solo Programmer",
    studio: "D2D Studio",
    visits: 31223,
    link: "https://www.roblox.com/games/71698412165346",
    image: "assets/games/spin-to-skydive.png",
    desc: "Spin to win, then skydive.",
  },
];

const PROJECTS = [
  {
    title: "Pirate Fleet Attack",
    file: "assets/videos/pirate-fleet-attack",
    desc: "Space combat: pilot a ship against an attacking pirate fleet. Ship flight, weapons and enemy fleet AI all scripted by me.",
  },
  {
    title: "Sword Mech",
    file: "assets/videos/sword-mech",
    desc: "Piloted mech with sword-based melee combat, movement rig and hit detection scripted by me.",
  },
  {
    title: "Combat Tank",
    file: "assets/videos/combat-tank",
    desc: "A fully functional tank with a custom physics-based rig that simulates tank-like movement. Includes a working cannon and turret, and can be destroyed.",
  },
  {
    title: "Attack Helicopter",
    file: "assets/videos/attack-helicopter",
    desc: "Fully operable attack helicopter built on the same framework as the tank — mounted turret, missile system, and destructible.",
  },
  {
    title: "Weapon Framework",
    file: "assets/videos/weapon-framework",
    desc: "A complete third-person + FPS weapon framework that supports all types of weapons and is extremely modular.",
  },
  {
    title: "Military Vehicles",
    file: "assets/videos/military-vehicles",
    desc: "A set of military vehicles on a physics-based chassis rig simulating suspension and other vehicle behavior. Same framework as the tank & heli.",
  },
  {
    title: "Melee Combat",
    file: "assets/videos/melee-combat",
    desc: "Melee combat system with a 3-hit M1 combo, blocking, and a finisher.",
  },
  {
    title: "Ability Moveset",
    file: "assets/videos/ability-moveset",
    desc: "An ability moveset for the character Mihawk from One Piece. My first time making Roblox VFX & animations.",
  },
  {
    title: "Card Opening Gacha",
    file: "assets/videos/card-opening-gacha",
    desc: "A card-opening gacha animation for an anime game, animated entirely in code. Includes gacha functionality that grants players random weapons.",
  },
  {
    title: "Furniture Placement",
    file: "assets/videos/furniture-placement",
    desc: "A complete furniture placement system — placing, grid toggle, resizing, replacing, deleting and more. Inspired by Adopt Me.",
  },
  {
    title: "Skill Tree System",
    file: "assets/videos/skill-tree-system",
    desc: "Skill tree inspired by PETS GO. Fully modular — skills can be added and removed easily, and it's smooth on the player's end.",
  },
  {
    title: "Pet Simulator",
    file: "assets/videos/pet-simulator",
    desc: "A simulator game in the style of Pet Simulator, with pets, destruction mechanics and multiple other features.",
  },
  {
    title: "Pet System",
    file: "assets/videos/pet-system",
    desc: "Interactive inventory system for equipping pets. Pets are client-sided and dynamically match the height of the object they stand on.",
  },
  {
    title: "Egg Hatching System",
    file: "assets/videos/egg-hatching-system",
    desc: "Egg hatching for a simulator game, inspired by Pet Sim 99 and made as interactive as possible. Animation & VFX done by me.",
  },
];

/* ==========================================================================
   Site logic below — you shouldn't need to touch anything past this line.
   ========================================================================== */

function formatVisits(n) {
  return n.toLocaleString("en-US");
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
    </div>`;
  gameGrid.appendChild(card);
}

/* ---- Video showcases (muted autoplay, self-hosted, play only while on screen) ---- */
const projectGrid = document.getElementById("projectGrid");

const videoObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const v = entry.target;
        if (entry.isIntersecting) {
          if (!v.src) v.src = v.dataset.src;
          v.play().catch(() => {});
        } else if (v.src) {
          v.pause();
        }
      }
    }, { rootMargin: "200px 0px" })
  : null;

for (const project of PROJECTS) {
  const card = document.createElement("article");
  card.className = "card reveal";

  const video = document.createElement("video");
  video.className = "card-media";
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
  video.preload = "none";
  video.disablePictureInPicture = true;
  video.setAttribute("aria-label", `${project.title} demo`);
  video.poster = `${project.file}.jpg`;
  video.dataset.src = `${project.file}.mp4`;

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML = `<h3>${project.title}</h3><p class="card-desc">${project.desc}</p>`;

  card.append(video, body);
  projectGrid.appendChild(card);

  if (videoObserver) videoObserver.observe(video);
  else { video.src = video.dataset.src; }
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

/* ---- Hero button sub-labels track the content lists ---- */
document.getElementById("showcaseCount").textContent = `${PROJECTS.length} systems & demos`;
document.getElementById("gamesCount").textContent = `${GAMES.length} live games`;

/* ---- Hero name decodes from glyph noise ---- */
function scrambleIn(el, duration) {
  const finalText = el.dataset.text;
  const noise = "!<>-_\\/[]{}=+*^?#01";
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const settled = Math.floor(progress * finalText.length);
    let out = finalText.slice(0, settled);
    for (let i = settled; i < finalText.length; i++) {
      out += noise[Math.floor(Math.random() * noise.length)];
    }
    el.firstChild.nodeValue = out;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---- Hero stats count up from zero ---- */
function countUp(el, duration) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const start = performance.now();
  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = formatVisits(Math.round((1 - Math.pow(1 - t, 3)) * target)) + suffix;
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

if (!prefersReducedMotion) {
  scrambleIn(document.getElementById("heroName"), 1100);
  document.querySelectorAll(".stat-num[data-count]").forEach((el) => countUp(el, 1600));
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
