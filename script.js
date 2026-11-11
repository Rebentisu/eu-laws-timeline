/* RURBANIVE legislation guide. The records are maintained in the RURBANIVE_LAWS array below. */
'use strict';
// EU legislation and its mapped Greek national legal measures.
const RURBANIVE_LAWS = [
  {
    "name": "Habitats Directive",
    "date": "1992-05-21",
    "type": "Directive",
    "url": "https://eur-lex.europa.eu/eli/dir/1992/43/oj/eng",
    "about": "Protects natural habitats and wild fauna and flora of EU interest and underpins the Natura 2000 network. It requires measures to maintain or restore favourable conservation status.",
    "restoration": "Relevant when restoration affects protected habitats or species. Native-plant re-establishment, habitat quality, ecological connectivity and appropriate assessment may matter depending on the site and activity; it does not automatically cover every quarry.",
    "greekStatus": "Transposition verified by the Greek Ministry of Environment; related biodiversity law distinguished from the original transposing act.",
    "national": [
      {
        "title": "KYA 33318/3028/1998 — FEK B 1289/1998",
        "url": "https://ypen.gov.gr/wp-content/uploads/legacy/Files/Perivallon/Diaxeirisi%20Fysikoy%20Perivallontos/Nomothesia/KYA_ENARMONISI.pdf",
        "classification": "Transposition",
        "note": "Principal Greek measure implementing the Habitats Directive."
      },
      {
        "title": "KYA 14849/853/E103/2008 — FEK B 645/2008",
        "url": "https://ypen.gov.gr/perivallon/viopoikilotita/nomothesia/",
        "classification": "Amending measure",
        "note": "Amended the 1998 KYA, including for EU accession-related adjustments."
      },
      {
        "title": "Law 3937/2011 — FEK A 60/2011",
        "url": "https://ypen.gov.gr/wp-content/uploads/legacy/Files/Perivallon/Diaxeirisi%20Fysikoy%20Perivallontos/Nomothesia/N3937FEK60A31032011.pdf",
        "classification": "Related national law",
        "note": "Greek biodiversity framework; not the original transposition of the Directive."
      }
    ],
    "source": "Greek Ministry of Environment — biodiversity legislation",
    "sourceUrl": "https://ypen.gov.gr/perivallon/viopoikilotita/nomothesia/",
    "category": "Biodiversity",
    "ref": "92/43/EEC",
    "priority": "Core to habitat protection"
  },
  {
    "name": "Water Framework Directive",
    "date": "2000-10-23",
    "type": "Directive",
    "url": "https://eur-lex.europa.eu/eli/dir/2000/60/oj/eng",
    "about": "Establishes the EU framework for managing surface water and groundwater through water-body status objectives, river-basin management plans and programmes of measures. Amended in 2026 by Directive (EU) 2026/805.",
    "restoration": "Projects that alter runoff, erosion, water use or discharges should consider the status and management measures for the relevant water body. Especially pertinent to drainage and runoff from restored quarry areas.",
    "greekStatus": "Verified Greek transposition.",
    "national": [
      {
        "title": "Law 3199/2003 — FEK A 280/2003",
        "url": "https://ypen.gov.gr/perivallon/ydatikoi-poroi/odigia-plaisio-gia-ta-nera/",
        "classification": "Transposition",
        "note": "Established a national framework for protecting and managing waters."
      },
      {
        "title": "Presidential Decree 51/2007 — FEK A 54/2007",
        "url": "https://ypen.gov.gr/perivallon/ydatikoi-poroi/odigia-plaisio-gia-ta-nera/",
        "classification": "Transposition / implementation",
        "note": "Specifies measures and procedures for integrated water protection and management."
      }
    ],
    "source": "Greek Ministry of Environment — Water Framework Directive",
    "sourceUrl": "https://ypen.gov.gr/perivallon/ydatikoi-poroi/odigia-plaisio-gia-ta-nera/",
    "category": "Water",
    "ref": "2000/60/EC",
    "priority": "Core to water-body management"
  },
  {
    "name": "Groundwater Directive",
    "date": "2006-12-12",
    "type": "Directive",
    "url": "https://eur-lex.europa.eu/eli/dir/2006/118/oj/eng",
    "about": "Complements EU water policy with thresholds, monitoring and measures to prevent and control groundwater pollution. Updated by Directive (EU) 2026/805.",
    "restoration": "Quarry substrates, amendments and site water management may raise groundwater-protection questions where pollutants can leach. Whether legal duties arise depends on activities and local conditions.",
    "greekStatus": "Verified Greek transposition and later amendment.",
    "national": [
      {
        "title": "KYA 39626/2208/E130/2009 — FEK B 2075/2009",
        "url": "https://ypen.gov.gr/perivallon/ydatikoi-poroi/programma-parakolouthisis/",
        "classification": "Transposition",
        "note": "Greek groundwater pollution and deterioration measures."
      },
      {
        "title": "KYA 182314/1241/2016 — FEK B 2888/2016",
        "url": "https://www.elinyae.gr/ethniki-nomothesia/ya-18231412412016-fek-2888b-1292016",
        "classification": "Amendment",
        "note": "Updated an annex of the 2009 KYA to reflect Directive 2014/80/EU."
      }
    ],
    "source": "Greek Ministry of Environment — national water monitoring programme",
    "sourceUrl": "https://ypen.gov.gr/perivallon/ydatikoi-poroi/programma-parakolouthisis/",
    "category": "Water",
    "ref": "2006/118/EC",
    "priority": "Core to groundwater protection"
  },
  {
    "name": "REACH Regulation",
    "date": "2006-12-18",
    "type": "Regulation",
    "url": "https://eur-lex.europa.eu/eli/reg/2006/1907/oj/eng",
    "about": "EU framework for registration, evaluation, authorisation and restriction of chemicals, focused on controlling risks from substances.",
    "restoration": "Relevant if projects place chemicals or certain treated materials on the market or use regulated substances. It is not a restoration-specific law and should not be assumed to regulate every natural soil amendment.",
    "greekStatus": "REACH applies directly in Greece. Three Greek authority, control and penalty decisions are officially listed by AADE; none is a transposition.",
    "national": [
      {
        "title": "Ministerial Decision 3013966/2726/2007 — FEK B 1025/2007",
        "url": "https://www.aade.gr/en/chemical-laboratories/chemical-products-articles/chemicals-legislation/national-implementing-provisions",
        "classification": "National implementation",
        "note": "Designates the national authority responsible for applying REACH."
      },
      {
        "title": "Ministerial Decision 450/2008 — FEK B 2553/2008",
        "url": "https://www.aade.gr/en/chemical-laboratories/chemical-products-articles/chemicals-legislation/national-implementing-provisions",
        "classification": "National enforcement",
        "note": "Establishes control measures for REACH."
      },
      {
        "title": "Ministerial Decision 82/2009 — FEK B 581/2009",
        "url": "https://www.aade.gr/en/chemical-laboratories/chemical-products-articles/chemicals-legislation/national-implementing-provisions",
        "classification": "National enforcement",
        "note": "Establishes penalties for breaches of REACH."
      }
    ],
    "source": "AADE / General Chemical State Laboratory — national implementing provisions",
    "sourceUrl": "https://www.aade.gr/en/chemical-laboratories/chemical-products-articles/chemicals-legislation/national-implementing-provisions",
    "category": "Chemicals",
    "ref": "(EC) 1907/2006",
    "priority": "Context-dependent for chemical use"
  },
  {
    "name": "EQS Directive",
    "date": "2008-12-16",
    "type": "Directive",
    "url": "https://eur-lex.europa.eu/eli/dir/2008/105/oj/eng",
    "about": "Sets environmental quality standards (EQS) for priority pollutants and other substances in EU surface waters; its rules were further amended by Directive (EU) 2026/805.",
    "restoration": "Can matter where a restoration project affects water quality or pollutant transport. The practical focus is on water-body chemical standards, not a general soil-restoration target.",
    "greekStatus": "Verified Greek transposition; later amended.",
    "national": [
      {
        "title": "KYA 51354/2641/E103/2010 — FEK B 1909/2010",
        "url": "https://ypen.gov.gr/perivallon/ydatikoi-poroi/programma-parakolouthisis/",
        "classification": "Transposition",
        "note": "Introduced Greek environmental quality standards for certain pollutants in surface waters."
      },
      {
        "title": "KYA οικ. 170766/2016 — FEK B 69/2016",
        "url": "https://eur-lex.europa.eu/legal-content/EN/NIM/?uri=CELEX%3A32013L0039",
        "classification": "Amendment",
        "note": "Updated the 2010 KYA in compliance with Directive 2013/39/EU."
      }
    ],
    "source": "Greek Ministry of Environment — monitoring; EUR-Lex national transposition records",
    "sourceUrl": "https://ypen.gov.gr/perivallon/ydatikoi-poroi/programma-parakolouthisis/",
    "category": "Water",
    "ref": "2008/105/EC",
    "priority": "Core to surface-water chemical quality"
  },
  {
    "name": "Birds Directive",
    "date": "2009-11-30",
    "type": "Directive",
    "url": "https://eur-lex.europa.eu/eli/dir/2009/147/oj/eng",
    "about": "Protects naturally occurring wild birds, their habitats and important areas, including Special Protection Areas within Natura 2000. It codified the earlier Birds Directive.",
    "restoration": "Restoration works, planting or land disturbance can affect nesting sites and bird habitats. Review protection requirements for the specific location and season.",
    "greekStatus": "Verified Greek national measures; the 2009 Directive codified an earlier Directive.",
    "national": [
      {
        "title": "KYA 37338/1807/E103/2010 — FEK B 1495/2010",
        "url": "https://ypen.gov.gr/wp-content/uploads/legacy/Files/Perivallon/Diaxeirisi%20Fysikoy%20Perivallontos/Nomothesia/Enarmonisi79_409_2010.pdf",
        "classification": "National implementing measure",
        "note": "Protects wild birds and habitats under the former Birds Directive, codified in 2009."
      },
      {
        "title": "KYA 8353/276/E103/2012 — FEK B 415/2012",
        "url": "https://ypen.gov.gr/perivallon/viopoikilotita/nomothesia/",
        "classification": "Amendment",
        "note": "Amended and supplemented the 2010 KYA."
      },
      {
        "title": "YA 414985/1985 — FEK B 757/1985",
        "url": "https://ypen.gov.gr/perivallon/viopoikilotita/nomothesia/",
        "classification": "Earlier implementing measure",
        "note": "Early national wild-bird management measures under the predecessor Directive."
      }
    ],
    "source": "Greek Ministry of Environment — biodiversity legislation",
    "sourceUrl": "https://ypen.gov.gr/perivallon/viopoikilotita/nomothesia/",
    "category": "Biodiversity",
    "ref": "2009/147/EC",
    "priority": "Core to wild-bird habitat protection"
  },
  {
    "name": "Priority Substances Directive",
    "date": "2013-08-12",
    "type": "Directive",
    "url": "https://eur-lex.europa.eu/eli/dir/2013/39/oj/eng",
    "about": "Updates the Water Framework and Environmental Quality Standards Directives regarding priority substances and associated monitoring and quality standards.",
    "restoration": "Useful when monitoring or addressing contaminant movement into surface waters. Relevant chiefly to pollution pathways and water quality, not biodiversity restoration by itself.",
    "greekStatus": "Greece notified a national transposing KYA for this amending Directive; it is part of the water legislation family.",
    "national": [
      {
        "title": "KYA οικ. 170766/2016 — FEK B 69/2016",
        "url": "https://eur-lex.europa.eu/legal-content/EN/NIM/?uri=CELEX%3A32013L0039",
        "classification": "Transposition",
        "note": "Amends KYA 51354/2641/E103/2010 to incorporate Directive 2013/39/EU."
      }
    ],
    "source": "EUR-Lex — Greek national transposition measures for 2013/39/EU",
    "sourceUrl": "https://eur-lex.europa.eu/legal-content/EN/NIM/?uri=CELEX%3A32013L0039",
    "category": "Water",
    "ref": "2013/39/EU",
    "priority": "Chemical quality standards update"
  },
  {
    "name": "LULUCF Regulation",
    "date": "2018-05-30",
    "type": "Regulation",
    "url": "https://eur-lex.europa.eu/eli/reg/2018/841/oj/eng",
    "about": "Establishes accounting and obligations for greenhouse-gas emissions and removals from land use, land-use change and forestry.",
    "restoration": "Relevant at policy and reporting level to land carbon stocks, vegetation recovery and land management. It does not by itself create a carbon accounting obligation for every quarry restoration project.",
    "greekStatus": "Directly applicable EU Regulation; Greek national climate strategy and law are related policy context, not formal transposition.",
    "national": [
      {
        "title": "Greek National Energy & Climate Plan (updated 2024) — FEK B 6983/2024",
        "url": "https://ypen.gov.gr/wp-content/uploads/2025/04/%CE%91%CE%BD%CE%B1%CE%B8%CE%B5%CF%89%CF%81%CE%B7%CE%BC%CE%AD%CE%BD%CE%BF-%CE%95%CE%A3%CE%95%CE%9A-2024-%CE%A6%CE%95%CE%9A-6983.pdf",
        "classification": "Related national policy",
        "note": "Includes Greek LULUCF sector projections and policy assumptions; it is not a transposition."
      },
      {
        "title": "Law 4936/2022 — National Climate Law",
        "url": "https://ypen.gov.gr/perivallon/klimatiki-allagi/ethnikos-klimatikos-nomos/",
        "classification": "Related national law",
        "note": "Provides a broader Greek climate-policy framework; not the transposition of this Regulation."
      }
    ],
    "source": "Greek Ministry of Environment — National Energy & Climate Plan and National Climate Law",
    "sourceUrl": "https://ypen.gov.gr/perivallon/klimatiki-allagi/ethnikos-klimatikos-nomos/",
    "category": "Climate",
    "ref": "(EU) 2018/841",
    "priority": "National land-carbon accounting"
  },
  {
    "name": "POPs Regulation",
    "date": "2019-06-20",
    "type": "Regulation",
    "url": "https://eur-lex.europa.eu/eli/reg/2019/1021/oj/eng",
    "about": "Restricts and governs persistent organic pollutants (POPs), including waste-related obligations for substances that persist in the environment.",
    "restoration": "Potentially relevant when managing contaminated soils or waste during restoration. The exact duties depend on the substances, contamination and waste streams present.",
    "greekStatus": "EU Regulation applies directly. Greek Stockholm Convention measures are relevant historical context; a comprehensive current enforcement mapping for Regulation 2019/1021 is not established here.",
    "national": [
      {
        "title": "Law 3447/2006 — FEK A 52/2006",
        "url": "https://www.aade.gr/en/chemical-laboratories/chemical-products-articles/chemicals-legislation/national-implementing-provisions",
        "classification": "Related national law",
        "note": "Ratifies the Stockholm Convention on Persistent Organic Pollutants. It predates the 2019 EU recast Regulation."
      },
      {
        "title": "National authority designation — FEK B 774/2007",
        "url": "https://www.aade.gr/en/chemical-laboratories/chemical-products-articles/chemicals-legislation/national-implementing-provisions",
        "classification": "Related implementation",
        "note": "Officially listed by AADE for the Stockholm Convention; not asserted to transpose the 2019 Regulation."
      }
    ],
    "source": "AADE — national implementing provisions, POPs",
    "sourceUrl": "https://www.aade.gr/en/chemical-laboratories/chemical-products-articles/chemicals-legislation/national-implementing-provisions",
    "category": "Chemicals",
    "ref": "(EU) 2019/1021",
    "priority": "Contaminated soil and waste"
  },
  {
    "name": "EU Taxonomy Regulation",
    "date": "2020-06-18",
    "type": "Regulation",
    "url": "https://eur-lex.europa.eu/eli/reg/2020/852/oj/eng",
    "about": "Sets an EU classification framework for environmentally sustainable economic activities, used particularly for sustainable-finance assessments and disclosures.",
    "restoration": "May affect how eligible restoration-related economic activities are assessed for financing or sustainability claims. It is not a general permit system for quarry restoration.",
    "greekStatus": "Directly applicable EU Regulation. No specific Greek transposition is required; this guide does not claim to provide a full mapping of supervisory or disclosure rules.",
    "national": [],
    "source": "European Commission — Taxonomy delegated and implementing acts",
    "sourceUrl": "https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/implementing-and-delegated-acts/taxonomy-regulation_en",
    "category": "Finance",
    "ref": "(EU) 2020/852",
    "priority": "Sustainable-finance classification"
  },
  {
    "name": "European Climate Law",
    "date": "2021-06-30",
    "type": "Regulation",
    "url": "https://eur-lex.europa.eu/eli/reg/2021/1119/oj/eng",
    "about": "Makes EU climate neutrality by 2050 legally binding and provides a framework for emissions reduction, removals and adaptation.",
    "restoration": "Native vegetation and soil-carbon restoration may contribute to climate mitigation or adaptation objectives. These broad climate targets should not be confused with a project-level permit requirement.",
    "greekStatus": "EU Regulation applies directly; Greece adopted a related National Climate Law, which the Ministry expressly describes as following the European Climate Law.",
    "national": [
      {
        "title": "Law 4936/2022 — FEK A 105/2022",
        "url": "https://ypen.gov.gr/perivallon/klimatiki-allagi/ethnikos-klimatikos-nomos/",
        "classification": "Related national climate law",
        "note": "Greek National Climate Law, adopted in the context of EU climate objectives; not transposition of the EU Regulation."
      }
    ],
    "source": "Greek Ministry of Environment — National Climate Law",
    "sourceUrl": "https://ypen.gov.gr/perivallon/klimatiki-allagi/ethnikos-klimatikos-nomos/",
    "category": "Climate",
    "ref": "(EU) 2021/1119",
    "priority": "EU-level climate target framework"
  },
  {
    "name": "CAP Strategic Plan Regulation",
    "date": "2021-12-02",
    "type": "Regulation",
    "url": "https://eur-lex.europa.eu/eli/reg/2021/2115/oj/eng",
    "about": "Sets the framework for Member States’ Common Agricultural Policy strategic plans, including environmental objectives and funding interventions.",
    "restoration": "May connect agricultural landscape restoration, biodiversity management and soil protection to CAP-supported measures. Funding and eligibility depend on the relevant Greek CAP Strategic Plan and calls.",
    "greekStatus": "Directly applicable EU Regulation. Greece implements the CAP through an approved national Strategic Plan and accompanying administrative measures.",
    "national": [
      {
        "title": "Greece CAP Strategic Plan 2023–2027 — Commission-approved 2022",
        "url": "https://agriculture.ec.europa.eu/cap-my-country/cap-strategic-plans/greece_en",
        "classification": "National implementation plan",
        "note": "Commission-approved strategic plan with national interventions; a plan, not a law transposing the Regulation."
      }
    ],
    "source": "European Commission — Greece CAP Strategic Plan",
    "sourceUrl": "https://agriculture.ec.europa.eu/cap-my-country/cap-strategic-plans/greece_en",
    "category": "Agriculture",
    "ref": "(EU) 2021/2115",
    "priority": "Agricultural restoration funding"
  },
  {
    "name": "Nature Restoration Regulation",
    "date": "2024-06-24",
    "type": "Regulation",
    "url": "https://eur-lex.europa.eu/eli/reg/2024/1991/oj/eng",
    "about": "Establishes an EU-wide framework of restoration targets and measures across specified ecosystems and requires Member States to prepare national restoration plans.",
    "restoration": "Highly relevant to the strategic context of habitat recovery and ecological monitoring. The Regulation does not automatically require restoration of every quarry; scope depends on covered ecosystems and national plans.",
    "greekStatus": "Directly applicable EU Regulation; Greece is developing national restoration planning. A national plan is not the same thing as transposing a Directive.",
    "national": [
      {
        "title": "Greece — National Restoration Plan preparation (2026)",
        "url": "https://ypen.gov.gr/perivallon/viopoikilotita/apokatastasi-tis-fysis/",
        "classification": "National implementation process",
        "note": "Greek Ministry is preparing the first National Restoration Plan. Public status and submitted version must be checked against current government publications."
      },
      {
        "title": "Law 3937/2011 — biodiversity conservation",
        "url": "https://ypen.gov.gr/perivallon/viopoikilotita/nomothesia/",
        "classification": "Related national law",
        "note": "Existing biodiversity law relevant to protected ecosystems; not transposition of the 2024 Regulation."
      }
    ],
    "source": "Greek Ministry of Environment — Nature Restoration and GSRI October 2026 update",
    "sourceUrl": "https://ypen.gov.gr/perivallon/viopoikilotita/apokatastasi-tis-fysis/",
    "category": "Biodiversity",
    "ref": "(EU) 2024/1991",
    "priority": "Core EU nature restoration policy"
  },
  {
    "name": "Soil Monitoring Directive",
    "date": "2025-11-12",
    "type": "Directive",
    "url": "https://eur-lex.europa.eu/eli/dir/2025/2360/oj/eng",
    "about": "Establishes a common framework for monitoring soil health and resilience and for identifying and managing contaminated sites.",
    "restoration": "Particularly relevant to soil indicators, degradation assessment, contamination and monitoring restored quarry soils. Implementation obligations should be assessed once Greek rules are adopted.",
    "greekStatus": "National transposition required by 17 December 2028. No Greek transposing act is included in this mapping; preparatory measures may exist and should be checked against official sources.",
    "national": [],
    "source": "EUR-Lex — Soil Monitoring Law and Article 26",
    "sourceUrl": "https://eur-lex.europa.eu/eli/dir/2025/2360/oj/eng",
    "category": "Soil",
    "ref": "(EU) 2025/2360",
    "priority": "New soil-health monitoring framework"
  },
  {
    "name": "2026 Water Quality Amendment",
    "date": "2026-03-30",
    "type": "Directive",
    "url": "https://eur-lex.europa.eu/eli/dir/2026/805/oj/eng",
    "ref": "(EU) 2026/805",
    "category": "Water",
    "priority": "New amendment — transposition pending",
    "about": "Amends the Water Framework, Groundwater and Environmental Quality Standards Directives, including updated pollutant quality standards and water monitoring arrangements.",
    "restoration": "Useful to anticipate revised water pollution assessment and monitoring obligations when restoration may affect surface water or groundwater.",
    "greekStatus": "Transposition deadline: 21 December 2027. No specific Greek transposition instrument is included in this mapping; check official sources for subsequent developments.",
    "national": [],
    "source": "EUR-Lex — Directive (EU) 2026/805, Article 4",
    "sourceUrl": "https://eur-lex.europa.eu/eli/dir/2026/805/oj/eng"
  }
];

