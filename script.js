(()=>{
  const c=document.getElementById('c-canvas'),ctx=c.getContext('2d');
  let W,H,nodes=[],mx=-999,my=-999;
  const N=60,CD=155,MD=110;
  function rs(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight}
  window.addEventListener('resize',rs);rs();
  for(let i=0;i<N;i++) nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:Math.random()*1.8+1});
  c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
  c.addEventListener('mouseleave',()=>{mx=-999;my=-999});
  function draw(){
    ctx.clearRect(0,0,W,H);
    nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1});
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.hypot(dx,dy);
        if(d<CD){ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.strokeStyle=`rgba(0,212,170,${(1-d/CD)*.2})`;ctx.lineWidth=.8;ctx.stroke()}
      }
      const md=Math.hypot(nodes[i].x-mx,nodes[i].y-my);
      if(md<MD){ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(mx,my);ctx.strokeStyle=`rgba(0,212,170,${(1-md/MD)*.55})`;ctx.lineWidth=1.4;ctx.stroke()}
      const near=Math.hypot(nodes[i].x-mx,nodes[i].y-my)<MD;
      ctx.beginPath();ctx.arc(nodes[i].x,nodes[i].y,near?nodes[i].r+1.5:nodes[i].r,0,Math.PI*2);
      ctx.fillStyle=near?'rgba(0,212,170,.9)':'rgba(0,212,170,.4)';ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ════════════════════════════════════
   ALUMNI DATA
