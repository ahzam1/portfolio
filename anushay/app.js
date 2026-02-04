// script.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    { type: "cover" },
    { type: "milestone", title: "First Date", date: "October 11th, 2025", caption: "I knew it was wraps on this day..." },
    { type: "milestone", title: "BF / GF", date: "November 23rd, 2025", caption: "The day you gave up your rights" },
    { type: "milestone", title: "'I love you'", date: "December 23rd, 2025", caption: "I said it first hehe" },
    { type: "milestone", title: "Latest Date", date: "Feb 08, 2026", caption: "Look at us now, so perfect together" },
    { type: "favorites" },
    { type: "final" }
  ];

  let current = 0;

  const slideEl = document.getElementById("slide");
  const progressEl = document.getElementById("progress");
  const viewportEl = document.getElementById("viewport");

  /* ---------- Progress Bars ---------- */

  function createProgressBars() {
    progressEl.innerHTML = "";
    slides.forEach(() => {
      const bar = document.createElement("div");
      bar.className = "bar";
      const fill = document.createElement("div");
      fill.className = "fill";
      bar.appendChild(fill);
      progressEl.appendChild(bar);
    });
  }

  // Counts current slide as “filled”
  function updateProgress() {
    [...progressEl.children].forEach((bar, i) => {
      const fill = bar.firstChild;
      fill.style.width = i <= current ? "100%" : "0%";
    });
  }

  /* ---------- Slide Rendering ---------- */

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderSlide() {
    current = Math.max(0, Math.min(current, slides.length - 1));
    const s = slides[current];

    slideEl.innerHTML = "";

    if (s.type === "cover") {
      slideEl.innerHTML = `
        <div class="card cover">
          <h1>Happy Valentine's Day</h1>
          <h2>Jaanu ❤️</h2>
        </div>
      `;
    } else if (s.type === "milestone") {
      slideEl.innerHTML = `
        <div class="card">
          <div class="photo"></div>
          <div class="meta">
            <h2>${escapeHtml(s.title)}</h2>
            <p>${escapeHtml(s.date)}</p>
            <p>${escapeHtml(s.caption)}</p>
          </div>
        </div>
      `;
    } else if (s.type === "favorites") {
      slideEl.innerHTML = `
        <div class="card">
          <h2>Us ❤️</h2>
          <div class="grid">
            <div class="tile"></div><div class="tile"></div>
            <div class="tile"></div><div class="tile"></div>
            <div class="tile"></div><div class="tile"></div>
          </div>
        </div>
      `;
    } else if (s.type === "final") {
      slideEl.innerHTML = `
        <div class="card final">
          <h2>Meri Jaan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>— Ahzam ❤️</p>
        </div>
      `;
    } else {
      slideEl.innerHTML = `<div class="card">Unknown slide.</div>`;
    }

    updateProgress();
  }

  /* ---------- Story-like transitions (correct-direction entry) ---------- */

  let isAnimating = false;

  function animateSnapBack() {
    slideEl.style.transition = "transform 180ms ease, opacity 180ms ease";
    slideEl.style.transform = "translateX(0px)";
    slideEl.style.opacity = "1";
  }

  // direction: "next" (new enters from right), "prev" (new enters from left)
