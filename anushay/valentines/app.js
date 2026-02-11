// script.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    { type: "cover" },
    { type: "milestone", title: "First Date", date: "October 11th, 2025", caption: "I knew it was wraps on this day... @Mambo", image:"photos/firstDate.jpg" },
    { type: "milestone", title: "Boyfriend & Girlfriend", date: "November 23rd, 2025", caption: "The day you gave up your rights @Streetsville", image:"photos/bfgf.jpeg" },
    { type: "milestone", title: "'I love you'", date: "December 23rd, 2025", caption: "I said it first hehe @Mishree", image:"photos/1month.jpeg" },
    { type: "milestone", title: "Latest Date", date: "Feb 08, 2026", caption: "Look at us now, so perfect together @Downtown", image:"photos/latest.jpg" },
    { type: "favorites",
        images: [
          "photos/fav1.jpeg",
          "photos/fav2.jpg",
          "photos/fav3.jpg",
          "photos/fav4.jpg",
          "photos/fav5.jpeg",
          "photos/fav6.png"
        ]
     },
    { type: "final" },
    { type: "end" }

  ];

  const SLIDE_DURATION_MS = 20000;

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

  function setProgressForIndex(idx, pct /* 0..1 */) {
    const bars = [...progressEl.children];
    bars.forEach((bar, i) => {
      const fill = bar.firstChild;
      if (i < idx) fill.style.width = "100%";
      else if (i > idx) fill.style.width = "0%";
      else fill.style.width = `${Math.max(0, Math.min(1, pct)) * 100}%`;
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
          <h2>Anushay</h2>

          <div class="swipe-hint">
            Swipe →
          </div>
        </div>
      `;
    } else if (s.type === "milestone") {
      slideEl.innerHTML = `
        <div class="card">
          <div class="photo"> <img src="${s.image}" alt="" /> </div>
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
            ${s.images.map(src => `
              <div class="tile">
                <img src="${src}" alt="" />
              </div>
            `).join("")}
          </div>
        </div>
      `;
    } else if (s.type === "final") {
      slideEl.innerHTML = `
        <div class="card final">
          <h2>Meri Jaan,</h2>
          <div class="message">
            <p>
            Ever since I laid my eyes on you, I knew.
            I knew you were the one for me, with those gorgeous eyes and that heart-melting smile. I knew that with you, I would be happier than I had ever been, and you proved me right.
            <br>
            I hope that these past few months have been as life-changing for you as they have been for me. You’ve taught me that soul mates exist, and that these rose-tinted glasses seem to be glued on. I want to continue to be a source of support, happiness, and love for you forever. You bring me so much happiness every day, and I will always be trying to pay that back so you can feel even a fraction of how much you do for me. 
            <br> 

            I'm so glad that we've made so much progress in our relationship in these 3 months, and I can confidently say I've made true on my promise to learn you everyday, and it brings me so much joy to be the lucky one to get to do so. Time has flown by with you, and there are so many moments where I wish I could pause time just to spend another moment with you.
            <br> 

            Here's to countless more anniversaries, dates, and honestly just forever with you.
            </p>
          </div>
        </div>
      `;
    } else if (s.type === "end") {
      slideEl.innerHTML = `
        <div class="card cover end-slide">
          <h3>I love you, meri jaan</h3>
          <br>
          <p> Ahzam </p>
          <br>
          <p> 14th February 2026 </p>

          <button class="restart-btn">
            Restart?
          </button>
        </div>
      `;
    } else {
      slideEl.innerHTML = `<div class="card">Unknown slide.</div>`;
    }
  }

  /* ---------- Transitions ---------- */

  let isAnimating = false;

  function animateSnapBack() {
    slideEl.style.transition = "transform 180ms ease, opacity 180ms ease";
    slideEl.style.transform = "translateX(0px)";
    slideEl.style.opacity = "1";
  }

  function stopAuto() {
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
    startedAt = 0;
    elapsedBeforePause = 0;
    isPaused = false;
  }
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".restart-btn");
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    // Hard reset
     window.location.reload();
  });

  function goTo(targetIndex, direction, fromDx = 0) {
    if (isAnimating) return;

    const clamped = Math.max(0, Math.min(targetIndex, slides.length - 1));
    if (clamped === current) {
      animateSnapBack();
      return;
    }

    isAnimating = true;
    stopAuto();

    const width = window.innerWidth;
    const outX = direction === "next" ? -width : width;
    const inStartX = direction === "next" ? width : -width;

    slideEl.style.transition = "none";
    slideEl.style.transform = `translateX(${fromDx}px)`;
    void slideEl.offsetHeight;

    slideEl.style.transition = "transform 220ms ease, opacity 220ms ease";
    slideEl.style.transform = `translateX(${outX}px)`;
    slideEl.style.opacity = "0";

    slideEl.addEventListener("transitionend", function outEnd() {
      slideEl.removeEventListener("transitionend", outEnd);

      current = clamped;
      renderSlide();

      slideEl.style.transition = "none";
      slideEl.style.transform = `translateX(${inStartX}px)`;
      slideEl.style.opacity = "0";
      void slideEl.offsetHeight;

      slideEl.style.transition = "transform 220ms ease, opacity 220ms ease";
      slideEl.style.transform = "translateX(0px)";
      slideEl.style.opacity = "1";

      slideEl.addEventListener("transitionend", function inEnd() {
        slideEl.removeEventListener("transitionend", inEnd);
        isAnimating = false;
        startAuto();
      }, { once: true });
    }, { once: true });
  }

  function next(fromDx = 0) { goTo(current + 1, "next", fromDx); }
  function prev(fromDx = 0) { goTo(current - 1, "prev", fromDx); }

  /* ---------- Auto progress + auto-advance ---------- */

  let rafId = null;
  let startedAt = 0;
  let elapsedBeforePause = 0;
  let isPaused = false;

  function shouldAutoAdvance() {
    return true;
  }

  function pauseAuto() {
    if (!shouldAutoAdvance()) return;
    if (isPaused) return;
    isPaused = true;
    if (startedAt) {
      elapsedBeforePause += performance.now() - startedAt;
      startedAt = 0;
    }
  }

  function resumeAuto() {
    if (!shouldAutoAdvance()) return;
    if (!isPaused) return;
    isPaused = false;
    startedAt = performance.now();
    tick();
  }

  function startAuto() {
    if (!shouldAutoAdvance()) {
      setProgressForIndex(current, 1);
      return;
    }

    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
    elapsedBeforePause = 0;
    isPaused = false;
    startedAt = performance.now();

    setProgressForIndex(current, 0);
    tick();
  }

  function tick() {
    if (!shouldAutoAdvance()) {
      setProgressForIndex(current, 1);
      return;
    }
    if (isAnimating || isPaused) return;

    const now = performance.now();
    const elapsed = elapsedBeforePause + (startedAt ? (now - startedAt) : 0);
    const pct = elapsed / SLIDE_DURATION_MS;

    setProgressForIndex(current, pct);

    if (pct >= 1) {
      setProgressForIndex(current, 1);

      // If we're on the last slide, stop here (no auto-advance)
      if (current >= slides.length - 1) return;

      next(0);
      return;
    }

    rafId = requestAnimationFrame(tick);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseAuto();
    else resumeAuto();
  });

  /* ---------- Unified gesture handlers (Pointer + Touch) ---------- */

  let startX = 0, startY = 0, dx = 0, dy = 0;
  let down = false;
  let didDrag = false;

  const DRAG_START_THRESHOLD = 6;
  const SWIPE_COMMIT_THRESHOLD = 70;
  const MAX_VERTICAL_DRIFT = 120;

  function onDown(x, y) {
    if (isAnimating) return;
    down = true;
    didDrag = false;
    startX = x;
    startY = y;
    dx = 0;
    dy = 0;

    slideEl.classList.add("dragging");
    pauseAuto();
  }

  function onMove(x, y, preventDefaultFn) {
    if (!down || isAnimating) return;

    dx = x - startX;
    dy = y - startY;

    if (Math.abs(dy) > MAX_VERTICAL_DRIFT && Math.abs(dy) > Math.abs(dx)) return;

    if (Math.abs(dx) >= DRAG_START_THRESHOLD) didDrag = true;

    slideEl.style.transform = `translateX(${dx}px)`;
    const fade = Math.max(0.35, 1 - Math.min(1, Math.abs(dx) / (window.innerWidth * 0.9)));
    slideEl.style.opacity = String(fade);

    if (Math.abs(dx) > Math.abs(dy) && preventDefaultFn) preventDefaultFn();
  }

  function onUp(x) {
    if (!down) return;
    down = false;
    slideEl.classList.remove("dragging");

    if (!didDrag) {
      slideEl.style.transform = "translateX(0px)";
      slideEl.style.opacity = "1";
      resumeAuto();
      return;
    }

    if (Math.abs(dx) >= SWIPE_COMMIT_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(dx);
      else prev(dx);
    } else {
      animateSnapBack();
      resumeAuto();
    }

    dx = 0;
    dy = 0;
  }

  function onCancel() {
    down = false;
    didDrag = false;
    slideEl.classList.remove("dragging");
    animateSnapBack();
    resumeAuto();
  }

  // Pointer events (desktop + many mobiles)
  viewportEl.addEventListener("pointerdown", (e) => {
    viewportEl.setPointerCapture?.(e.pointerId);
    onDown(e.clientX, e.clientY);
  });

  viewportEl.addEventListener("pointermove", (e) => {
    onMove(e.clientX, e.clientY, () => e.preventDefault());
  }, { passive: false });

  viewportEl.addEventListener("pointerup", (e) => {
    onUp(e.clientX);
  });

  viewportEl.addEventListener("pointercancel", onCancel);

  // Touch fallback (iOS Safari reliable)
  viewportEl.addEventListener("touchstart", (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    const t = e.touches[0];
    onDown(t.clientX, t.clientY);
  }, { passive: false });

  viewportEl.addEventListener("touchmove", (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    const t = e.touches[0];
    onMove(t.clientX, t.clientY, () => e.preventDefault());
  }, { passive: false });

  viewportEl.addEventListener("touchend", (e) => {
    const t = e.changedTouches && e.changedTouches[0];
    if (!t) return;
    onUp(t.clientX);
  }, { passive: false });

  viewportEl.addEventListener("touchcancel", onCancel, { passive: false });

  /* ---------- Init ---------- */

  createProgressBars();
  renderSlide();
  startAuto();
});