════════════════════════════════════ */
const DATA=[
  {id:1,init:'AK',col:'#00D4AA',name:'Arjun Krishnamurthy',role:'Software Engineer, Google',batch:'2021',dept:'B.Tech CSE',domain:'Tech',
   tags:['Web Dev','System Design','Open Source'],loc:'Bangalore, IN',
   bio:'Full-stack engineer building distributed systems at Google. Open source contributor with 3K+ GitHub stars. Passionate about engineering culture.',
   skills:['Go','Kubernetes','React','PostgreSQL','System Design'],
   tl:[{yr:'2023–Present',role:'SWE II',co:'Google, Hyderabad'},{yr:'2021–2023',role:'SWE I',co:'Flipkart'}]},
  {id:2,init:'PN',col:'#F5A623',name:'Priya Nair',role:'Product Manager, Microsoft',batch:'2019',dept:'B.Tech ECE',domain:'Tech',
   tags:['Product','AI/ML','Strategy'],loc:'Seattle, USA',
   bio:'Building AI-powered productivity tools at Microsoft. Previously ran growth at a Series B startup. Loves hiking and sci-fi.',
   skills:['Product Strategy','A/B Testing','Data Analytics','User Research','Roadmapping'],
   tl:[{yr:'2022–Present',role:'Senior PM',co:'Microsoft, Seattle'},{yr:'2019–2022',role:'PM',co:'ClearMind AI'}]},
  {id:3,init:'RS',col:'#60A5FA',name:'Rohan Sharma',role:'Founder & CEO, EduSpark',batch:'2018',dept:'B.Tech CSE',domain:'Startup',
   tags:['EdTech','Fundraising','Leadership'],loc:'Mumbai, IN',
   bio:'Built EduSpark from a dorm-room idea to a ₹200Cr edtech company. Forbes 30 Under 30. Angel investor in 6 startups.',
   skills:['Fundraising','Team Building','Go-To-Market','EdTech','B2C Growth'],
   tl:[{yr:'2019–Present',role:'Founder & CEO',co:'EduSpark'},{yr:'2018',role:'Intern',co:"Byju's"}]},
  {id:4,init:'AN',col:'#A855F7',name:'Aisha Nambiar',role:'PhD Researcher, MIT',batch:'2020',dept:'B.Tech CS',domain:'Research',
   tags:['NLP','Machine Learning','Research'],loc:'Boston, USA',
   bio:'Researching natural language understanding at MIT CSAIL. Published in ACL, EMNLP. TA for 6.864 Advanced NLP.',
   skills:['PyTorch','NLP','Transformers','Research Writing','Python'],
   tl:[{yr:'2021–Present',role:'PhD Student (CSAIL)',co:'MIT'},{yr:'2022',role:'Research Intern',co:'Google Research'}]},
  {id:5,init:'KP',col:'#FF6B6B',name:'Kiran Pillai',role:'Senior PM, Google',batch:'2019',dept:'B.Tech CS',domain:'Tech',
   tags:['Product','Cloud','Developer Tools'],loc:'Hyderabad, IN',
   bio:'Leading Maps Developer Platform at Google. Mentored 25+ students through ARC. Speaker at ProductSummit India 2024.',
   skills:['API Products','Developer Platforms','Metrics','SQL','Stakeholder Mgmt'],
   tl:[{yr:'2023–Present',role:'Senior PM',co:'Google'},{yr:'2021–2023',role:'PM',co:'Google'},{yr:'2019–2021',role:'APM',co:'Google'}]},
  {id:6,init:'SP',col:'#00D4AA',name:'Sneha Philip',role:'Founder, WaterFirst NGO',batch:'2016',dept:'B.Tech CE',domain:'Social',
   tags:['Social Impact','NGO','Sustainability'],loc:'Kerala, IN',
   bio:'Civil engineer turned social entrepreneur. WaterFirst has provided clean water to 80,000+ people. UN SDG Ambassador.',
   skills:['Community Engagement','Grant Writing','Sustainability','Project Management','Field Research'],
   tl:[{yr:'2019–Present',role:'Founder',co:'WaterFirst'},{yr:'2016–2019',role:'Civil Engineer',co:'L&T'}]},
  {id:7,init:'DM',col:'#F59E0B',name:'Dev Menon',role:'VP, Goldman Sachs',batch:'2017',dept:'MBA Finance',domain:'Finance',
   tags:['Finance','Investment Banking','Markets'],loc:'New York, USA',
   bio:'VP in Equity Capital Markets at Goldman Sachs NY. Closed $4B+ in transactions. Alumni advisor for IB placement cell.',
   skills:['M&A','Capital Markets','Valuation','Excel Modeling','Pitch Decks'],
   tl:[{yr:'2022–Present',role:'Vice President',co:'Goldman Sachs, NY'},{yr:'2019–2022',role:'Associate',co:'Goldman Sachs'},{yr:'2017–2019',role:'Analyst',co:'JPMorgan'}]},
  {id:8,init:'VK',col:'#EC4899',name:'Vishnu Krishnan',role:'Co-Founder, PixelForge Studio',batch:'2022',dept:'B.Tech CSE',domain:'Startup',
   tags:['Gaming','Unity','Startup'],loc:'Pune, IN',
   bio:'Built a mobile game studio from campus. PixelForge\'s debut game crossed 1M downloads. Spoke at GDC Asia 2024.',
   skills:['Unity','C#','Game Design','Mobile Ads','Team Leadership'],
   tl:[{yr:'2022–Present',role:'Co-Founder & CTO',co:'PixelForge Studio'},{yr:'2022',role:'Intern',co:'Ubisoft India'}]},
  {id:9,init:'MR',col:'#14B8A6',name:'Maya Ramachandran',role:'ML Engineer, Apple',batch:'2020',dept:'B.Tech AI',domain:'Tech',
   tags:['AI','CoreML','iOS','Privacy'],loc:'Cupertino, USA',
   bio:'Building on-device ML models for Siri and Camera. 4 patents filed. Passionate about AI privacy and model efficiency.',
   skills:['CoreML','Swift','Model Optimization','Privacy Engineering','TensorFlow Lite'],
   tl:[{yr:'2022–Present',role:'ML Engineer',co:'Apple, Cupertino'},{yr:'2021',role:'ML Intern',co:'Apple'}]},
  {id:10,init:'SK',col:'#3B82F6',name:'Siddharth Kumar',role:'Data Scientist, Netflix',batch:'2021',dept:'B.Tech Stats',domain:'Tech',
   tags:['Data Science','Recommendations','A/B Testing'],loc:'Los Angeles, USA',
   bio:'Recommendation systems at Netflix. Helped reduce subscriber churn 8% through better content prediction. Weekend woodworker.',
   skills:['Python','Spark','A/B Testing','RecSys','SQL'],
   tl:[{yr:'2023–Present',role:'Sr. Data Scientist',co:'Netflix'},{yr:'2021–2023',role:'Data Scientist',co:'Netflix'}]},
  {id:11,init:'LJ',col:'#EF4444',name:'Lakshmi Jayakumar',role:'UX Lead, Swiggy',batch:'2018',dept:'B.Des',domain:'Design',
   tags:['UX Design','Design Systems','Research'],loc:'Bangalore, IN',
   bio:'Leading design for Swiggy\'s consumer apps (25M+ users). Speaker at Interaction Design Summit. Mentor for 10+ students.',
   skills:['Figma','Design Systems','User Research','Prototyping','Design Strategy'],
   tl:[{yr:'2022–Present',role:'UX Lead',co:'Swiggy'},{yr:'2019–2022',role:'Senior UX Designer',co:'Ola'}]},
  {id:12,init:'AT',col:'#8B5CF6',name:'Aditi Thomas',role:'Cloud Architect, AWS',batch:'2017',dept:'B.Tech CSE',domain:'Tech',
   tags:['Cloud','DevOps','Architecture'],loc:'Dublin, Ireland',
   bio:'Solutions Architect at AWS EMEA helping Fortune 500 firms migrate to cloud. Holds 8 AWS certs. Loves trad music.',
   skills:['AWS','Terraform','Kubernetes','CI/CD','Solutions Architecture'],
   tl:[{yr:'2021–Present',role:'Senior Solutions Architect',co:'AWS EMEA, Dublin'},{yr:'2017–2021',role:'Cloud Engineer',co:'Accenture'}]},
  {id:13,init:'NP',col:'#F97316',name:'Nithya Pradeep',role:'Quantitative Researcher, Jane Street',batch:'2022',dept:'B.Tech Maths',domain:'Finance',
   tags:['Quant Finance','Algorithms','Trading'],loc:'London, UK',
   bio:'Quantitative researcher at Jane Street London. Algorithms that trade billions daily. Competitive programmer (Codeforces GM).',
   skills:['Python','C++','Statistics','Probability','Algorithmic Trading'],
   tl:[{yr:'2022–Present',role:'Quantitative Researcher',co:'Jane Street, London'}]},
  {id:14,init:'RJ',col:'#22D3EE',name:'Ravi Jaganathan',role:'Research Scientist, DeepMind',batch:'2019',dept:'B.Tech AI',domain:'Research',
   tags:['RL','AGI','Research'],loc:'London, UK',
   bio:'Working on reinforcement learning for scientific discovery at DeepMind. Co-author of 7 papers including a NeurIPS spotlight.',
   skills:['Reinforcement Learning','JAX','Python','Research Design','Science Communication'],
   tl:[{yr:'2021–Present',role:'Research Scientist',co:'DeepMind, London'},{yr:'2020–2021',role:'Research Engineer',co:'DeepMind'}]},
  {id:15,init:'SA',col:'#FB7185',name:'Sruti Aravind',role:'Principal Engineer, Stripe',batch:'2018',dept:'B.Tech CSE',domain:'Tech',
   tags:['Payments','Distributed Systems','Scale'],loc:'San Francisco, USA',
   bio:'Building Stripe\'s payment infrastructure serving millions of businesses. Author of Stripe\'s internal distributed systems playbook.',
   skills:['Ruby','Go','Distributed Systems','Payment Systems','Site Reliability'],
   tl:[{yr:'2023–Present',role:'Principal Engineer',co:'Stripe'},{yr:'2021–2023',role:'Staff Engineer',co:'Stripe'},{yr:'2018–2021',role:'Software Engineer',co:'Stripe'}]},
  {id:16,init:'VN',col:'#4ADE80',name:'Vivek Nair',role:'Director of Engineering, Razorpay',batch:'2017',dept:'B.Tech CSE',domain:'Tech',
   tags:['FinTech','Engineering Leadership','India Tech'],loc:'Bangalore, IN',
   bio:'Engineering Director at Razorpay managing 80+ engineers across 6 teams. Built Razorpay\'s core payment gateway from scratch.',
   skills:['Engineering Management','System Design','FinTech','Hiring','OKRs'],
   tl:[{yr:'2022–Present',role:'Director of Engineering',co:'Razorpay'},{yr:'2019–2022',role:'Engineering Manager',co:'Razorpay'},{yr:'2017–2019',role:'Software Engineer',co:'Amazon'}]}
];
const currentUser = DATA[0];
function getRecommendations(){

    return DATA.filter(alumni=>{

        return alumni.id!==currentUser.id &&

               alumni.domain===currentUser.domain;

    }).slice(0,3);

}
function renderRecommendations(){

    const list=document.getElementById("recommendList");

    const recs=getRecommendations();

    list.innerHTML="";

    recs.forEach(person=>{

        list.innerHTML+=`

        <div class="recommend-item">

            <div class="rec-info">

                <h4>${person.name}</h4>

                <p>${person.role}</p>

                <p>Batch ${person.batch}</p>

            </div>

            <button class="connect-btn">

                Connect

            </button>

        </div>

        `;

    });

}
let activeFilter='all', activeDomain='all', searchQ='', visibleCount=8;

