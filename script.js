/* ===== EDIT HERE: phone number, services and prices ===== */
const PHONE='918712318019';
const S=[
 ['AC Service & Repair','₹499','Gas refilling, deep cleaning, installation, cooling issues and water leakage for split and window ACs.','<rect x="2" y="5" width="20" height="8" rx="2"/><path d="M6 17l-1 3M12 17v3M18 17l1 3"/>',0,'ac-pexels.jpg','Wall-mounted split air conditioner in a bright room'],
 ['Refrigerator Service','₹399','Not cooling, ice build-up, compressor noise and gas leak repairs for single and double door models.','<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 10h12M9 5v3M9 13v4"/>',0,'refrigerator.jpg','Mint-green refrigerator in a home kitchen'],
 ['Washing Machine Service','₹399','Top-load and front-load repairs: drum, drain, spin and error-code faults.','<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M8 6h2"/>',0,'washing-machine.jpg','Front-load washing machine in a laundry room'],
 ['Water Heater / Geyser Service','₹349','Geyser element, thermostat and leakage repair, plus safe installation.','<rect x="7" y="2" width="10" height="20" rx="4"/><circle cx="12" cy="9" r="2"/><path d="M10 15h4"/>',0,'water-heater.jpg','Wall-mounted electric water heater in a home'],
 ['Micro Oven Service','₹349','Heating, turntable, panel and magnetron faults for solo, grill and convection ovens.','<rect x="2" y="5" width="20" height="14" rx="2"/><rect x="5" y="8" width="10" height="8"/><path d="M18 9v.1M18 13v.1"/>',1,'microwave-pexels.jpg','Countertop microwave oven in a modern kitchen'],
 ['TV Service','₹399','LED and smart TV panel, power, sound and display troubleshooting.','<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',1,'tv.jpg','Flat-screen smart television in a living room'],
 ['Room Heater Service','₹299','Room heaters, oil-filled radiators and blowers checked and repaired before winter.','<path d="M6 3v18M10 3v18M14 3v18M18 3v18"/><rect x="3" y="6" width="18" height="10" rx="2"/>',1,'room-heater.jpg','Electric radiator heater warming a cozy room'],
 ['Chimney Service','₹599','Deep cleaning, motor and filter repair, and suction restoration for kitchen chimneys.','<path d="M4 15h16l-3-6H7zM10 9V3h4v6M8 15v5M16 15v5"/>',1,'chimney-pexels.jpg','Stainless-steel kitchen chimney above a stove']
];
const PAGES=[['index','Home'],['services','Services'],['about','About'],['process','How It Works'],['book','Book Service'],['contact','Contact']];

