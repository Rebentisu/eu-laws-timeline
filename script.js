// script.js

// ================================
// 1) Blob menu + hamburger follows cursor (smaller blob)
// ================================
(() => {
  const menu = document.getElementById("menu");
  const blob = document.getElementById("blob");
  const blobPath = document.getElementById("blob-path");
  const hamburger = document.querySelector(".hamburger");
  const menuInner = document.querySelector(".menu-inner");

  if (!menu || !blob || !blobPath || !hamburger || !menuInner) return;

  const VB_W = 60;
  const VB_H = 1000;

  const anchorDistance = 120;
  const curviness = anchorDistance - 55;
  const hoverZone = 150;
  const expandAmount = 8;
  const maxPull = 22;

  function getPeek() {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--peek")
      .trim();
    const n = parseFloat(raw);
    return Number.isFinite(n) ? n : 22;
  }
  let peek = getPeek();

  let mouseX = 0;
  let mouseYpx = window.innerHeight / 2;

  let yPx = mouseYpx;

  let curveX = 0;
  let targetX = 0;

  let menuExpanded = false;

  const SMOOTH_Y = 0.18;
  const SMOOTH_X = 0.12;
  const lerp = (a, b, t) => a + (b - a) * t;

  function openMenu() {
    menu.classList.add("expanded");
    menuExpanded = true;
  }
  function closeMenu() {
    menu.classList.remove("expanded");
    menuExpanded = false;
  }

  window.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseYpx = e.clientY;
  });

  window.addEventListener("resize", () => {
    peek = getPeek();
  });

  hamburger.addEventListener("mouseenter", openMenu);
  menuInner.addEventListener("mouseenter", openMenu);
  menu.addEventListener("mouseleave", closeMenu);

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    menuExpanded ? closeMenu() : openMenu();
  });

  // init visible path
  (function initPath() {
    const yVB0 = VB_H / 2;
    const d0 =
      "M" + VB_W + "," + VB_H +
      "H0V0h" + VB_W +
      "v" + (yVB0 - anchorDistance) +
      "c0," + curviness + ",0," + curviness + ",0," + anchorDistance +
      "S" + VB_W + "," + yVB0 + "," + VB_W + "," + (yVB0 + anchorDistance * 2) +
      "V" + VB_H + "z";
    blobPath.setAttribute("d", d0);
    blob.style.width = peek + "px";
  })();

  function tick() {
    const vh = Math.max(1, window.innerHeight);

    const minPx = (anchorDistance / VB_H) * vh;
    const maxPx = ((VB_H - anchorDistance) / VB_H) * vh;
    const clampedY = Math.min(maxPx, Math.max(minPx, mouseYpx));

    yPx = lerp(yPx, clampedY, SMOOTH_Y);

    const hamH = hamburger.offsetHeight || 26;
    hamburger.style.top = (yPx - hamH / 2) + "px";

    const yVB = (yPx / vh) * VB_H;

    if (menuExpanded || mouseX > hoverZone) {
      targetX = 0;
    } else {
      const raw = -(((VB_W + expandAmount) / 100) * (mouseX - hoverZone));
      targetX = Math.max(-maxPull, Math.min(0, raw));
    }

    curveX = lerp(curveX, targetX, SMOOTH_X);

    const d =
      "M" + VB_W + "," + VB_H +
      "H0V0h" + VB_W +
      "v" + (yVB - anchorDistance) +
      "c0," + curviness + "," + curveX + "," + curviness + "," + curveX + "," + anchorDistance +
      "S" + VB_W + "," + yVB + "," + VB_W + "," + (yVB + anchorDistance * 2) +
      "V" + VB_H + "z";

    blobPath.setAttribute("d", d);
    blob.style.width = (peek + Math.abs(curveX)) + "px";

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();


// ================================
// 2) Timeline (D3)
// ================================
const data = [
  { name: "Habitats Directive", date: "1992-05-21", type: "Directive", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A01992L0043-20130701" },
  { name: "Water Framework Directive", date: "2000-10-23", type: "Directive", url: "https://eur-lex.europa.eu/eli/dir/2000/60/oj" },
  { name: "Groundwater Directive", date: "2006-12-12", type: "Directive", url: "https://eur-lex.europa.eu/eli/dir/2006/118/oj/eng" },
  { name: "EQS Directive", date: "2008-12-16", type: "Directive", url: "https://eur-lex.europa.eu/eli/dir/2008/105/2013-09-13" },
  { name: "Birds Directive", date: "2009-11-30", type: "Directive", url: "https://eur-lex.europa.eu/eli/dir/2009/147/oj/eng" },
  { name: "REACH Regulation", date: "2006-12-18", type: "Regulation", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02006R1907-20221217" },
  { name: "Priority Substances Directive", date: "2013-08-12", type: "Directive", url: "https://eur-lex.europa.eu/eli/dir/2013/39/oj/eng" },
  { name: "LULUCF Regulation", date: "2018-05-30", type: "Regulation", url: "https://eur-lex.europa.eu/eli/reg/2018/841/oj/eng" },
  { name: "POPs Regulation", date: "2019-06-20", type: "Regulation", url: "https://eur-lex.europa.eu/eli/reg/2019/1021/oj/eng" },
  { name: "EU Taxonomy Regulation", date: "2020-06-18", type: "Regulation", url: "https://eur-lex.europa.eu/eli/reg/2020/852/oj/eng" },
  { name: "European Climate Law", date: "2021-06-30", type: "Regulation", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=legissum:4536626" },
  { name: "CAP Strategic Plan Regulation", date: "2021-12-02", type: "Regulation", url: "https://eur-lex.europa.eu/eli/reg/2021/2115/oj/eng" },
  { name: "Nature Restoration Regulation", date: "2024-06-24", type: "Regulation", url: "https://eur-lex.europa.eu/eli/reg/2024/1991/oj/eng" },
  { name: "Soil Monitoring Directive", date: "2025-11-12", type: "Directive", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32025L2360" }
];

const parseDate = d3.timeParse("%Y-%m-%d");
data.forEach(d => d.parsedDate = parseDate(d.date));

const margin = { top: 60, right: 20, bottom: 60, left: 40 };
const maxOuterWidth = 1000;
const height = 400;

const timelineEl = document.getElementById("timeline");
const available = Math.min(maxOuterWidth, (timelineEl?.clientWidth || maxOuterWidth));
const outerWidth = Math.max(320, available);
const width = outerWidth - margin.left - margin.right;

d3.select("#timeline").selectAll("*").remove();

const svg = d3.select("#timeline")
  .append("svg")
  .attr("width", outerWidth)
  .attr("height", height + margin.top + margin.bottom);

const g = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleTime()
  .domain([new Date("1990-01-01"), new Date("2030-01-01")])
  .range([0, width]);

g.append("g")
  .attr("transform", `translate(0, ${height / 2})`)
  .call(d3.axisBottom(x).ticks(d3.timeYear.every(2)).tickFormat(d3.timeFormat("%Y")));

// Tooltip (single instance)
let tooltip = d3.select("body").select(".tooltip");
if (tooltip.empty()) tooltip = d3.select("body").append("div").attr("class", "tooltip");

const labelOffsets = {
  "European Climate Law": -184,
  "EU Taxonomy Regulation": -105,
  "POPs Regulation": -72,
  "EQS Directive": 35,
  "Birds Directive": 65,
  "LULUCF Regulation": -35,
  "CAP Strategic Plan Regulation": -150,
  "Nature Restoration Regulation": -54
};

const positionOverrides = {
  "EQS Directive":        { circleY: 65 },
  "Birds Directive":      { circleY: 95 },
  "European Climate Law": { circleY: -170 },
  "EU Taxonomy Regulation": { circleY: -90 },
  "POPs Regulation":        { circleY: -60 },
  "CAP Strategic Plan Regulation": { circleY: -135 },
  "LULUCF Regulation":         { circleY: -25 }
};

const nodeGroups = g.selectAll(".node")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "node")
  .style("cursor", "pointer")
  .on("click", (event, d) => window.open(d.url, "_blank"))
  .on("mousemove", (event) => {
    tooltip
      .style("left", (event.clientX + 12) + "px")
      .style("top", (event.clientY + 12) + "px");
  })
  .on("mouseover", function (event, d) {
    const cx = x(d.parsedDate);
    const cy = +d3.select(this).select("circle").attr("cy");

    g.insert("line", ".node")
      .attr("class", "hover-line")
      .attr("x1", cx)
      .attr("x2", cx)
      .attr("y1", cy)
      .attr("y2", height / 2)
      .attr("stroke", "#999")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke-width", 1);

    d3.select(this).select("circle")
      .attr("stroke", "#000")
      .attr("stroke-width", 3);

    d3.select(this).select("text")
      .attr("font-weight", "bold");

    tooltip
      .style("opacity", 1)
      .html(`<strong>${d.name}</strong><br>${d.date}<br><i>${d.type}</i>`)
      .style("left", (event.clientX + 12) + "px")
      .style("top", (event.clientY + 12) + "px");
  })
  .on("mouseout", function () {
    g.selectAll(".hover-line").remove();

    d3.select(this).select("circle")
      .attr("stroke", "#333")
      .attr("stroke-width", 1);

    d3.select(this).select("text")
      .attr("font-weight", "normal");

    tooltip.style("opacity", 0);
  });

nodeGroups.append("circle")
  .attr("cx", d => x(d.parsedDate))
  .attr("cy", d => {
    const override = positionOverrides[d.name];
    if (override) return height / 2 + override.circleY;
    return d.type === "Directive" ? height / 2 + 30 : height / 2 - 40;
  })
  .attr("r", 8)
  .attr("fill", d => d.type === "Directive" ? "#ffeb3b" : "#2196f3")
  .attr("stroke", "#333")
  .attr("stroke-width", 1);

nodeGroups.append("text")
  .attr("class", "label")
  .attr("x", d => x(d.parsedDate))
  .attr("y", d => {
    if (labelOffsets[d.name] !== undefined) {
      return height / 2 + (d.type === "Directive" ? 50 + labelOffsets[d.name] : labelOffsets[d.name]);
    }
    return d.type === "Directive" ? height / 2 + 50 : height / 2 - 60;
  })
  .attr("text-anchor", "middle")
  .attr("font-size", "11px")
  .attr("fill", "#444")
  .text(d => d.name);

// Legend centered under plot area (in SVG)
const legendData = [
  { label: "Directive", color: "#ffeb3b", stroke: "#333" },
  { label: "Regulation", color: "#2196f3", stroke: "#333" }
];

const legendY = height + margin.top + 20;
const itemGap = 220;
const totalLegendWidth = itemGap * (legendData.length - 1) + 120;
const legendStartX = (outerWidth - totalLegendWidth) / 2;

const legend = svg.append("g")
  .attr("transform", `translate(${legendStartX}, ${legendY})`);

legend.selectAll("circle")
  .data(legendData)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => i * itemGap)
  .attr("cy", 0)
  .attr("r", 8)
  .attr("fill", d => d.color)
  .attr("stroke", d => d.stroke)
  .attr("stroke-width", 1.5);

legend.selectAll("text")
  .data(legendData)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * itemGap + 14)
  .attr("y", 4)
  .text(d => d.label)
  .attr("font-size", "12px")
  .attr("fill", "#333");


// ================================
// 3) Modal (THIS IS WHY THE BUTTON WORKS)
// ================================
const modal = document.querySelector('.modal-frame');
const overlay = document.querySelector('.modal-overlay');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

function openModal(){
  overlay.classList.add('state-show');
  modal.classList.remove('state-leave');
  modal.classList.add('state-appear');
}

function closeModal(){
  overlay.classList.remove('state-show');
  modal.classList.remove('state-appear');
  modal.classList.add('state-leave');
}

openBtn?.addEventListener('click', openModal);
closeBtn?.addEventListener('click', closeModal);
overlay?.addEventListener('click', closeModal);

// Escape key closes modal
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