function getFiltered(){
  return DATA.filter(a=>{
    const batchOk=activeFilter==='all'||a.batch===activeFilter;
    const domainOk=activeDomain==='all'||a.domain===activeDomain;
    const q=searchQ.toLowerCase();
    const qOk=!q||a.name.toLowerCase().includes(q)||a.role.toLowerCase().includes(q)||a.tags.join(' ').toLowerCase().includes(q)||a.loc.toLowerCase().includes(q);
    return batchOk&&domainOk&&qOk;
  });
}

function renderGrid(){
  const list=getFiltered();
  const grid=document.getElementById('alumniGrid');
  grid.innerHTML='';
  document.getElementById('resultMeta').innerHTML=`Showing <b>${Math.min(visibleCount,list.length)}</b> of <b>${list.length}</b> alumni`;
  if(!list.length){
    grid.innerHTML='<div class="empty-state"><span class="empty-icon">🔍</span><p>No alumni found for your search. Try adjusting your filters.</p></div>';
    document.getElementById('loadMoreBtn').style.display='none';
    return;
  }
  list.slice(0,visibleCount).forEach((a,i)=>{
    const card=document.createElement('div');
    card.className='alum-card';
    card.setAttribute('role','listitem');
    card.setAttribute('tabindex','0');
    card.setAttribute('aria-label',`${a.name}, ${a.role}`);
    card.style.transitionDelay=`${(i%4)*0.05}s`;
    card.innerHTML=`
      <div class="ac-avatar" style="background:${a.col}18;color:${a.col}" aria-hidden="true">${a.init}</div>
      <div class="ac-name">${a.name}</div>
      <div class="ac-role">${a.role}</div>
      <div class="ac-batch">${a.batch}</div>
      <div class="ac-tags">${a.tags.map(t=>`<span class="ac-tag">${t}</span>`).join('')}</div>`;
    card.onclick=()=>openProfile(a);
    card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProfile(a)}};
    grid.appendChild(card);
  });
  document.getElementById('loadMoreBtn').style.display=list.length>visibleCount?'flex':'none';
}

