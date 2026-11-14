let lang="en";
try{lang=localStorage.getItem("l")||"en"}catch(e){}
if(!U[lang])lang="en";
const app=document.getElementById("app"),lg=document.getElementById("lg");

const ICON='<svg viewBox="-3 -3 52 40" fill="none" stroke-width="5" stroke-linecap="round"><path d="M4 33V19a19 19 0 0 1 38 0v14" stroke="#3a86ff"/><path d="M13 33V21a10 10 0 0 1 20 0v12" stroke="#7bbcff"/><path d="M19 33V24a4 4 0 0 1 8 0v9" stroke="#a9a6ff"/></svg>';
function node(label,depth,kids,o){
  const cls=depth?(depth==1?"d1":kids.length?"d2":"d3"):"d0";
  const a=o.b==null?`<span class="bx ${cls}">${label}</span>`:`<a class="bx ${cls}" href="${K[o.b]}.html${o.s>0?"#s"+o.s:""}" title="${o.f||""}">${label}</a>`;
  return `<div class="nd${o.cl?" cl":""}" data-dp="${depth}"><div class="hd" style="--d:${(depth*.15+(o.i||0)*.035).toFixed(2)}s">${a}${kids.length?'<button class="tg" aria-label="+/-"></button>':""}</div>${kids.length?`<div class="ks k${depth}">${kids.join("")}</div>`:""}</div>`;
}
function mapHTML(){
  const D=L[lang];
  return node(ICON+U[lang].root,0,D.map((p,b)=>{
    let i=0;
    const lf=(r,s,d)=>node(`${r[0]}: ${r[1]}`,d,[],{b,s,i:i++,f:r[1]});
    const kids=(b==1||b==2)?p.s.flatMap((s,si)=>s.i.map(r=>lf(r,si,2))):p.s.map((s,si)=>node(s.t,2,s.i.map(r=>lf(r,si,3)),{b,s:si,i:si,cl:b==3}));
    return node(p.t,1,kids,{b,s:0,i:b});
  }),{});
}
function lines(){
  const m=document.querySelector(".mapin");
  if(!m)return;
  const r=m.getBoundingClientRect();
  let h="";
  m.querySelectorAll(".nd").forEach(n=>{
    const ks=n.children[1];
    if(!ks||!n.offsetWidth||n.classList.contains("cl"))return;
    const a=n.children[0].getBoundingClientRect(),dp=+n.dataset.dp;
    [...ks.children].forEach((k,i)=>{
      const c=k.children[0].getBoundingClientRect(),rt=c.left>a.left;
      const x1=(rt?a.right:a.left)-r.left,x2=(rt?c.left:c.right)-r.left;
      const y1=a.top+a.height/2-r.top,y2=c.top+c.height/2-r.top,mx=(x1+x2)/2;
      h+=`<path class="c${Math.min(dp,2)}" pathLength="1" style="--d:${(dp*.15+.3+i*.03).toFixed(2)}s;${dp?"":"stroke:"+["#4a8cff","#3f9ad0","#3a9a9a","#3f9d7a","#34a853"][i]}" d="M${x1} ${y1}C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}"/>`;
    });
  });
  m.querySelector("svg").innerHTML=h;
}
function page(p,i){
  const u=U[lang],A=u.d=="rtl"?["→","←"]:["←","→"],D=L[lang];
  const row=r=>`<div class="row"><b>${r[0]}${r[2]?` <span class="en">${r[2]}</span>`:""}</b><p>${r[1]}</p></div>`;
  return `<div class="pg"><a class="back" href="index.html">${A[0]} ${u.back}</a><div><span class="ph">${p.t}</span></div><p class="intro">${p.intro}</p>${p.s.map((s,j)=>`<section id="s${j}" style="--i:${j}"><h2>${s.t}</h2>${s.i.map(row).join("")}</section>`).join("")}<nav class="nav">${i>0?`<a class="btn" href="${K[i-1]}.html">${A[0]} ${D[i-1].t}</a>`:"<span></span>"}${i<K.length-1?`<a class="btn" href="${K[i+1]}.html">${D[i+1].t} ${A[1]}</a>`:"<span></span>"}</nav></div>`;
}
function route(){
  const i=K.indexOf(window.PAGE),u=U[lang],h=document.documentElement;
  h.lang=lang;h.dir=u.d;
  lg.innerHTML=["ar","en","fr"].map(l=>`<button data-l="${l}"${l==lang?' class="on"':""}>${l.toUpperCase()}</button>`).join("");
  app.innerHTML=i<0?`<p class="hint">${u.hint}</p><div id="map"><div class="mapin">${mapHTML()}<svg class="ln"></svg></div></div>`:page(L[lang][i],i);
  document.title=i<0?u.root:L[lang][i].t;
  if(i<0){requestAnimationFrame(lines);if(document.fonts)document.fonts.ready.then(lines);}
  const el=i>=0&&location.hash?document.getElementById(location.hash.slice(1)):null;
  if(el)el.scrollIntoView({behavior:"smooth",block:"start"});else window.scrollTo(0,0);
}
lg.addEventListener("click",e=>{
  const b=e.target.closest("button");
  if(!b)return;
  lang=b.dataset.l;
  try{localStorage.setItem("l",lang)}catch(x){}
  route();
});
app.addEventListener("click",e=>{
  const t=e.target.closest(".tg");
  if(t){t.closest(".nd").classList.toggle("cl");requestAnimationFrame(lines);return;}
});
addEventListener("resize",lines);
route();
