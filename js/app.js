/* ============================================================
   Rendu du menu + bascule de langue FR / EN
   + photos automatiques par article
   ------------------------------------------------------------
   Chaque article cherche automatiquement sa photo dans
   images/plats/<nom-simplifié>.jpg (puis .jpeg, .png, .webp).
   La liste exacte des noms de fichiers attendus est dans
   images/LISEZ-MOI.txt. Tant que la photo n'existe pas, une
   fleur décorative est affichée à la place.
   ============================================================ */

(function () {
  const nav = document.getElementById("categoryNav");
  const main = document.getElementById("menu");
  const toggle = document.getElementById("langToggle");
  const hero = document.querySelector(".hero");

  let lang = localStorage.getItem("mp-lang") || "fr";

  const PHOTO_EXTS = ["webp", "jpg", "jpeg", "png"];

  // "L'aubergine fumée" -> "l-aubergine-fumee"
  function slugify(s) {
    return s
      .toLowerCase()
      .replace(/œ/g, "oe")
      .replace(/æ/g, "ae")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // Essaie l'extension suivante ; sinon retire l'image (la fleur reste)
  window.__mpImgFallback = function (img) {
    if (img.dataset.fixed === "1") { img.remove(); return; }
    const next = Number(img.dataset.ext) + 1;
    if (next < PHOTO_EXTS.length) {
      img.dataset.ext = String(next);
      img.src = "images/plats/" + img.dataset.slug + "." + PHOTO_EXTS[next];
    } else {
      img.remove();
    }
  };

  const WAVE_INTO_OLIVE =
    '<svg class="wave band-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">' +
    '<path d="M0,46 C240,78 480,16 720,40 C960,64 1200,26 1440,52 L1440,80 L0,80 Z"/></svg>';

  const WAVE_OUT_OF_OLIVE =
    '<svg class="wave band-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">' +
    '<path d="M0,34 C240,66 480,4 720,28 C960,52 1200,14 1440,40 L1440,0 L0,0 Z"/></svg>';

  const FLORA_TR =
    '<svg class="flora band-flora flora-tr" viewBox="0 0 220 220" aria-hidden="true"><use href="#corner-flora"/></svg>';
  const FLORA_BL =
    '<svg class="flora band-flora flora-bl" viewBox="0 0 220 220" aria-hidden="true"><use href="#corner-flora"/></svg>';

  function titleHTML(cat) {
    const accent = cat.accent
      ? ' <span class="script-accent">' + cat.accent[lang] + "</span>"
      : "";
    return cat.name[lang] + accent;
  }

  function navLabel(cat) {
    return cat.accent ? cat.name[lang] + " " + cat.accent[lang] : cat.name[lang];
  }

  function photoHTML(item, cls) {
    // Plusieurs photos -> diaporama automatique
    if (item.photos && item.photos.length > 1) {
      const slides = item.photos
        .map(function (p, i) {
          return (
            '<img src="' + p + '" alt="' + item.name[lang] + '"' +
            (i === 0 ? "" : ' loading="lazy"') +
            ' data-fixed="1" onerror="window.__mpImgFallback(this)" />'
          );
        })
        .join("");
      const dots = item.photos
        .map(function (_, i) { return '<span' + (i === 0 ? ' class="on"' : "") + "></span>"; })
        .join("");
      return (
        '<div class="' + cls + ' carousel" data-carousel>' +
        '<div class="carousel-track">' + slides + "</div>" +
        '<div class="carousel-dots">' + dots + "</div>" +
        "</div>"
      );
    }
    let img;
    if (item.photo) {
      // chemin fixé à la main dans menu-data.js
      img =
        '<img src="' + item.photo + '" alt="' + item.name[lang] +
        '" loading="lazy" data-fixed="1" onerror="window.__mpImgFallback(this)" />';
    } else {
      const slug = slugify(item.name.fr);
      img =
        '<img src="images/plats/' + slug + '.webp" alt="' + item.name[lang] +
        '" loading="lazy" data-slug="' + slug +
        '" data-ext="0" onerror="window.__mpImgFallback(this)" />';
    }
    return (
      '<div class="' + cls + '">' +
      '<svg viewBox="0 0 200 200" aria-hidden="true"><use href="#bloom"/></svg>' +
      img +
      "</div>"
    );
  }

  // Grande carte : photo en haut, nom + prix + description dessous
  function dishCardHTML(item) {
    const desc = item.desc[lang]
      ? '<p class="dish-desc">' + item.desc[lang] + "</p>"
      : "";
    return (
      '<div class="dish-card">' +
      photoHTML(item, "dish-photo") +
      '<div class="dish-body">' +
      '<div class="dish-top">' +
      '<p class="dish-name">' + item.name[lang] + "</p>" +
      '<p class="dish-price">' + item.price + "</p>" +
      "</div>" +
      desc +
      "</div>" +
      "</div>"
    );
  }

  // Petite carte produit : photo carrée, bandeau olive foncé
  function drinkCardHTML(item) {
    const desc = item.desc[lang]
      ? '<p class="drink-desc">' + item.desc[lang] + "</p>"
      : "";
    return (
      '<div class="drink-card">' +
      photoHTML(item, "drink-photo") +
      '<div class="drink-body">' +
      '<p class="drink-name">' + item.name[lang] + "</p>" +
      '<p class="drink-price">' + item.price + "</p>" +
      "</div>" +
      desc +
      "</div>"
    );
  }

  // Liste simple sans photos (catégorie avec simple: true)
  function simpleListHTML(cat) {
    const rows = cat.items
      .map(function (item) {
        const desc = item.desc[lang]
          ? '<p class="list-desc">' + item.desc[lang] + "</p>"
          : "";
        return (
          '<li class="list-row">' +
          '<div class="list-top">' +
          '<span class="list-name">' + item.name[lang] + "</span>" +
          '<span class="list-dots" aria-hidden="true"></span>' +
          '<span class="list-price">' + item.price + "</span>" +
          "</div>" +
          desc +
          "</li>"
        );
      })
      .join("");
    return '<ul class="drink-list">' + rows + "</ul>";
  }

  // Carte de la galerie pâtisserie : photo verticale + nom en bas
  function galleryCardHTML(item) {
    const label = (item.name && item.name[lang]) || "";
    const caption = label || item.price
      ? '<figcaption>' + label +
        (item.price ? (label ? " — " : "") + item.price : "") + "</figcaption>"
      : "";
    const img = item.photo
      ? '<img src="' + item.photo + '" alt="' + (label || "Pâtisserie") +
        '" loading="lazy" data-fixed="1" onerror="window.__mpImgFallback(this)" />'
      : "";
    return (
      '<figure class="gallery-card">' +
      '<svg viewBox="0 0 200 200" aria-hidden="true"><use href="#bloom"/></svg>' +
      img + (item.photo ? caption : "") +
      "</figure>"
    );
  }

  function galleryHTML(cat) {
    const cards = cat.items.length
      ? cat.items.map(galleryCardHTML).join("")
      : // emplacements décoratifs en attendant les photos
        '<figure class="gallery-card"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#bloom"/></svg></figure>'.repeat(3);
    return '<div class="gallery-scroll">' + cards + "</div>";
  }

  function categoryHTML(cat, isDrinks) {
    const cards = cat.layout === "gallery"
      ? galleryHTML(cat)
      : cat.simple
      ? simpleListHTML(cat)
      : isDrinks
      ? '<div class="drink-cards">' + cat.items.map(drinkCardHTML).join("") + "</div>"
      : '<div class="dish-cards">' + cat.items.map(dishCardHTML).join("") + "</div>";
    const note = cat.note
      ? '<p class="category-note">' + cat.note[lang] + "</p>"
      : "";
    return (
      '<section class="category" id="' + cat.id + '">' +
      '<h2 class="category-title">' + titleHTML(cat) + "</h2>" +
      note +
      cards +
      "</section>"
    );
  }

  // Bandeau d'avis clients : deux rangées défilant en continu
  function reviewsHTML() {
    if (typeof REVIEWS === "undefined" || !REVIEWS.items.length) return "";
    const card = function (it) {
      return (
        '<div class="review-card">' +
        '<p class="review-stars">★ ' + String(it.stars).replace(".", ",") + "</p>" +
        '<p class="review-text">« ' + it.text[lang] + " »</p>" +
        '<p class="review-name">' + it.name + "</p>" +
        (it.tag ? '<p class="review-tag">' + it.tag[lang] + "</p>" : "") +
        "</div>"
      );
    };
    const row1 = REVIEWS.items.map(card).join("");
    const row2 = REVIEWS.items.slice().reverse().map(card).join("");
    return (
      '<section class="reviews band band-cream" id="avis">' +
      '<div class="band-inner reviews-head">' +
      '<h2 class="category-title">' + REVIEWS.title[lang] + "</h2>" +
      (REVIEWS.note ? '<p class="category-note">' + REVIEWS.note[lang] + "</p>" : "") +
      "</div>" +
      '<div class="marquee"><div class="marquee-track">' + row1 + row1 + "</div></div>" +
      '<div class="marquee"><div class="marquee-track reverse">' + row2 + row2 + "</div></div>" +
      "</section>"
    );
  }

  function render() {
    document.documentElement.lang = lang;
    // les deux langues sont affichées, la langue active est en évidence
    toggle.innerHTML =
      '<span class="' + (lang === "fr" ? "on" : "") + '">FR</span>' +
      '<span class="lang-sep">·</span>' +
      '<span class="' + (lang === "en" ? "on" : "") + '">EN</span>';

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (UI_TEXT[key]) el.textContent = UI_TEXT[key][lang];
    });

    // Navigation
    nav.innerHTML = MENU.map(function (cat) {
      return '<a href="#' + cat.id + '">' + navLabel(cat) + "</a>";
    }).join("");

    // Regrouper les catégories consécutives de même bande / même type
    const blocks = [];
    MENU.forEach(function (cat) {
      const last = blocks[blocks.length - 1];
      if (last && last.band === cat.band && last.type === cat.layout) {
        last.cats.push(cat);
      } else {
        blocks.push({ band: cat.band, type: cat.layout, cats: [cat] });
      }
    });

    let html = "";
    let prevBand = "cream";
    blocks.forEach(function (block) {
      if (block.band !== prevBand) {
        html += block.band === "olive" ? WAVE_INTO_OLIVE : WAVE_OUT_OF_OLIVE;
        prevBand = block.band;
      }
      const isDrinks = block.type === "drinks";
      html +=
        '<div class="band band-' + block.band + '"><div class="band-inner">' +
        FLORA_TR + FLORA_BL +
        block.cats.map(function (c) { return categoryHTML(c, isDrinks); }).join("") +
        "</div></div>";
    });
    if (prevBand === "olive") html += WAVE_OUT_OF_OLIVE;

    html += reviewsHTML();

    main.innerHTML = html;
    highlightNav();
    initCarousels();
    initReveal();
  }

  // Apparition douce des cartes au défilement
  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.__mpIO) window.__mpIO.disconnect();

    const io = new IntersectionObserver(
      function (entries) {
        // les cartes qui entrent ensemble apparaissent en cascade
        const arrived = entries.filter(function (e) { return e.isIntersecting; });
        arrived.forEach(function (e, i) {
          const el = e.target;
          el.style.setProperty("--d", i * 90 + "ms");
          el.classList.add("is-in");
          io.unobserve(el);
          // une fois révélé, on retire tout pour ne pas retarder
          // les effets de survol
          el.addEventListener("transitionend", function done(ev) {
            if (ev.propertyName !== "opacity") return;
            el.classList.remove("reveal", "is-in");
            el.style.removeProperty("--d");
            el.removeEventListener("transitionend", done);
          });
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
    );

    main
      .querySelectorAll(".dish-card, .drink-card, .drink-list, .gallery-card, .category-title, .reviews-head")
      .forEach(function (el) {
        el.classList.add("reveal");
        io.observe(el);
      });

    window.__mpIO = io;
  }

  // Diaporamas : défilement automatique + balayage manuel possible
  function initCarousels() {
    (window.__mpCarousels || []).forEach(clearInterval);
    window.__mpCarousels = [];

    document.querySelectorAll("[data-carousel]").forEach(function (box) {
      const track = box.querySelector(".carousel-track");
      const dots = Array.prototype.slice.call(box.querySelectorAll(".carousel-dots span"));
      const count = track.children.length;
      if (count < 2) return;

      let pausedUntil = 0;

      const currentIndex = function () {
        return Math.round(track.scrollLeft / track.clientWidth);
      };

      const setDots = function () {
        const i = currentIndex();
        dots.forEach(function (d, j) { d.classList.toggle("on", j === i); });
      };

      // glissement soigné (easing doux, ~0,9 s) au lieu du défilement
      // "smooth" standard du navigateur
      const glide = function (to) {
        const from = track.scrollLeft;
        const dur = 900;
        const t0 = performance.now();
        const ease = function (t) {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        const step = function (now) {
          if (Date.now() < pausedUntil) return; // le client a pris la main
          const p = Math.min(1, (now - t0) / dur);
          track.scrollLeft = from + (to - from) * ease(p);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };

      track.addEventListener("scroll", setDots, { passive: true });
      // le client touche -> pause du défilement automatique quelques secondes
      ["pointerdown", "touchstart", "wheel"].forEach(function (ev) {
        track.addEventListener(ev, function () { pausedUntil = Date.now() + 8000; }, { passive: true });
      });

      const id = setInterval(function () {
        if (Date.now() < pausedUntil || !track.isConnected) return;
        // ne défile que si le diaporama est visible à l'écran
        const r = track.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const next = (currentIndex() + 1) % count;
        glide(next * track.clientWidth);
      }, 4200);

      window.__mpCarousels.push(id);
    });
  }

  // Surligne la catégorie visible pendant le défilement
  function highlightNav() {
    const links = nav.querySelectorAll("a");
    const sections = main.querySelectorAll(".category");
    if (!sections.length) return;

    let lastActive = "";
    const onScroll = function () {
      let current = sections[0].id;
      sections.forEach(function (sec) {
        if (sec.getBoundingClientRect().top < 140) current = sec.id;
      });
      links.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
      // fait glisser la barre pour garder la bulle active visible
      if (current !== lastActive) {
        lastActive = current;
        const active = nav.querySelector("a.active");
        if (active) {
          nav.scrollTo({
            left: active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2,
            behavior: "smooth",
          });
        }
      }
    };

    if (window.__mpScroll) window.removeEventListener("scroll", window.__mpScroll);
    window.__mpScroll = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Filet de sécurité : si le position:sticky de la barre ne
  // fonctionne pas dans le navigateur, on la force en haut
  // (position:fixed). Vérifié à chaque image affichée.
  (function navWatchdog() {
    // repère la position naturelle de la barre (insensible au sticky)
    const marker = document.createElement("div");
    nav.parentNode.insertBefore(marker, nav);
    // réserve la place de la barre quand elle passe en fixed
    const spacer = document.createElement("div");
    spacer.style.height = "0px";
    nav.parentNode.insertBefore(spacer, nav.nextSibling);

    const check = function () {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const shouldStick = y >= marker.offsetTop;
      const pinned = nav.classList.contains("pinned");

      if (shouldStick && !pinned && nav.getBoundingClientRect().top < -1) {
        // le sticky a lâché -> on épingle
        spacer.style.height = nav.offsetHeight + "px";
        nav.classList.add("pinned");
      } else if (!shouldStick && pinned) {
        nav.classList.remove("pinned");
        spacer.style.height = "0px";
      }
      requestAnimationFrame(check);
    };
    requestAnimationFrame(check);
  })();

  // Photo du héro : appliquée seulement si le fichier existe
  if (typeof HERO_IMAGE === "string" && HERO_IMAGE) {
    const probe = new Image();
    probe.onload = function () {
      hero.classList.add("has-photo");
      hero.style.backgroundImage = "url('" + HERO_IMAGE + "')";
    };
    probe.src = HERO_IMAGE;
  }

  toggle.addEventListener("click", function () {
    lang = lang === "fr" ? "en" : "fr";
    localStorage.setItem("mp-lang", lang);
    render();
  });

  render();
})();