const LAWS = RURBANIVE_LAWS;
const $ = (selector,scope=document) => scope.querySelector(selector);
const svgNS = 'http://www.w3.org/2000/svg';
const state = {search:'',type:'All',topic:'All'};
const filtered = () => LAWS.filter(law => {
  const haystack = [law.name,law.ref,law.category,law.about,law.greekStatus,...law.national.map(x=>x.title)].join(' ').toLocaleLowerCase();
  return (state.type==='All'||law.type===state.type)
     && (state.topic==='All'||law.category===state.topic)
     && haystack.includes(state.search.toLocaleLowerCase().trim());
});
function htmlEl(tag,classname,text){const e=document.createElement(tag);if(classname)e.className=classname;if(text!==undefined)e.textContent=text;return e}
function svgEl(tag,attributes={}){const e=document.createElementNS(svgNS,tag);for(const [key,value] of Object.entries(attributes))e.setAttribute(key,String(value));return e}
function anchor(title,url,cls=''){const a=htmlEl('a',cls,title);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a}
function prettyDate(date){const [y,m,d]=date.split('-');return `${Number(d)} ${new Date(`${y}-${m}-15T12:00:00`).toLocaleDateString('en-GB',{month:'long'})} ${y}`}

/* Filter controls: each law keeps a single authoritative record. */
$('#search-input').addEventListener('input', e => {state.search=e.target.value;render()});
$('#topic-select').addEventListener('change',e=>{state.topic=e.target.value;render()});
document.querySelectorAll('[data-type]').forEach(button => button.addEventListener('click',()=>{
  state.type=button.dataset.type;
  document.querySelectorAll('[data-type]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});
  render();
}));
function render(){const laws=filtered();$('#count').textContent=String(LAWS.length);$('#results-label').textContent=`${laws.length} of ${LAWS.length} legal acts`;$('#empty-message').hidden=laws.length>0;renderCards(laws);renderTimeline(laws)}
function renderCards(laws){const container=$('#law-grid');container.replaceChildren();for(const law of laws){
  const card=htmlEl('button','law-card');card.type='button';card.setAttribute('aria-label',`Read about ${law.name}`);
  const top=htmlEl('div','law-card-top');const tag=htmlEl('span','act-type '+law.type.toLowerCase(),law.type);top.append(tag,htmlEl('span','law-year',law.date.slice(0,4)));
  const name=htmlEl('h3','',law.name);const ref=htmlEl('p','',`${law.ref} · ${law.category}`);
  const bottom=htmlEl('div','card-bottom');bottom.append(htmlEl('span','',law.priority),htmlEl('span','','↗'));
  card.append(top,name,ref,bottom);card.addEventListener('click',()=>openLaw(law));container.append(card);
}}
function brokenLineText(label,max=19){
  const words=label.split(/\s+/);const result=[];let line='';
  for(const word of words){if(line && `${line} ${word}`.length>max){result.push(line);line=word}else{line=line?`${line} ${word}`:word}}
  if(line)result.push(line);return result;
}
function decimalYear(d){const date=new Date(d+'T12:00:00Z');const y=date.getUTCFullYear();return y+(date-Date.UTC(y,0,1))/(Date.UTC(y+1,0,1)-Date.UTC(y,0,1))}
function renderTimeline(laws){
  const root=$('#timeline');root.replaceChildren();
  const svg=svgEl('svg',{width:2230,height:550,viewBox:'0 0 2230 550',role:'img','aria-label':`EU environmental laws between 1992 and 2026. ${laws.length} entries are visible.`});
  const baseline=270;const xOf = law => 100+(decimalYear(law.date)-1991)*58;
  svg.append(svgEl('line',{x1:80,y1:baseline,x2:2210,y2:baseline,class:'axis-line'}));
  for(let yr=1992;yr<=2026;yr+=2){const x=100+(yr-1991)*58;svg.append(svgEl('line',{x1:x,x2:x,y1:baseline-5,y2:baseline+5,stroke:'#9fb5a5','stroke-width':1.5}));const t=svgEl('text',{x,y:baseline+23,'text-anchor':'middle',class:'axis-year'});t.textContent=yr;svg.append(t)}
  const taken={Directive:[[],[],[]],Regulation:[[],[],[]]};
  for(const law of laws){
    const x=xOf(law); const top=law.type==='Regulation';const ys=top?[83,145,207]:[350,412,475];
    const last=taken[law.type];let lane=last.findIndex(arr=>arr.every(p=>Math.abs(p-x)>168));if(lane===-1)lane=last.map(a=>a.length).indexOf(Math.min(...last.map(a=>a.length)));last[lane].push(x);
    const cy=ys[lane];
    svg.append(svgEl('line',{x1:x,x2:x,y1:baseline,y2:cy,class:'stem'}));
    const group=svgEl('g',{class:'timeline-node',role:'button',tabindex:'0','aria-label':`Read ${law.name} (${law.date.slice(0,4)})`});
    const title=svgEl('title');title.textContent=`${law.name} (${law.ref}). Select to see Greek measures and restoration relevance.`;group.append(title);
    const halo=svgEl('circle',{cx:x,cy,r:18,fill:'transparent'});group.append(halo);
    group.append(svgEl('circle',{cx:x,cy,r:8,class:'law-circle',fill:top?'#6e9dd0':'#e6c940'}));
    const lines=brokenLineText(law.name,23).slice(0,3);
    const lineHeight = 16;
    // Retain the original labels; raise only the two multi-line regulations
    // whose labels were touching their circles.
    const raiseLabel = law.name === 'CAP Strategic Plan Regulation'
      || law.name === 'Nature Restoration Regulation';
    const labelY = top
      ? (raiseLabel ? cy - 24 - (lines.length - 1) * lineHeight : cy - 15)
      : cy + 25;
    const text=svgEl('text',{x,y:labelY,'text-anchor':'middle',class:'marker-label'});
    lines.forEach((l,i)=>{const span=svgEl('tspan',{x,dy:i===0?0:lineHeight});span.textContent=l;text.append(span)});
    group.append(text);
    group.addEventListener('click',()=>openLaw(law));group.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLaw(law)}});
    svg.append(group);
  }
  root.append(svg);
}