function goTo(targetIndex, direction, fromDx = 0) {
  if (isAnimating) return;

  const clamped = Math.max(0, Math.min(targetIndex, slides.length - 1));
  if (clamped === current) {
    animateSnapBack();
    return;
  }

  isAnimating = true;

  const width = window.innerWidth;
  const outX = direction === "next" ? -width : width;   // current exits
  const inStartX = direction === "next" ? width : -width; // new enters

  // Start exit from current drag position (smooth)
  slideEl.style.transition = "none";
  slideEl.style.transform = `translateX(${fromDx}px)`;

  // Force layout so the browser commits the starting transform immediately
  void slideEl.offsetHeight;

  // Animate current slide out
  slideEl.style.transition = "transform 220ms ease, opacity 220ms ease";
  slideEl.style.transform = `translateX(${outX}px)`;
  slideEl.style.opacity = "0";

  slideEl.addEventListener("transitionend", function outEnd() {
    slideEl.removeEventListener("transitionend", outEnd);

    // Swap content while hidden/offscreen
    current = clamped;
    renderSlide();

    // Place new slide offscreen on correct side (still hidden)
    slideEl.style.transition = "none";
    slideEl.style.transform = `translateX(${inStartX}px)`;
    slideEl.style.opacity = "0";

    // Force layout again to avoid “delay” / missed transition
    void slideEl.offsetHeight;

    // Animate new slide in immediately
    slideEl.style.transition = "transform 220ms ease, opacity 220ms ease";
    slideEl.style.transform = "translateX(0px)";
    slideEl.style.opacity = "1";

    slideEl.addEventListener("transitionend", function inEnd() {
      slideEl.removeEventListener("transitionend", inEnd);
      isAnimating = false;
    }, { once: true });

  }, { once: true });
}


  function next(fromDx = 0) { goTo(current + 1, "next", fromDx); }
  function prev(fromDx = 0) { goTo(current - 1, "prev", fromDx); }

  /* ---------- Pointer swipe with “drag-follow” + tap zones ---------- */

  let startX = 0;
  let startY = 0;
  let dx = 0;
  let dy = 0;
  let pointerDown = false;
  let didDrag = false;

  const DRAG_START_THRESHOLD = 6;     // px before drag mode
  const SWIPE_COMMIT_THRESHOLD = 70;  // px to commit
  const MAX_VERTICAL_DRIFT = 120;     // ignore if mostly vertical

  viewportEl.addEventListener("pointerdown", (e) => {
    if (isAnimating) return;

    pointerDown = true;
    didDrag = false;
    startX = e.clientX;
    startY = e.clientY;
    dx = 0;
    dy = 0;

    slideEl.classList.add("dragging");
    viewportEl.setPointerCapture?.(e.pointerId);
  });

  viewportEl.addEventListener("pointermove", (e) => {
    if (!pointerDown || isAnimating) return;

    dx = e.clientX - startX;
    dy = e.clientY - startY;

    // If clearly vertical, ignore (story-like)
    if (Math.abs(dy) > MAX_VERTICAL_DRIFT && Math.abs(dy) > Math.abs(dx)) return;

    if (Math.abs(dx) >= DRAG_START_THRESHOLD) didDrag = true;

    // Finger-follow
    slideEl.style.transform = `translateX(${dx}px)`;

    // Subtle fade while dragging
    const fade = Math.max(0.35, 1 - Math.min(1, Math.abs(dx) / (window.innerWidth * 0.9)));
    slideEl.style.opacity = String(fade);

    // Prevent browser gesture while horizontal dragging
    if (Math.abs(dx) > Math.abs(dy)) e.preventDefault();
  }, { passive: false });

  viewportEl.addEventListener("pointerup", (e) => {
    if (!pointerDown) return;
    pointerDown = false;
    slideEl.classList.remove("dragging");

    // No drag => tap zones
    if (!didDrag) {
      slideEl.style.transform = "translateX(0px)";
      slideEl.style.opacity = "1";

      const x = e.clientX;
      if (x > window.innerWidth / 2) next(0);
      else prev(0);
      return;
    }

    // Commit swipe if far enough
    if (Math.abs(dx) >= SWIPE_COMMIT_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(dx); // swipe left => next enters from right
      else prev(dx);        // swipe right => prev enters from left
    } else {
      animateSnapBack();
    }

    dx = 0;
    dy = 0;
  });

  viewportEl.addEventListener("pointercancel", () => {
    pointerDown = false;
    didDrag = false;
    slideEl.classList.remove("dragging");
    animateSnapBack();
  });

  /* ---------- Init ---------- */

  createProgressBars();
  renderSlide();
});