/* ===== icons ===== */
const st=p=>`<svg class="wi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const WA='<svg class="wi" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3C8.83 3 3 8.83 3 16c0 2.3.6 4.55 1.74 6.53L3 29l6.63-1.7A12.95 12.95 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.7c-2.03 0-4.02-.55-5.76-1.58l-.41-.25-3.93 1.01 1.05-3.83-.27-.43A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16 21.9 26.7 16 26.7zm5.87-8c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.11 1.31 3.32c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z"/></svg>';
const I={
 phone:'<path d="M22 17v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3l2 5-2 1a14 14 0 0 0 7 7l1-2z"/>',
 pin:'<path d="M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
 snow:'<path d="M12 2v20M4 7l16 10M20 7L4 17"/>',
 wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
 bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 check:'<path d="M5 12l5 5L20 7"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

/* ===== build the page ===== */
$('#t-map').innerHTML=st(I.pin)+'Kurnool &amp; nearby places';
$('#t-ph').innerHTML=st(I.phone)+'8712318019';
$('#t-wa').innerHTML=WA+'WhatsApp us';
$('#navlist').innerHTML=PAGES.map(([k,v])=>`<li><a href="#${k}">${v}</a></li>`).join('');
$('#flist').innerHTML=PAGES.map(([k,v])=>`<li><a href="#${k}">${v}</a></li>`).join('');
$$('.call').forEach(a=>a.innerHTML=st(I.phone)+'Call 8712318019');
$$('.wab').forEach(a=>a.innerHTML=WA+a.textContent);
$('#send').innerHTML=WA+'Send on WhatsApp';
$('#c-wa').innerHTML=WA;
$$('[data-i]').forEach(e=>e.insertAdjacentHTML(e.classList.contains('chip')?'afterbegin':'beforeend',e.classList.contains('chip')?st(I[e.dataset.i]):`<svg viewBox="0 0 24 24">${I[e.dataset.i]}</svg>`));
$$('.cards').forEach(c=>c.innerHTML=S.map(s=>`<div class="card service-card rv"><div class="service-image"><img class="service-photo" src="${s[5]}" alt="${s[6]}" loading="lazy" decoding="async"></div><div class="service-content"><h3>${s[0]}</h3><div class="price">From <b>${s[1]}</b></div><p>${s[2]}</p><a class="more" href="#book" data-service="${s[0]}">Book now →</a></div></div>`).join(''));
$('#details').innerHTML=S.map(s=>`<details><summary>${s[0]}</summary><p>${s[2]} Message us on WhatsApp with a photo or video of the fault and we will guide you.</p></details>`).join('');
$('#prices').innerHTML=S.map(s=>`<div class="prow"><span>${s[0]}</span><b>From ${s[1]}</b></div>`).join('');
$('#opts').innerHTML=S.map(s=>`<option>${s[0]}</option>`).join('');
$$('.cards .more').forEach(a=>a.addEventListener('click',()=>{$('#opts').value=a.dataset.service}));
$('#pills').innerHTML=S.map(s=>`<span>${s[0].replace(' Service','').replace(' & Repair','')}</span>`).join('');
$$('.slot').forEach(b=>b.innerHTML=`<div><h2>Appliance acting up?</h2><p class="mut">Call or message us. We will come to your home in Kurnool.</p></div><div class="cta"><a class="btn b1" href="tel:+${PHONE}">${st(I.phone)}Call 8712318019</a><a class="btn b3" href="https://wa.me/${PHONE}">${WA}WhatsApp us</a></div>`);
$('#float').innerHTML=`<a class="wa" href="https://wa.me/${PHONE}" aria-label="WhatsApp">${WA}</a><a class="ph" href="tel:+${PHONE}" aria-label="Call">${st(I.phone)}</a>`;

/* ===== menu, reveal, router, booking form ===== */
const burger=$('.burger'),nav=$('nav');
burger.addEventListener('click',()=>burger.setAttribute('aria-expanded',nav.classList.toggle('open')));
['phone','pincode'].forEach(name=>{
 const field=$(`#book [name="${name}"]`);
 field.addEventListener('input',()=>{field.value=field.value.replace(/\D/g,'').slice(0,name==='phone'?10:6)});
});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
function route(){
 let k=(location.hash||'#index').slice(1);
 if(!$('#p-'+k))k='index';
 $$('.pg').forEach(p=>p.hidden=p.id!=='p-'+k);
 $$('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+k));
 nav.classList.remove('open');
 window.scrollTo(0,0);
 $$('.pg:not([hidden]) .rv').forEach(e=>{e.classList.remove('in');io.observe(e)});
 document.title=(PAGES.find(p=>p[0]===k)[1])+' | KMCS Climate Solutions';
}
addEventListener('hashchange',route);route();
$('#book').addEventListener('submit',e=>{
 e.preventDefault();
 const d=new FormData(e.target);
 const m=`Hello KMCS Climate Solutions,\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nService: ${d.get('service')}\nArea: ${d.get('area')}\nPincode: ${d.get('pincode')}\nIssue: ${d.get('msg')}`;
 window.open(`https://wa.me/${PHONE}?text=`+encodeURIComponent(m),'_blank');
});