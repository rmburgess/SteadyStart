/* Steady Start: page behavior.
   Privacy rules: nothing is saved (no cookies, localStorage, or URL changes)
   and nothing is sent anywhere. Clicks only change what is shown on screen. */
(function () {
  "use strict";

  // ---------- Quick exit ----------
  // replace() swaps this page out of the tab's history entry, so "Back"
  // does not return here. It cannot erase browser history; the footer says so.
  var EXIT_URL = "https://www.google.com/search?q=weather";

  function quickExit() {
    document.title = "Weather";
    document.body.innerHTML = "";
    window.location.replace(EXIT_URL);
  }

  document.getElementById("quick-exit").addEventListener("click", quickExit);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") quickExit();
  });

  // ---------- Helpers ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------- Tabs ----------
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));

  function selectTab(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    window.scrollTo(0, 0);
  }

  tabs.forEach(function (tab, i) {
    tab.tabIndex = tab.getAttribute("aria-selected") === "true" ? 0 : -1;
    tab.addEventListener("click", function () { selectTab(tab); });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (next) { e.preventDefault(); next.focus(); selectTab(next); }
    });
  });

  // ---------- Guide ----------
  var guide = window.STEADY_GUIDE || [];
  var grid = document.getElementById("choice-grid");
  var cardsEl = document.getElementById("cards");

  function renderCards(path) {
    cardsEl.innerHTML = '<h2 class="cards-heading">' + esc(path.heading) + "</h2>" + cardsHtml(path.cards);
  }

  function cardsHtml(cards) {
    var html = "";
    cards.forEach(function (card) {
      html += '<article class="card"><h3><span class="card-tag">' + esc(card.tag) + "</span>" +
        esc(card.title) + "</h3>";
      if (card.intro) html += "<p>" + esc(card.intro) + "</p>";
      if (card.items) {
        html += "<ul>" + card.items.map(function (it) {
          if (typeof it === "string") return "<li>" + esc(it) + "</li>";
          // { name, text, call, url } → a hotline or website
          if (it.name) {
            return '<li class="resource"><strong>' + esc(it.name) + "</strong>. " + esc(it.text) +
              (it.call ? ' Call <a href="tel:' + esc(it.call.replace(/[^0-9]/g, "")) + '">' + esc(it.call) + "</a>." : "") +
              (it.url ? ' <a href="' + esc(it.url) + '" rel="noopener noreferrer" target="_blank">Website</a>' : "") +
              "</li>";
          }
          // { text, say } → an item with an example phrase to use
          return "<li>" + esc(it.text) +
            (it.say ? '<p class="say">"' + esc(it.say) + '"</p>' : "") + "</li>";
        }).join("") + "</ul>";
      }
      if (card.note) html += '<p class="card-note">' + esc(card.note) + "</p>";
      if (card.sources) {
        html += '<p class="card-note">Sources: ' + card.sources.map(function (s) {
          return '<a href="' + esc(s.url) + '" rel="noopener noreferrer" target="_blank">' + esc(s.name) + "</a>";
        }).join(" · ") + "</p>";
      }
      html += "</article>";
    });
    return html;
  }

  // "Paying for care" and "Care by video" tabs use the same cards.
  var pages = window.STEADY_PAGES || {};
  Object.keys(pages).forEach(function (key) {
    var el = document.getElementById("page-" + key);
    if (!el) return;
    var p = pages[key];
    el.innerHTML = "<h1>" + esc(p.heading) + "</h1>" +
      (p.intro ? '<p class="lede">' + esc(p.intro) + "</p>" : "") + cardsHtml(p.cards);
  });

  guide.forEach(function (path) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "choice";
    b.setAttribute("aria-pressed", "false");
    b.innerHTML = '<span><span class="choice-label">' + esc(path.choice) + "</span>" +
      (path.sub ? '<span class="choice-sub">' + esc(path.sub) + "</span>" : "") + "</span>";
    b.addEventListener("click", function () {
      grid.querySelectorAll(".choice").forEach(function (c) {
        c.setAttribute("aria-pressed", c === b ? "true" : "false");
      });
      renderCards(path);
    });
    grid.appendChild(b);
  });

  cardsEl.innerHTML = '<p class="empty">Pick one of the options above to see what to expect, ' +
    "how to ask for what you need, and questions to bring. You can switch any time.</p>";

  // ---------- Providers ----------
  // Search runs only inside this page. Nothing typed is saved or sent.
  var providers = window.STEADY_PROVIDERS || [];
  var listEl = document.getElementById("provider-list");
  var searchEl = document.getElementById("provider-search");
  var regionEl = document.getElementById("provider-region");
  var typeEl = document.getElementById("provider-type");
  var countEl = document.getElementById("provider-count");

  function fillSelect(sel, values) {
    values.filter(function (v, i) { return v && values.indexOf(v) === i; }).sort()
      .forEach(function (v) {
        var o = document.createElement("option");
        o.value = v;
        o.textContent = v;
        sel.appendChild(o);
      });
  }
  fillSelect(regionEl, providers.map(function (p) { return p.region; }));
  fillSelect(typeEl, providers.map(function (p) { return p.type; }));

  function providerCard(p) {
    return '<article class="card provider"><h3>' + esc(p.name) + "</h3>" +
      '<p class="meta">' + esc([p.city, p.region, p.type].filter(Boolean).join(" · ")) + "</p>" +
      (p.services ? "<p>" + esc(p.services) + "</p>" : "") +
      (p.quote ? "<blockquote>“" + esc(p.quote) + "”</blockquote>" : "") +
      // Reviewed submissions only (see the rules in js/providers.js).
      (p.patientSays ? '<p class="said"><span class="said-who">A patient said:</span> “' + esc(p.patientSays) + "”</p>" : "") +
      (p.providerSays ? '<p class="said"><span class="said-who">From the provider:</span> “' + esc(p.providerSays) + "”</p>" : "") +
      '<p class="small"><a href="' + esc(p.url) + '" rel="noopener noreferrer" target="_blank">' +
      "See it on their website</a> · checked " + esc(p.checked) + "</p></article>";
  }

  function showProviders() {
    if (!providers.length) {
      countEl.textContent = "";
      listEl.innerHTML = '<p class="empty">No places are listed yet. We only add a place if its own ' +
        "website says its care is trauma-informed.</p>";
      return;
    }
    var q = searchEl.value.trim().toLowerCase();
    var region = regionEl.value;
    var type = typeEl.value;
    var hits = providers.filter(function (p) {
      var hay = [p.name, p.city, p.region, p.type, p.services].join(" ").toLowerCase();
      return (!q || hay.indexOf(q) !== -1) &&
        (!region || p.region === region) &&
        (!type || p.type === type);
    });
    countEl.textContent = "Showing " + hits.length + " of " + providers.length + " places.";
    listEl.innerHTML = hits.length ? hits.map(providerCard).join("") :
      '<p class="empty">No places match. Try a nearby city, or pick "All areas".</p>';
  }

  [searchEl, regionEl, typeEl].forEach(function (el) {
    el.addEventListener("input", showProviders);
  });
  showProviders();

  // ---------- Suggest a provider (class demo) ----------
  // Nothing is sent or saved: on "send" the form is checked, cleared, and a
  // thank-you note is shown. The page's privacy lock also blocks sending.
  var form = document.getElementById("suggest-form");
  var thanks = document.getElementById("suggest-thanks");
  var errEl = document.getElementById("suggest-error");

  function who() { return form.querySelector('input[name="who"]:checked').value; }

  function showWho() {
    var w = who();
    document.querySelectorAll("#suggest [data-who]").forEach(function (el) {
      el.hidden = el.getAttribute("data-who") !== w;
    });
    errEl.hidden = true;
  }
  form.querySelectorAll('input[name="who"]').forEach(function (r) {
    r.addEventListener("change", showWho);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var w = who();
    var f = form.elements;
    var problems = [];
    if (!f.practice.value.trim()) problems.push("the clinic or hospital name");
    if (!f.blurb.value.trim()) problems.push(w === "patient" ? "what your care was like" : "how you help patients feel safe");
    if (w === "provider" && !/^https?:\/\/\S+\.\S+/.test(f.link.value.trim())) problems.push("a link to your trauma-informed page");
    if (problems.length) {
      errEl.textContent = "Please add " + problems.join(", and ") + ".";
      errEl.hidden = false;
      return;
    }
    form.reset();
    showWho();
    form.hidden = true;
    thanks.hidden = false;
    thanks.focus();
  });

  document.getElementById("suggest-again").addEventListener("click", function () {
    thanks.hidden = true;
    form.hidden = false;
    form.elements.practice.focus();
  });

  document.getElementById("go-suggest").addEventListener("click", function () {
    document.getElementById("suggest").scrollIntoView({ block: "start" });
    form.elements.practice.focus({ preventScroll: true });
  });

  // ---------- Evidence charts ----------
  var evidence = window.STEADY_EVIDENCE || { why: "", charts: [] };
  document.getElementById("evidence-why").textContent = evidence.why;
  var chartsEl = document.getElementById("charts");

  function barChart(rows, unit) {
    var max = Math.max.apply(null, rows.map(function (r) { return r.value; }));
    // Small viewBox so text stays readable when scaled to a phone screen.
    var rowH = 34, labelW = 120, w = 400, chartW = w - labelW - 60;
    var h = rows.length * rowH + 8;
    var svg = '<svg viewBox="0 0 ' + w + " " + h + '" role="img" aria-hidden="true">';
    rows.forEach(function (r, i) {
      var y = i * rowH + 4;
      var bw = max > 0 ? Math.max(2, (r.value / max) * chartW) : 2;
      svg += '<text class="axis-label" x="' + (labelW - 8) + '" y="' + (y + 19) +
        '" text-anchor="end">' + esc(r.label) + "</text>";
      svg += '<rect class="bar" x="' + labelW + '" y="' + (y + 4) + '" width="' + bw +
        '" height="' + (rowH - 12) + '" rx="4"></rect>';
      svg += '<text class="val" x="' + (labelW + bw + 6) + '" y="' + (y + 19) + '">' +
        esc(r.value) + (unit ? " " + esc(unit) : "") + "</text>";
    });
    return svg + "</svg>";
  }

  function dataTable(rows, unit) {
    // Screen-reader version of the chart.
    return '<table class="visually-hidden"><tr><th>Group</th><th>Value</th></tr>' +
      rows.map(function (r) {
        return "<tr><td>" + esc(r.label) + "</td><td>" + esc(r.value) + " " + esc(unit || "") + "</td></tr>";
      }).join("") + "</table>";
  }

  // Choropleth of Texas Health Service Regions. Rows are keyed by region
  // code ("1", "2/3", ...). Shapes come from js/texas-map.js.
  function regionMap(rows, unit) {
    var map = window.STEADY_TEXAS_MAP;
    var vals = rows.map(function (r) { return r.value; });
    var min = Math.min.apply(null, vals), max = Math.max.apply(null, vals);
    var STEPS = 5;
    function level(v) {
      return max === min ? 3 : Math.min(STEPS, 1 + Math.floor((v - min) / (max - min) * STEPS));
    }
    var svg = '<svg class="tx-map" viewBox="' + map.viewBox + '" role="img" aria-hidden="true">';
    rows.forEach(function (r) {
      if (!map.regions[r.label]) return;
      svg += '<path class="region lv' + level(r.value) + '" d="' + map.regions[r.label] + '">' +
        "<title>Region " + esc(r.label) + ": " + esc(r.value) + (unit ? " " + esc(unit) : "") + "</title></path>";
    });
    svg += '<path class="region-borders" d="' + map.borders + '"></path>';
    rows.forEach(function (r) {
      var at = map.labels[r.label];
      if (!at) return;
      svg += '<text class="map-label" x="' + at[0] + '" y="' + at[1] + '" text-anchor="middle">' +
        '<tspan x="' + at[0] + '" dy="-0.2em" class="map-code">' + esc(r.label) + "</tspan>" +
        '<tspan x="' + at[0] + '" dy="1.15em" class="map-val">' + esc(r.value) + "</tspan></text>";
    });
    svg += "</svg>";
    var legend = '<div class="map-legend" aria-hidden="true"><span>Lower</span>';
    for (var i = 1; i <= STEPS; i++) legend += '<span class="swatch lv' + i + '"></span>';
    return svg + legend + "<span>Higher</span></div>";
  }

  function factList(facts) {
    return '<ul class="facts">' + facts.map(function (f) {
      return "<li>" + esc(f.text) + (f.source ? ' <span class="small">(<a href="' + esc(f.source.url) +
        '" rel="noopener noreferrer" target="_blank">' + esc(f.source.name) + "</a>)</span>" : "") + "</li>";
    }).join("") + "</ul>";
  }

  chartsEl.innerHTML = evidence.charts.map(function (c) {
    var body;
    if (c.facts && c.facts.length) {
      body = factList(c.facts);
    } else if (c.rows && c.rows.length) {
      var useMap = c.display === "map" && window.STEADY_TEXAS_MAP;
      body = (useMap ? regionMap(c.rows, c.unit) : barChart(c.rows, c.unit)) + dataTable(c.rows, c.unit) +
        '<p class="source">Source: <a href="' + esc(c.source.url) +
        '" rel="noopener noreferrer" target="_blank">' + esc(c.source.name) + "</a>" +
        (c.source.years ? ", " + esc(c.source.years) : "") + "</p>";
    } else {
      var src = c.source || {};
      body = '<p class="empty">Data not added yet. Planned source: ' + esc(src.name || "to be decided") +
        (src.url ? ' (<a href="' + esc(src.url) + '" rel="noopener noreferrer" target="_blank">link</a>)' : "") +
        ". No numbers will appear here until they are copied from the source.</p>";
    }
    return '<figure class="card chart"><figcaption><h2>' + esc(c.title) + "</h2>" +
      (c.question ? '<p class="small">' + esc(c.question) + "</p>" : "") +
      "</figcaption>" + body + "</figure>";
  }).join("");
})();