function searchAlumni(){
  searchQ=document.getElementById('s-input').value;
  document.getElementById('clearBtn').style.display=searchQ?'flex':'none';
  visibleCount=8;renderGrid();
}
function clearSearch(){
  document.getElementById('s-input').value='';searchQ='';
  document.getElementById('clearBtn').style.display='none';
  visibleCount=8;renderGrid();
}
function setFilter(f,el){
  activeFilter=f;
  document.querySelectorAll('[onclick^="setFilter"]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  el.classList.add('active');el.setAttribute('aria-pressed','true');
  visibleCount=8;renderGrid();
}
function setDomain(d,el){
  activeDomain=d;
  document.querySelectorAll('[onclick^="setDomain"]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  el.classList.add('active');el.setAttribute('aria-pressed','true');
  visibleCount=8;renderGrid();
}
function loadMore(){visibleCount+=4;renderGrid()}
renderGrid();
renderRecommendations();

/* ════════════════════════════════════
   PROFILE MODAL
════════════════════════════════════ */
function openProfile(a){
  const ov=document.getElementById('modal');
  document.getElementById('modal-av').textContent=a.init;
  document.getElementById('modal-av').style.cssText=`width:84px;height:84px;border-radius:50%;border:4px solid var(--white);position:absolute;bottom:-42px;left:2rem;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;background:${a.col}18;color:${a.col}`;
  document.getElementById('modal-head').style.background=`linear-gradient(135deg,#0B1628,${a.col}30)`;
  document.getElementById('modal-name-el').textContent=a.name;
  document.getElementById('modal-role').textContent=a.role;
  document.getElementById('modal-chips').innerHTML=`
    <span class="m-chip">📍 <b>${a.loc}</b></span>
    <span class="m-chip">🎓 <b>${a.dept} · ${a.batch}</b></span>
    <span class="m-chip">🌐 <b>${a.domain}</b></span>`;
  document.getElementById('modal-bio').textContent=a.bio;
  document.getElementById('modal-skills').innerHTML=a.skills.map(s=>`<span class="s-tag">${s}</span>`).join('');
  document.getElementById('modal-timeline').innerHTML=a.tl.map(t=>`<li><div class="tl-yr">${t.yr}</div><div class="tl-role">${t.role}</div><div class="tl-co">${t.co}</div></li>`).join('');
  document.getElementById('modal-actions').innerHTML=`
    <button class="ma-btn ma-primary" onclick="showToast('Message sent to ${a.name}! ✉️');closeModal()">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      Send Message
    </button>
    <button class="ma-btn ma-outline" onclick="showToast('Connected with ${a.name}! 🤝');closeModal()">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      Connect
    </button>
    <button class="ma-btn ma-outline" onclick="showToast('Mentorship request sent to ${a.name}! 🎓');closeModal()">🎓 Request Mentorship</button>`;
  ov.classList.add('open');
  document.body.style.overflow='hidden';
  ov.querySelector('.modal').focus();
}
function closeModal(){
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('modal').addEventListener('click',function(e){if(e.target===this)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

/* ════════════════════════════════════
   DARK MODE
════════════════════════════════════ */
function toggleDark(){
  const isDark=document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme',isDark?'light':'dark');
  const icon=isDark?'🌙':'☀️';
  document.getElementById('dm-fab').textContent=icon;
  document.querySelector('.nav-theme').textContent=icon;
  localStorage.setItem('arc-theme',isDark?'light':'dark');
}
// Persist preference
const saved=localStorage.getItem('arc-theme');
if(saved==='dark'){
  document.documentElement.setAttribute('data-theme','dark');
  document.getElementById('dm-fab').textContent='☀️';
  document.querySelector('.nav-theme').textContent='☀️';
}

/* ════════════════════════════════════
   MOBILE MENU
════════════════════════════════════ */
function toggleMenu(){
  const m=document.getElementById('mobileMenu');
  const h=document.getElementById('hamburger');
  const open=m.classList.toggle('open');
  h.classList.toggle('open',open);
  h.setAttribute('aria-expanded',open);
  document.body.style.overflow=open?'hidden':'';
}
function closeMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded','false');
  document.body.style.overflow='';
}

/* ════════════════════════════════════
   TOAST MICRO-INTERACTION
════════════════════════════════════ */
let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),2600);
}

/* ════════════════════════════════════
   SCROLL ANIMATIONS (Intersection Observer)
════════════════════════════════════ */
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>revealObserver.observe(el));

