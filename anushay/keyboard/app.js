// app.js
document.addEventListener("DOMContentLoaded", () => {

  /* ================= DATA ================= */

  const SIZES = [
    {
      id: "96-100",
      name: "96% / 100%",
      keys: "96–101 keys",
      blurb: "Keeps the numpad — either as a full-size 100% block, or squeezed into a tighter 1800-compact 96% layout that trims a few centimeters of width.",
      layout: { func: true, nav: "tight", numpad: "tight" },
      keyboards: [
        {
          brand: "NuPhy", model: "Air96", hotswap: true,
          battery: "4000mAh — 25–55 hrs (lights on) / up to 300 hrs (lights off)", price: "~$120–130",
          notes: "Low-profile switches, aluminum frame.",
          url: "https://nuphy.com/collections/keyboards/products/air96-wireless-mechanical-keyboard"
        },
        {
          brand: "Keychron", model: "K4 (V2)", hotswap: true,
          battery: "Rechargeable — multi-day typical use", price: "~$70–90",
          notes: "Standard-profile switches, budget-friendly.",
          url: "https://www.amazon.com/Keychron-Swappable-Mechanical-Bluetooth-PC-Version/dp/B08LSQXKMN"
        },
        {
          brand: "QwertyKeys", model: "QK101", hotswap: true,
          battery: "Tri-mode wireless — see listing for battery specifics", price: "~$247",
          notes: "Barebone kit, wired/BT/2.4GHz tri-mode, built-in customizable screen — ~4 week pre-order lead time.",
          url: "https://www.qwertykeys.com/en-ca/products/qk101-custom-mechanical-keyboard"
        }
      ]
    },
    {
      id: "80",
      name: "Tenkeyless (80% / TKL)",
      keys: "~87 keys",
      blurb: "Drops the numpad but keeps the full arrow/nav block — the classic compromise between compactness and function.",
      layout: { func: true, nav: "gap", numpad: "none" },
      keyboards: [
        {
          brand: "Keychron", model: "K8 Pro", hotswap: true,
          battery: "4000mAh — ~260 hrs (backlight off)", price: "~$79–99",
          notes: "QMK/VIA programmable, hot-swap sockets.",
          url: "https://www.keychron.com/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard"
        },
        {
          brand: "Epomaker", model: "TH87", hotswap: true,
          battery: "10,000mAh — ~45 hrs (brightest RGB) / ~200 hrs (lights off)", price: "~$76",
          notes: "Gasket mount, big battery.",
          url: "https://epomaker.com/products/epomaker-th87"
        }
      ]
    },
    {
      id: "75",
      name: "75%",
      keys: "~82–84 keys",
      blurb: "Like TKL but with the nav cluster pulled in tight against the alphas — dense and desk-space-efficient. The enthusiast default.",
      layout: { func: true, nav: "tight", numpad: "none" },
      keyboards: [
        {
          brand: "Keychron", model: "V1 Max", hotswap: true,
          battery: "4000mAh — up to 190 hrs (backlight off)", price: "~$74–94",
          notes: "Gasket mount, QMK/VIA programmable.",
          url: "https://www.keychron.com/products/keychron-v1-max-qmk-via-wireless-custom-mechanical-keyboard"
        },
        {
          brand: "NuPhy", model: "Air75 V2", hotswap: true,
          battery: "4000mAh — 35–57 hrs (lights on) / ~220 hrs (lights off)", price: "~$95–120",
          notes: "Low-profile switches, aluminum frame.",
          url: "https://nuphy.com/products/air75"
        }
      ]
    },
    {
      id: "65",
      name: "65%",
      keys: "~68 keys",
      blurb: "Loses the function row but keeps dedicated arrow keys — small footprint while staying usable for everyday typing.",
      layout: { func: false, nav: "tight", numpad: "none" },
      keyboards: [
        {
          brand: "Keychron", model: "K6 Pro", hotswap: true,
          battery: "4000mAh — ~260 hrs (backlight off)", price: "~$70–90",
          notes: "QMK/VIA programmable, compact metal frame.",
          url: "https://www.keychron.com/products/keychron-k6-pro-qmk-via-wireless-custom-mechanical-keyboard"
        },
        {
          brand: "Royal Kludge", model: "RK68", hotswap: true,
          battery: "1450mAh — ~13 hrs w/ backlight, up to 140 hrs (lights off)", price: "~$50–55",
          notes: "Stand-alone arrow keys, budget pick.",
          url: "https://www.amazon.com/RK-ROYAL-KLUDGE-Hot-Swappable-Stand-Alone/dp/B08G4ZRMM8"
        },
        {
          brand: "Luminkey", model: "Luminkey65", hotswap: true,
          battery: "Tri-mode wireless — ~2.5 weeks typical use (RGB off)", price: "~$160",
          notes: "Barebone kit, wired/BT/2.4GHz tri-mode, CNC aluminum gasket-mount.",
          url: "https://www.luminkey.com/products/luminkey65-barebone-65-layout-hot-swappable-custom-mechanical-keyboard"
        },
        {
          brand: "QwertyKeys", model: "Neo65 Core Plus", hotswap: true,
          battery: "Tri-mode wireless — see listing for battery specifics", price: "~$105+",
          notes: "Barebone kit, unibody aluminum case, dual gasket/O-ring mount, Tri-mode PCB (BT/2.4GHz/wired) — ~4 week pre-order lead time.",
          url: "https://www.qwertykeys.com/en-ca/products/neo65-core-plus-custom-mechanical-keyboard"
        }
      ]
    },
    {
      id: "60",
      name: "60%",
      keys: "~61 keys",
      blurb: "No function row, no arrows, no nav cluster — smallest and most portable. Best for minimalists who don't mind a Fn layer.",
      layout: { func: false, nav: "none", numpad: "none" },
      keyboards: [
        {
          brand: "NuPhy", model: "Air60 V2", hotswap: true,
          battery: "2500mAh — 30–90 hrs (lights on) / up to 150 hrs (lights off)", price: "~$110–130",
          notes: "Low-profile switches, ultra-portable.",
          url: "https://nuphy.com/products/nuphy-air60-v2"
        },
        {
          brand: "Royal Kludge", model: "RK61", hotswap: true,
          battery: "1450mAh — ~13 hrs w/ backlight, up to 200 hrs (lights off)", price: "~$49–55",
          notes: "Compact and cheap, great first board.",
          url: "https://rkgamingstore.com/collections/rk61"
        },
        {
          brand: "QwertyKeys", model: "Neo60", hotswap: true,
          battery: "Tri-mode wireless — see listing for battery specifics", price: "~$90+",
          notes: "Barebone kit, dual gasket/O-ring mount, aluminum case, Tri-mode PCB (BT/2.4GHz/wired).",
          url: "https://www.qwertykeys.com/en-ca/products/neo60"
        }
      ]
    }
  ];

  const SWITCHES = [
    {
      id: "cherry-red", name: "Cherry MX Red", type: "linear",
      actuation: "45gf actuation / 75gf bottom-out", travel: "2.0mm / 4.0mm total",
      sound: "Light, smooth, faint clack on bottom-out — quiet and minimally textured.",
      video: "6bY1sH9G83Q",
      videoNote: "Comparison video (Standard, Silent & Speed Cherry switches, Red included)"
    },
    {
      id: "gateron-yellow", name: "Gateron Yellow (G Pro)", type: "linear",
      actuation: "~50gf spring / ~50–55gf bottom-out", travel: "2.0mm / 4.0mm total",
      sound: "Deep, slightly hollow thock with a smooth glide — a budget favorite for sound-per-dollar.",
      video: "CNCF1B3V48c"
    },
    {
      id: "cherry-brown", name: "Cherry MX Brown", type: "tactile",
      actuation: "45gf actuation / 55gf bottom-out", travel: "2.0mm / 4.0mm total",
      sound: "Light, almost imperceptible bump — muted, click-less feedback.",
      video: "E2b34XAVLj4"
    },
    {
      id: "boba-u4t", name: "Gazzew Boba U4T", type: "tactile",
      actuation: "58g / 62g / 68g spring options", travel: "~4.0–4.1mm total",
      sound: "Deep, full, thocky downstroke with a higher-pitched pop on the upstroke — a modern reference tactile.",
      video: "FuugCJ-V0Ng"
    },
    {
      id: "cherry-blue", name: "Cherry MX Blue", type: "clicky",
      actuation: "50gf actuation / 60gf bottom-out", travel: "2.2mm / 4.0mm total",
      sound: "Sharp, high-pitched click-clack from an internal click jacket — the classic loud office clicky.",
      video: "aJ7ja5HON6Q"
    },
    {
      id: "kailh-box-white", name: "Kailh BOX White", type: "clicky",
      actuation: "~45gf actuation at 1.8mm", travel: "3.6mm total",
      sound: "Crisp, light, metallic snap — thinner and higher-pitched than MX Blue, less mushy.",
      video: "hlCjITJI02Q"
    },
    {
      id: "gateron-oil-king", name: "Gateron Oil King", type: "linear",
      actuation: "55gf actuation / 80gf bottom-out", travel: "2.0mm / 4.0mm total",
      sound: "Deep, bass-driven thock on bottom-out — thick and muted rather than sharp, courtesy of the black POM stem and ink-black bottom housing. One of the go-to picks when the whole point of the build is 'thock.'",
      video: "rbbHtF6R9FY",
      videoNote: "Ai03 Vega build, POM plate — dedicated Oil King sound test & review (TofuTypes)"
    },
    {
      id: "durock-t1", name: "Durock T1", type: "tactile",
      actuation: "55gf actuation / 67gf bottom-out", travel: "2.0mm / 4.0mm total",
      sound: "A pronounced, rounded tactile bump that resolves into a deep, muted thock on bottom-out — fuller and bassier than a Holy Panda, and widely cited as the benchmark 'thocky tactile.'",
      video: "zfJd4gSigQY",
      videoNote: "Durock T1 (JWK-manufactured) switch review & sound test (KeebWorks)"
    },
    {
      id: "alpaca-v2", name: "Alpaca V2", type: "linear",
      actuation: "42gf actuation / 62gf bottom-out", travel: "1.8mm / 3.9mm total",
      sound: "Light, marbly glide that drops into a deep, muted bottom-out — bassy and rounded, with almost none of the top-end clack lighter linears have. The topout click is actually more audible than the thock itself.",
      video: "kh_FZyNAHpA",
      videoNote: "Alpaca V2 switch review & typing test, GMK + SA keycaps (Barry Boards)"
    }
  ];

  // Shared sculpt silhouette per profile — every set of that profile renders with this shape.
  const PROFILE_SHAPES = {
    Cherry: { heights: [9, 8, 7, 7, 8], top: "cylindrical" },
    OEM: { heights: [11, 10, 8, 8, 9], top: "cylindrical" },
    SA: { heights: [13, 12, 11, 11, 12], top: "spherical" },
    XDA: { heights: [8, 8, 8, 8, 8], top: "flat" },
    MT3: { heights: [12, 11, 10, 10, 11], top: "concave" },
    MOA: { heights: [9, 9, 8, 8, 9], top: "flat" }
  };

  const KEYCAPS = [
    // ---- Cherry profile ----
    {
      id: "cherry-black-white", profile: "Cherry", material: "ABS doubleshot", vibe: "classic",
      example: "GMK Black on White",
      desc: "Low, slightly angled sculpted rows; crisp doubleshot legends that never fade. The industry-standard “premium custom keyboard” profile.",
      colors: ["#1c1c1e", "#ffffff", "#1c1c1e", "#ffffff", "#1c1c1e"],
      url: "https://mechanicalkeyboards.com/products/gmk-black-on-white-cherry-profile-double-shot-abs-keycaps"
    },
    {
      id: "cherry-kitsune", profile: "Cherry", material: "ABS doubleshot", vibe: "pastel",
      example: "GMK CYL Kitsune",
      desc: "Japanese nine-tailed-fox folklore in dusky blue, purple, and peach — mysterious and elegant rather than bold.",
      colors: ["#f2ece0", "#4a5a7a", "#f2ece0", "#8a7ab8", "#e8b48a"],
      url: "https://www.deskhero.ca/products/gmk-kitsune-keycaps"
    },
    {
      id: "cherry-cloud-snow", profile: "Cherry", material: "PBT dye-sub", vibe: "pastel",
      example: "Keychron Cloud and Snow",
      desc: "A soft white-to-blue-grey gradient, five-side dye-sub — airy and quiet, like an overcast sky.",
      colors: ["#f5f5f5", "#b8c4d0", "#f5f5f5", "#8a97a5", "#f5f5f5"],
      url: "https://www.keychron.com/collections/all-keycaps/products/cloud-and-snow-cherry-profile-dye-sub-pbt-full-keycap-set"
    },
    {
      id: "cherry-classic-piano", profile: "Cherry", material: "PBT dye-sub", vibe: "classic",
      example: "Keychron Classic Piano",
      desc: "Black-and-white keys, straightforward as the name — a monochrome classic with none of the fuss.",
      colors: ["#1c1c1e", "#ffffff", "#1c1c1e", "#ffffff", "#1c1c1e"],
      url: "https://www.keychron.com/collections/all-keycaps/products/classic-piano-cherry-profile-dye-sub-pbt-full-keycap-set"
    },
    {
      id: "cherry-weirdo-ghost", profile: "Cherry", material: "PBT dye-sub", vibe: "classic",
      example: "Keychron Weirdo Ghost Gang",
      desc: "Black and white with a spooky-cute novelty theme — playful monochrome with personality.",
      colors: ["#ffffff", "#1c1c1e", "#ffffff", "#1c1c1e", "#ffffff"],
      url: "https://www.keychron.com/collections/all-keycaps/products/weirdo-ghost-gang-cherry-profile-dye-sub-pbt-full-keycap-set"
    },
    {
      id: "cherry-ochi", profile: "Cherry", material: "PBT doubleshot", vibe: "classic",
      example: "Ducky Ochi",
      desc: "Black base with bright light-blue legends and accents — a sharp, high-contrast pop of color.",
      colors: ["#1c1c1e", "#7ec8e3", "#1c1c1e", "#7ec8e3", "#1c1c1e"],
      url: "https://mechanicalkeyboards.com/products/ducky-118-key-pbt-seamless-double-shot-ochi-cherry-profile-keycap-set"
    },
    {
      id: "cherry-tako", profile: "Cherry", material: "ABS doubleshot", vibe: "neutral",
      example: "GMK Tako",
      desc: "An octopus-inspired oceanic theme — cream base with teal and coral accents, playful and a little whimsical.",
      colors: ["#f0ece0", "#4a8a8a", "#f0ece0", "#e8a0a0", "#4a8a8a"],
      url: "https://mechanicalkeyboards.com/products/gmk-tako-cherry-profile-double-shot-abs-keycap-set"
    },
    {
      id: "cherry-kobo", profile: "Cherry", material: "ABS doubleshot (1.5mm)", vibe: "classic",
      example: "Key Kobo Cherries",
      desc: "Shades of ripening cherry red, including semi-translucent keys that capture the color transition of the fruit.",
      colors: ["#f5e6e6", "#c0392b", "#e07a7a", "#8b1a1a", "#f5e6e6"],
      url: "https://mechanicalkeyboards.com/products/key-kobo-cherries-double-shot-abs-keycap-set"
    },
    {
      id: "cherry-tiramisu", profile: "Cherry", material: "ABS doubleshot (1.5mm)", vibe: "neutral",
      example: "GMK Tiramisu",
      desc: "Warm coffee-soaked browns and mascarpone cream — cozy dessert tones, soft rather than sharp.",
      colors: ["#f0e0c8", "#8a5a3a", "#c9a876", "#5a3a28", "#f0e0c8"],
      url: "https://mechanicalkeyboards.com/products/gmk-tiramisu-keycap-set"
    },
    {
      id: "cherry-cupid", profile: "Cherry", material: "PBT doubleshot", vibe: "pastel",
      example: "WS Cupid",
      desc: "A Valentine's-inspired love theme — soft white base with pink and rose-red accents.",
      colors: ["#ffffff", "#ff8fc0", "#ffffff", "#e0508f", "#ffffff"],
      url: "https://www.deskhero.ca/products/ws-cupid-keycaps"
    },
    {
      id: "cherry-blossom", profile: "Cherry", material: "ABS doubleshot", vibe: "pastel",
      example: "GMK CYL Blossom",
      desc: "Delicate shades of pink and purple inspired by Japanese cherry blossoms — over a year in development, genuinely dreamy.",
      colors: ["#f7eef2", "#e8a0c0", "#f7eef2", "#c9a6ff", "#f7eef2"],
      url: "https://www.deskhero.ca/products/gmk-cyl-blossom-keycaps"
    },
    {
      id: "cherry-moomin", profile: "Cherry", material: "ABS doubleshot", vibe: "pastel",
      example: "GMK Moomin",
      desc: "Soft, friendly pastel colorways inspired by the Moomin universe — gentle and storybook-like.",
      colors: ["#f5f0e8", "#a8d4d8", "#f0c8a0", "#8ab8a8", "#f5f0e8"],
      url: "https://www.deskhero.ca/products/gmk-moomin-keycaps-in-stock-extras"
    },

    // ---- SA profile ----
    {
      id: "sa-bliss", profile: "SA", material: "ABS doubleshot", vibe: "pastel",
      example: "SA Bliss",
      desc: "One of the earliest genuinely “cute” custom sets — washed-out pink with dark charcoal legends, soft and quiet rather than saturated.",
      colors: ["#e7b8c2", "#e7b8c2", "#4a4245", "#e7b8c2", "#e7b8c2"],
      url: "https://dailyclack.com/products/sa-bliss"
    },

    // ---- XDA profile ----
    {
      id: "xda-9009", profile: "XDA", material: "PBT dye-sub", vibe: "neutral",
      example: "XDA V2 9009 Beige Grey",
      desc: "The classic beige-and-grey 9009 colorway on the uniform XDA sculpt — a soft neutral rather than “cute.”",
      colors: ["#d9c7a3", "#a8a29a", "#d9c7a3", "#a8a29a", "#d9c7a3"],
      url: "https://kprepublic.com/products/xda-v2-9009-beige-grey-dye-sub-keycap-set-thick-pbt-for-keyboard-gh60-poker-87-tkl-104-ansi-xd64-bm60-xd68-bm65-bm68-japanese"
    },
    {
      id: "xda-retro", profile: "XDA", material: "PBT dye-sub", vibe: "classic",
      example: "Keychron XDA Retro",
      desc: "Retro Apple Extended Keyboard-inspired putty/beige tones with italic legends — vintage Mac nostalgia, not pastel.",
      colors: ["#d9c9ae", "#b8a888", "#d9c9ae", "#b8a888", "#d9c9ae"],
      url: "https://www.keychron.com/products/keychron-xda-profile-pbt-retro-keycap-set"
    },
    {
      id: "xda-sakura", profile: "XDA", material: "PBT dye-sub", vibe: "pastel",
      example: "Sakura Purple & Pink XDA",
      desc: "The genuinely cute pastel XDA pick — white/cream base with a purple-to-pink sakura-blossom gradient. A small-shop set, flagged as boutique rather than a major-designer group buy.",
      colors: ["#f7eef2", "#c9a6ff", "#f7eef2", "#ff9dc4", "#f7eef2"],
      url: "https://www.thockking.com/products/purple-and-pink-sakura-pbt-xda-keycap-set"
    },

    // ---- MT3 profile ----
    {
      id: "mt3-black-white", profile: "MT3", material: "PBT dye-sub (Hi-Profile)", vibe: "classic",
      example: "Drop MT3 Black on White",
      desc: "Tall and deeply sculpted like SA but with a more rounded, concave dish per row — a distinctive terminal-inspired look, noticeably heavier feeling.",
      colors: ["#151515", "#f5f5f5", "#151515", "#f5f5f5", "#151515"],
      url: "https://us.amazon.com/DROP-Hi-Profile-Doubleshot-Tenkeyless-Winkeyless/dp/B08P55VPGD"
    },

    // ---- MOA profile ----
    {
      id: "moa-pink", profile: "MOA", material: "PBT dye-sub", vibe: "pastel",
      example: "Womier MOA Pink",
      desc: "Uniform, wide, flat-topped rows — MOA's signature low-profile shape from Vortex, here in an all-over cheerful pink dye-sub.",
      colors: ["#ffd9e8", "#ff8fc0", "#ffd9e8", "#e0508f", "#ffd9e8"],
      url: "https://www.amazon.ca/Keycaps-Dye-Sublimation-Keyboard-Mechanical-Keyboard-Pink/dp/B0CLV6XTT9"
    }
  ];

  // Rough, for-fun estimates only — not real quotes.
  const SWITCH_SET_PRICE = {
    "cherry-red": "~$25–35 / set", "gateron-yellow": "~$20–30 / set",
    "cherry-brown": "~$25–35 / set", "boba-u4t": "~$50–65 / set",
    "cherry-blue": "~$25–35 / set", "kailh-box-white": "~$25–35 / set",
    "gateron-oil-king": "~$30–40 / set", "durock-t1": "~$40–50 / set", "alpaca-v2": "~$35–45 / set"
  };
  const KEYCAP_SET_PRICE = {
    "cherry-black-white": "~$120–150", "cherry-kitsune": "~$220–230",
    "cherry-cloud-snow": "~$35–45", "cherry-classic-piano": "~$35–45", "cherry-weirdo-ghost": "~$35–45",
    "cherry-ochi": "~$32–49", "cherry-tako": "~$140–160", "cherry-kobo": "~$90–110",
    "cherry-tiramisu": "~$120–140", "cherry-cupid": "~$140–150", "cherry-blossom": "~$220–240", "cherry-moomin": "~$270–290",
    "sa-bliss": "~$90–130",
    "xda-9009": "~$30–40", "xda-retro": "~$35–45", "xda-sakura": "~$40–55",
    "mt3-black-white": "~$100–120",
    "moa-pink": "~$30–40"
  };

  /* ================= STATE ================= */

  const STEPS = ["size", "switches", "keycaps", "summary"];
  let stepIndex = 0;

  const state = {
    sizeId: null,
    keyboardIndex: null,
    switchId: null,
    keycapId: null,
    keycapFilter: "all"
  };

  const mainEl = document.getElementById("main");
  const stepperEl = document.getElementById("stepper");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  /* ================= SVG HELPERS ================= */

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  }

  function keyboardSVG(layout) {
    const mainW = 190, blockH = 54, funcH = 8, gapTight = 3, gapWide = 12;
    const navW = 40, numW = 50;

    let x = mainW;
    let navX = null, numX = null;
    if (layout.nav !== "none") {
      x += (layout.nav === "tight" ? gapTight : gapWide);
      navX = x;
      x += navW;
    }
    if (layout.numpad !== "none") {
      x += (layout.numpad === "tight" ? gapTight : gapWide);
      numX = x;
      x += numW;
    }
    const totalW = x;
    const topY = layout.func ? funcH + 4 : 0;
    const totalH = topY + blockH + 2;

    let svg = `<svg viewBox="0 0 ${totalW} ${totalH}" preserveAspectRatio="xMidYMid meet">`;
    if (layout.func) {
      svg += `<rect class="kb-rect" x="0" y="0" width="${totalW}" height="${funcH}" rx="2"/>`;
    }
    svg += `<rect class="kb-rect" x="0" y="${topY}" width="${mainW}" height="${blockH}" rx="3"/>`;
    if (navX !== null) {
      svg += `<rect class="kb-rect" x="${navX}" y="${topY}" width="${navW}" height="${blockH}" rx="3"/>`;
    }
    if (numX !== null) {
      svg += `<rect class="kb-rect" x="${numX}" y="${topY}" width="${numW}" height="${blockH}" rx="3"/>`;
    }
    svg += `</svg>`;
    return svg;
  }

  function keycapSVG(shape, colors) {
    const { heights, top: topStyle } = shape;
    const capW = 30, gap = 6, baseY = 42, maxH = 14, scale = 1.15;
    let svg = `<svg viewBox="0 0 ${(capW + gap) * 5} 46" preserveAspectRatio="xMidYMid meet">`;
    heights.forEach((h, i) => {
      const x = i * (capW + gap);
      const height = Math.min(maxH * scale, h * scale) + 8;
      const y = baseY - height;
      const fill = colors[i % colors.length];
      svg += `<rect class="kc-side" x="${x}" y="${y}" width="${capW}" height="${height}" rx="3" style="fill:${fill}"/>`;
      const midX = x + capW / 2;
      let dip = 0;
      if (topStyle === "cylindrical") dip = 2;
      else if (topStyle === "spherical") dip = 4.5;
      else if (topStyle === "concave") dip = 3.5;
      // Draw a soft light halo under the arc first so it stays visible on both light and dark swatch colors.
      if (dip > 0) {
        const d = `M ${x + 3},${y + 3} Q ${midX},${y + 3 - dip} ${x + capW - 3},${y + 3}`;
        svg += `<path d="${d}" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2.4" stroke-linecap="round"/>`;
        svg += `<path class="kc-arc" d="${d}"/>`;
      } else {
        svg += `<line x1="${x + 3}" y1="${y + 2}" x2="${x + capW - 3}" y2="${y + 2}" stroke="rgba(255,255,255,.55)" stroke-width="2.4" stroke-linecap="round"/>`;
        svg += `<line class="kc-arc" x1="${x + 3}" y1="${y + 2}" x2="${x + capW - 3}" y2="${y + 2}"/>`;
      }
    });
    svg += `</svg>`;
    return svg;
  }

  /* ================= RENDER: SIZE STEP ================= */

  function renderSize() {
    const sel = state.sizeId ? SIZES.find(s => s.id === state.sizeId) : null;

    let html = `
      <div class="step">
        <div class="step-head">
          <h2>Choose a size</h2>
          <p>Bigger boards keep more dedicated keys; smaller boards save desk space and travel better.</p>
          <span class="bt-banner">All keyboards below support Bluetooth</span>
        </div>
        <div class="size-grid">
          ${SIZES.map(s => `
            <button type="button" class="size-card ${s.id === state.sizeId ? "selected" : ""}" data-size="${s.id}">
              ${keyboardSVG(s.layout)}
              <h3>${escapeHtml(s.name)}</h3>
              <div class="keycount">${escapeHtml(s.keys)}</div>
              <p>${escapeHtml(s.blurb)}</p>
            </button>
          `).join("")}
        </div>
    `;

    if (sel) {
      html += `
        <div class="model-panel">
          <h3>Real bluetooth boards in this size</h3>
          <div class="model-grid">
            ${sel.keyboards.map((kb, i) => `
              <div class="model-card ${i === state.keyboardIndex ? "selected" : ""}" data-model="${i}">
                <div class="row1">
                  <div>
                    <div class="brand">${escapeHtml(kb.brand)}</div>
                    <div class="model">${escapeHtml(kb.model)}</div>
                  </div>
                  <div class="price">${escapeHtml(kb.price)}</div>
                </div>
                <div class="spec-tags">
                  <span class="tag bt">Bluetooth</span>
                  ${kb.hotswap ? `<span class="tag">Hot-swap</span>` : ""}
                  <span class="tag">${escapeHtml(kb.battery)}</span>
                </div>
                <div class="notes">${escapeHtml(kb.notes)}</div>
                <a href="${kb.url}" target="_blank" rel="noopener">View product ↗</a>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    html += `</div>`;
    mainEl.innerHTML = html;

    mainEl.querySelectorAll(".size-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.size;
        if (state.sizeId !== id) {
          state.sizeId = id;
          state.keyboardIndex = null;
        }
        renderSize();
        updateNav();
      });
    });

    mainEl.querySelectorAll(".model-card").forEach(card => {
      card.addEventListener("click", () => {
        state.keyboardIndex = Number(card.dataset.model);
        renderSize();
        updateNav();
      });
    });
  }

  /* ================= RENDER: SWITCHES STEP ================= */

  function renderSwitches() {
    mainEl.innerHTML = `
      <div class="step">
        <div class="step-head">
          <h2>Choose your switches</h2>
          <p>Linear switches are smooth and silent-ish, tactile switches give you a bump so you can feel the actuation point, and clicky switches add an audible click on top of that bump.</p>
        </div>
        <div class="switch-grid">
          ${SWITCHES.map(sw => `
            <div class="switch-card ${sw.id === state.switchId ? "selected" : ""}" data-switch="${sw.id}">
              <div class="row1">
                <div class="name">${escapeHtml(sw.name)}</div>
                <span class="type-badge ${sw.type}">${sw.type}</span>
              </div>
              <div class="switch-specs">
                <span>${escapeHtml(sw.actuation)}</span>
                <span>${escapeHtml(sw.travel)}</span>
              </div>
              <div class="switch-sound">${escapeHtml(sw.sound)}</div>
              <button type="button" class="video-toggle" data-video="${sw.id}">▶ Hear it typed</button>
              <div class="video-wrap" id="video-${sw.id}">
                <iframe loading="lazy" data-src="https://www.youtube.com/embed/${sw.video}" title="${escapeHtml(sw.name)} typing sound test" allow="encrypted-media" allowfullscreen></iframe>
                ${sw.videoNote ? `<div class="video-note">${escapeHtml(sw.videoNote)}</div>` : ""}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    mainEl.querySelectorAll(".switch-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".video-toggle")) return;
        state.switchId = card.dataset.switch;
        renderSwitches();
        updateNav();
      });
    });

    mainEl.querySelectorAll(".video-toggle").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const wrap = document.getElementById(`video-${btn.dataset.video}`);
        const iframe = wrap.querySelector("iframe");
        const isOpen = wrap.classList.toggle("open");
        if (isOpen && !iframe.getAttribute("src")) iframe.src = iframe.dataset.src;
        btn.textContent = isOpen ? "▲ Hide video" : "▶ Hear it typed";
      });
    });
  }

  /* ================= RENDER: KEYCAPS STEP ================= */

  const KEYCAP_PROFILES = ["Cherry", "OEM", "SA", "XDA", "MT3", "MOA"];
  const VIBE_LABEL = { pastel: "🌸 pastel pick", classic: "classic", neutral: "neutral" };

  function renderKeycaps() {
    const filter = state.keycapFilter || "all";
    const visible = filter === "all" ? KEYCAPS : KEYCAPS.filter(kc => kc.profile === filter);

    mainEl.innerHTML = `
      <div class="step">
        <div class="step-head">
          <h2>Choose your keycaps</h2>
          <p>Profile changes the shape and height of every key — from flat and uniform to tall and sculpted. ${KEYCAPS.length} real sets to browse.</p>
        </div>
        <div class="keycap-filters">
          <button type="button" class="filter-pill ${filter === "all" ? "active" : ""}" data-filter="all">All (${KEYCAPS.length})</button>
          ${KEYCAP_PROFILES.filter(p => KEYCAPS.some(kc => kc.profile === p)).map(p => `
            <button type="button" class="filter-pill ${filter === p ? "active" : ""}" data-filter="${p}">${p} (${KEYCAPS.filter(kc => kc.profile === p).length})</button>
          `).join("")}
        </div>
        <div class="keycap-grid">
          ${visible.map(kc => `
            <div class="keycap-card ${kc.id === state.keycapId ? "selected" : ""}" data-keycap="${kc.id}">
              ${keycapSVG(PROFILE_SHAPES[kc.profile], kc.colors)}
              <div class="row1">
                <div class="profile">${escapeHtml(kc.profile)}</div>
                <div class="material">${escapeHtml(kc.material)}</div>
              </div>
              <div class="example">${escapeHtml(kc.example)}</div>
              <div class="desc">${escapeHtml(kc.desc)}</div>
              <div class="row1">
                <span class="tag ${kc.vibe === "pastel" ? "pastel" : ""}">${VIBE_LABEL[kc.vibe]}</span>
                <a href="${kc.url}" target="_blank" rel="noopener">See set ↗</a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    mainEl.querySelectorAll(".filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        state.keycapFilter = btn.dataset.filter;
        renderKeycaps();
      });
    });

    mainEl.querySelectorAll(".keycap-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        state.keycapId = card.dataset.keycap;
        renderKeycaps();
        updateNav();
      });
    });
  }

  /* ================= RENDER: SUMMARY STEP ================= */

  function renderSummary() {
    const size = SIZES.find(s => s.id === state.sizeId);
    const kb = size && state.keyboardIndex !== null ? size.keyboards[state.keyboardIndex] : null;
    const sw = SWITCHES.find(s => s.id === state.switchId);
    const kc = KEYCAPS.find(k => k.id === state.keycapId);

    mainEl.innerHTML = `
      <div class="step">
        <div class="step-head">
          <h2>Your build</h2>
        </div>
        <div class="summary-card">
          <div class="summary-headline">${kb ? `${escapeHtml(kb.brand)} ${escapeHtml(kb.model)}` : escapeHtml(size.name)} — built piece by piece 🎹</div>
          <div class="summary-rows">
            <div class="summary-row">
              <div>
                <div class="k">Size &amp; board</div>
                <div class="v">${escapeHtml(size.name)}${kb ? ` — ${escapeHtml(kb.brand)} ${escapeHtml(kb.model)}` : ""}</div>
                <div class="sub">${kb ? escapeHtml(kb.notes) : ""}</div>
              </div>
              <div class="est">${kb ? escapeHtml(kb.price) : ""}</div>
            </div>
            <div class="summary-row">
              <div>
                <div class="k">Switches</div>
                <div class="v">${escapeHtml(sw.name)} <span class="type-badge ${sw.type}">${sw.type}</span></div>
                <div class="sub">${escapeHtml(sw.sound)}</div>
              </div>
              <div class="est">${escapeHtml(SWITCH_SET_PRICE[sw.id])}</div>
            </div>
            <div class="summary-row">
              <div>
                <div class="k">Keycaps</div>
                <div class="v">${escapeHtml(kc.profile)} — ${escapeHtml(kc.example)}</div>
                <div class="sub">${escapeHtml(kc.material)}</div>
              </div>
              <div class="est">${escapeHtml(KEYCAP_SET_PRICE[kc.id])}</div>
            </div>
          </div>
          <div class="summary-total">
            <span class="k">Rough total estimate</span>
            <span class="v">${estimateTotal(kb, sw, kc)}</span>
          </div>
          <div class="summary-note">Prices are ballpark street prices, not live quotes — always check the linked product pages before buying. Every board shown supports Bluetooth, as promised.</div>
          <div class="summary-actions">
            <button type="button" class="copy-btn ghost-btn" id="copyBtn">Copy build</button>
            <button type="button" class="restart-btn" id="restartBtn">Start over</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("copyBtn").addEventListener("click", async () => {
      const btn = document.getElementById("copyBtn");
      const text = buildCopyText(size, kb, sw, kc);
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        const helper = document.createElement("textarea");
        helper.value = text;
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        document.execCommand("copy");
        document.body.removeChild(helper);
      }
      btn.textContent = "Copied!";
      setTimeout(() => { btn.textContent = "Copy build"; }, 1800);
    });

    document.getElementById("restartBtn").addEventListener("click", () => {
      state.sizeId = null;
      state.keyboardIndex = null;
      state.switchId = null;
      state.keycapId = null;
      state.keycapFilter = "all";
      stepIndex = 0;
      render();
    });
  }

  function buildCopyText(size, kb, sw, kc) {
    return [
      "My Keyboard Build",
      "",
      "SIZE & BOARD",
      `${kb.brand} ${kb.model} (${size.name})`,
      kb.url,
      kb.price,
      "",
      "SWITCHES",
      `${sw.name} (${sw.type})`,
      SWITCH_SET_PRICE[sw.id],
      "",
      "KEYCAPS",
      `${kc.profile} — ${kc.example}`,
      kc.url,
      KEYCAP_SET_PRICE[kc.id],
      "",
      `TOTAL: ${estimateTotal(kb, sw, kc)}`
    ].join("\n");
  }

  function priceLowHigh(str) {
    const nums = (str.match(/\d[\d,]*/g) || []).map(n => Number(n.replace(/,/g, "")));
    if (nums.length === 0) return [0, 0];
    if (nums.length === 1) return [nums[0], nums[0]];
    return [nums[0], nums[nums.length - 1]];
  }

  function estimateTotal(kb, sw, kc) {
    const a = priceLowHigh(kb.price);
    const b = priceLowHigh(SWITCH_SET_PRICE[sw.id]);
    const c = priceLowHigh(KEYCAP_SET_PRICE[kc.id]);
    const low = a[0] + b[0] + c[0];
    const high = a[1] + b[1] + c[1];
    return `~$${low}–${high}`;
  }

  /* ================= STEP MACHINE ================= */

  function isStepComplete(step) {
    if (step === "size") return !!(state.sizeId && state.keyboardIndex !== null);
    if (step === "switches") return !!state.switchId;
    if (step === "keycaps") return !!state.keycapId;
    return true;
  }

  function render() {
    const step = STEPS[stepIndex];
    if (step === "size") renderSize();
    else if (step === "switches") renderSwitches();
    else if (step === "keycaps") renderKeycaps();
    else if (step === "summary") renderSummary();
    updateStepper();
    updateNav();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function updateStepper() {
    const items = stepperEl.querySelectorAll("li");
    items.forEach((li, i) => {
      li.classList.toggle("active", i === stepIndex);
      li.classList.toggle("done", i < stepIndex);
    });
  }

  function updateNav() {
    backBtn.disabled = stepIndex === 0;
    const step = STEPS[stepIndex];
    if (step === "summary") {
      nextBtn.style.visibility = "hidden";
    } else {
      nextBtn.style.visibility = "visible";
      nextBtn.disabled = !isStepComplete(step);
      nextBtn.textContent = stepIndex === STEPS.length - 2 ? "See build" : "Next";
    }
  }

  backBtn.addEventListener("click", () => {
    if (stepIndex > 0) { stepIndex--; render(); }
  });

  nextBtn.addEventListener("click", () => {
    if (stepIndex < STEPS.length - 1 && isStepComplete(STEPS[stepIndex])) {
      stepIndex++;
      render();
    }
  });

  stepperEl.querySelectorAll("li").forEach((li, i) => {
    li.addEventListener("click", () => {
      if (i < stepIndex) { stepIndex = i; render(); }
    });
  });

  render();
});