/* Single, keyboard-accessible dialog for law details and legal explainer. */
const dialog=$('#law-dialog'),overlay=$('#dialog-overlay'),body=$('#dialog-body');let restoreFocus=null;
function section(number,heading,content){const section=htmlEl('section','detail-section');const h=htmlEl('h3');h.append(htmlEl('span','',number),document.createTextNode(heading));section.append(h,content);return section}
function paragraph(text,classname=''){return htmlEl('p',classname,text)}
function openBase(){restoreFocus=document.activeElement;dialog.hidden=false;overlay.hidden=false;document.body.classList.add('body-locked');$('#dialog-close').focus()}
function closeModal(){dialog.hidden=true;overlay.hidden=true;document.body.classList.remove('body-locked');restoreFocus?.focus?.()}
function openLaw(law){
  $('#dialog-eyebrow').textContent=`${law.category} / EU ${law.type}`;$('#dialog-title').textContent=law.name;$('#dialog-meta').textContent=`${law.ref}  ·  Adopted ${prettyDate(law.date)}`;
  body.replaceChildren();
  body.append(section('01','What does the EU law do?',paragraph(law.about)));
  const greek=htmlEl('div');greek.append(paragraph(law.greekStatus,'mapping-status'));
  if(law.national.length){for(const n of law.national){const card=htmlEl('div','national-law');card.append(htmlEl('span','mapping-kind',n.classification),anchor(n.title+' ↗',n.url),paragraph(n.note));greek.append(card)}}
  else greek.append(paragraph(law.type==='Regulation'?'This Regulation is directly applicable. No specific Greek measure is mapped here; do not infer that none exists.':'No specific Greek transposition act was verified for this entry at the research cut-off.','source-line'));
  const source=paragraph('Reference: ','source-line');source.append(anchor(law.source+' ↗',law.sourceUrl));greek.append(source);
  body.append(section('02','Greek national legislation & implementation',greek));
  body.append(section('03','Why is it relevant to ecosystem restoration?',paragraph(law.restoration)));
  const foot=htmlEl('div','dialog-footer');foot.append(anchor('Open EU law on EUR-Lex ↗',law.url,'button-link'),anchor('National/source reference ↗',law.sourceUrl,'button-link secondary'));
  body.append(foot);openBase();
}
function openExplainer(){
  $('#dialog-eyebrow').textContent='Understanding the EU legal framework';$('#dialog-title').textContent='Directives and Regulations';$('#dialog-meta').textContent='';body.replaceChildren();
  body.append(section('01','Directives',paragraph('Directives bind EU Member States to achieve specified results. Each Member State transposes them using its own national legal framework, which may include laws, decrees and ministerial decisions. National transposing measures may subsequently be amended.')));
  body.append(section('02','Regulations',paragraph('EU Regulations are directly applicable in all Member States. National authorities may still establish implementation plans, designate competent bodies, supervise compliance and set penalties. Such national measures are not transposition of the Regulation.')));
  body.append(section('03','Important labels',paragraph('“Transposition” refers to national measures implementing a Directive; “amendment” changes an existing act; “national implementation” supports an EU Regulation; and “related national law” or “plan” indicates thematic or policy connections without necessarily constituting formal transposition.')));
  const source=htmlEl('p','source-line','Reference: ');source.append(anchor('European Union — Types of legislation ↗','https://european-union.europa.eu/institutions-law-budget/law/types-legislation_en'));
  body.append(source);openBase();
}
$('#dialog-close').addEventListener('click',closeModal);overlay.addEventListener('click',closeModal);$('#explain-trigger').addEventListener('click',openExplainer);
document.addEventListener('keydown',e=>{
  if(dialog.hidden)return;
  if(e.key==='Escape'){e.preventDefault();closeModal()}
  else if(e.key==='Tab'){
    const els=[...dialog.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length>0);
    if(!els.length)return;const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
});

/* Original side-panel concept, with mouse-following blob on wide screens. */
const menu=$('#menu'),menuBtn=$('#menu-toggle'),blobPath=$('#blob-path');let expanded=false,targetY=500,smoothY=500;
function setMenu(open){expanded=open;menu.classList.toggle('expanded',open);menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Close navigation':'Open navigation')}
menuBtn.addEventListener('click',()=>setMenu(!expanded));menu.addEventListener('mouseenter',()=>{if(innerWidth>760)setMenu(true)});menu.addEventListener('mouseleave',()=>{if(innerWidth>760)setMenu(false)});
document.addEventListener('pointerdown',e=>{if(!menu.contains(e.target))setMenu(false)});
document.addEventListener('pointermove',e=>{targetY=Math.min(Math.max(e.clientY/window.innerHeight*1000,100),900)});
function updateBlob(){if(innerWidth>760){smoothY+=.13*(targetY-smoothY);let y=smoothY;blobPath.setAttribute('d',`M60,1000 H0 V0 H60 V${y-110} C60,${y-50} 24,${y-45} 20,${y} S60,${y+80} 60,${y+110} V1000 Z`);menuBtn.style.top=`${(y/1000)*innerHeight-21}px`;}else{menuBtn.style.removeProperty('top')};requestAnimationFrame(updateBlob)}updateBlob();
render();