/* ════════════════════════════════════
   NAVBAR ACTIVE LINK ON SCROLL
════════════════════════════════════ */
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-link');
const navBar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navBar.classList.toggle('scrolled',window.scrollY>60);
  let curr='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-100)curr=s.id});
  navLinks.forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+curr);
  });
});

/* ════════════════════════════════════
   COUNTER ANIMATION
════════════════════════════════════ */
const counterObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    const el=e.target;
    const target=+el.dataset.target;
    const suffix=el.dataset.suffix;
    let start=0,step=target/70;
    const iv=setInterval(()=>{
      start=Math.min(start+step,target);
      const display=target>=1000?Math.floor(start/1000)+'K':Math.floor(start);
      el.innerHTML=display+'<b>'+suffix+'</b>';
      if(start>=target)clearInterval(iv);
    },18);
    counterObs.unobserve(el);
  });
},{threshold:0.8});
document.querySelectorAll('.stat-num[data-target]').forEach(el=>counterObs.observe(el));

/* ════════════════════════════════════
   SPOTS BAR ANIMATION
════════════════════════════════════ */
const barObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.spots-fill').forEach(f=>{
        const w=f.style.width;f.style.width='0';
        setTimeout(()=>f.style.width=w,100);
      });
      barObs.unobserve(e.target);
    }
  });
},{threshold:0.4});
document.querySelectorAll('.event-card').forEach(c=>barObs.observe(c));
const percent=82;

const circle=document.querySelector(".ring-fill");

const length=326;

circle.style.strokeDashoffset=
length-(percent/100)*length;


function getRecommendations(){

    return DATA
        .filter(a=>a.id!==currentUser.id)
        .map(a=>{

            let score=0;

            if(a.domain===currentUser.domain)
                score+=5;

            if(a.batch===currentUser.batch)
                score+=4;

            if(a.dept===currentUser.dept)
                score+=3;

            return {...a,score};

        })
        .sort((a,b)=>b.score-a.score)
        .slice(0,3);

}