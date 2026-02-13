const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const buttons = document.querySelectorAll(".filters-button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});



const works = [
  {
    id: "v1",
    type: "video",
    title: "Handletur med hunden min, Chii!!",
    year: 2024,
    date: "2024-10-20",
    tags: ["Video"],
    subtitle: "Filming / Editing / Narration",
    used: ["DaVinci Resolve", "iPhone 13", "CLIP STUDIO", "GarageBand"],
    youtubeId: "yoTN6geoytE",
    href: "https://www.youtube.com/watch?v=yoTN6geoytE",
    thumb: "./img/video-thumb.jpg"
  },
  {
    id: "v2",
    type: "video",
    title: "Tungekrøllkonkurranse",
    year: 2024,
    date: "2024-11-06",
    tags: ["Video", "UI/UX"],
    subtitle: "Planning / Shooting / Editing",
    used: ["DaVinci Resolve", "iPhone 13", "CLIP STUDIO", "Google form", "QR-code"],
    youtubeId: "u2ohbDlZnP4",
    href: "https://www.youtube.com/watch?v=u2ohbDlZnP4",
    thumb: "./img/video-thumb.jpg"
  },
  {
    id: "v3",
    type: "video",
    title: "Gluten free scones recipe",
    year: 2025,
    date: "2025-03-21",
    tags: ["Video"],
    subtitle: "Filming / Editing / Narration",
    used: ["DaVinci Resolve", "iPhone 13", "ChatGPT(narration)"],
    youtubeId: "Tc8v02e2XsA",
    href: "https://www.youtube.com/watch?v=Tc8v02e2XsA",
    thumb: "./img/video-thumb.jpg"
  },

  {
    id: "v4",
    type: "video",
    title: "Hva er IoT??",
    year: 2025,
    date: "2025-05-09",
    tags: ["Video", "Graphic"],
    subtitle: "Planning / Editing / Presentation",
    used: ["DaVinci Resolve", "Canva", "AI (Narration)"],
    youtubeId: "ZpxwShmlC9U",
    href: "https://www.youtube.com/watch?v=ZpxwShmlC9U",
    thumb: "./img/video-thumb.jpg"
  },
  {
    id: "v5",
    type: "video",
    title: "AI er bra!",
    year: 2025,
    date: "2025-05-12",
    tags: ["Video", "Graphic"],
    subtitle: "Planning / Editing / Presentation",
    used: ["DaVinci Resolve", "Canva", "AI (Narration)"],
    youtubeId: "Vm9Ck1Fquw4",
    href: "https://www.youtube.com/watch?v=Vm9Ck1Fquw4",
    thumb: "./img/video-thumb.jpg"
  },

  {
    id: "p1",
    type: "pdf",
    title: "Book cover design (multiple genres)",
    date: "2024-11-28",
    tags: ["Graphic"],
    subtitle: "Concept / Layout / Typography",
    used: ["Canva", "iPhone 13", "CLIP STUDIO"],
    href: "./img/pdf/YFFdesign.pdf",
    thumb: "./img/pdf/chii_med_washi.png"
  },
  {
    id: "p2",
    type: "pdf",
    title: "Enkel Layout oppgaver",
    date: "2025-03-06",
    tags: ["Graphic"],
    subtitle: "Layout / Composition / Typography",
    used: ["Canva", "Figma", "AI art"],
    href: "./img/pdf/EnkelLayout.pdf",
    thumb: "./img/pdf/Untitled.png"
  },
  {
    id: "p3",
    type: "pdf",
    title: "'Birthday Party' scrapbook",
    date: "2025-01-27",
    tags: ["Graphic"],
    subtitle: "Content Selection / Layout / Composition",
    used: ["Canva", "ChatGPT"],
    href: "./img/pdf/Birthdaypartyscrapbook.pdf",
    thumb: "./img/pdf/4.png"
  },
{
  id: "p4",
  type: "pdf",
  title: "Hva er QR-kode",
  date: "2025-04-24",
  tags: ["Graphic"],
  subtitle: "Concept / Layout / Presentation",
  used: ["Canva", "ChatGPT","AI art"],
  href: "./img/pdf/QRkode.pdf",
  thumb: "./img/pdf/qr-code.png"
},


  {
    id: "u1",
    type: "web",
    title: "Armchair EC site",
    subtitle: "Wireframe / UI / Prototype",
    date: "2025-11-29", // 日付は適当に入れてOK
    tags: ["UI/UX"],
    used: ["Figma"],
    href: "https://www.figma.com/proto/K42Yt3TZC7ozu39OssRPZi/Armchair-EC-site?node-id=19-391&t=GVRhPGd7lsivwTxg-1",
    thumb: "./img/pdf/ECSiteArmChair.png"
 },

 {
  id: "u2",
  type: "web",
  title: "YFF portfolio site (prototype)",
  subtitle: "UI design / prototype",
  date: "2025-11-12",        // 日付はあとででOK
  tags: ["UI/UX"],
  used: ["Figma"],
  href: "https://www.figma.com/proto/b2Me0C11A1qcFZN7yiahFy/YFF-portef%C3%B8ljeside?node-id=0-1&t=tlWwny9kcZkvCe7H-1",
  thumb: "./img/pdf/PFfigma.png"
},

{
  id: "w1",
  type: "web",
  title: "High or Low",
  subtitle: "Interaction / Game Flow / Logic",
  date: "2025-06-04",
  tags: ["Web", "UI/UX"],
  used: ["HTML", "CSS", "JavaScript"],
  href: "https://shokode.github.io/high-or-low/",
  thumb: "./img/pdf/HighOrLow.png"
},
{
  id: "w2",
  type: "web",
  title: "Digital Artist Portfolio",
  subtitle: "One-page / Links / Gallery",
  date: "2026-02-03",
  tags: ["Web", "UI/UX"],
  used: ["HTML", "CSS", "JavaScript"],
  href: "https://shokode.github.io/digital-artist-portfolio/",
  thumb: "./img/pdf/"
},
{
  id: "w3",
  type: "web",
  title: "Digital Artist Portfolio 2",
  subtitle: "Interaction / Game Flow / Logic",
  date: "2026-02-11",
  tags: ["Web", "UI/UX"],
  used: ["HTML", "CSS", "JavaScript", "GSAP", "Sass", "SCSS"],
  href: "https://shokode.github.io/digital-artist-portfolio2/",
  thumb: "./img/pdf/"
},

{
  id: "s1",
  type: "slides",
  title: "Hvem er universell utforming nyttig for?",
  year: 2026,
  date: "2026-01-14",
  tags: ["Graphic", "UI/UX"],
  subtitle: "Structure / Design / Presentation",
  used: ["Figma Slides"],
  figmaId: "PASTE_FIGMA_FILE_OR_SHARE_ID",
  href: "https://www.figma.com/deck/jHYu0fekzikWdTqHZlxAxK/%E7%84%A1%E9%A1%8C?node-id=1-848&t=DPPUdHS42CBdoKkP-1",
  thumb: "./img/pdf/UU1.png"
},


];



const grid = document.querySelector("#workGrid");

function cardHTML(w){
  const tagList = w.tags ?? [];
  const tags = tagList.map(t => `<span class="card__tag">${t}</span>`).join("");

  const media = (w.type === "video" && w.youtubeId)
    ? `<div class="card__media">
         <iframe
           src="https://www.youtube.com/embed/${w.youtubeId}"
           title="${w.title}"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen
         ></iframe>
       </div>`
    : `<img class="card__img" src="${w.thumb}" alt="${w.title}">`;

  const used = (w.used?.length)
    ? `<ul class="card__tools">
        ${w.used.map(u => `<li class="card__tool">${u}</li>`).join("")}
       </ul>`
    : "";

  // ✅ ここに置く
  const cta = (() => {
    if (w.type === "web" && w.used?.includes("Figma")) {
      return "View prototype →";
    }
    if (w.type === "web") {
      return "Visit site →";
    }
    if (w.type === "video") {
      return "Watch video →";
    }
    return "";
  })();

  // ↓ ここから return
  return `
    <article class="card__article" data-tags="${tagList.join(",")}" data-type="${w.type}">
      <a class="card__link" href="${w.href}" target="_blank" rel="noopener">
        ${media}

        <div class="card__tags">
          ${tags}
        </div>

        <div class="card__data">
          <span class="card__description">${w.subtitle ?? ""}</span>
          <h2 class="card__title">${w.title}</h2>
          ${used}
          <span class="card__date">${w.date ?? ""}</span>
          <span class="card__cta">${cta}</span>
        </div>
      </a>
    </article>
  `;
}




function render(list){
  grid.innerHTML = list.map(cardHTML).join("");
}

// 初期表示（最新順）
const sortedWorks = [...works].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
render(sortedWorks);

let active = "All";
document.querySelector(".filters").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if(!btn) return;

  active = btn.dataset.filter;

  const filtered = active === "All"
    ? works
    : works.filter(w => w.tags.includes(active));

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  render(sorted);
});
