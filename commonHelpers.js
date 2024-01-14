import{S as k,i as m,a as E}from"./assets/vendor-bad0427b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const b={base:"https://pixabay.com/api/",key:"41493530-c71176b83a18405cd33ba2537",image_type:"photo",orientation:"horizontal",safesearch:"true"};let y=1;const L=40,l=new URLSearchParams(b),w=b.base;l.set("page",y);l.set("per_page",L);function u(n,t){return`
    <div class="info-block">
      <p>${n}</p>
      <p>${t}</p>
    </div>
  `}function C({largeImageURL:n,webformatURL:t,tags:i,likes:a,views:e,comments:o,downloads:c}){return`
    <a href="${n}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${t}" alt="${i}" class="imgStyle" />
        <div class="infoStyle">
          ${u("Likes",a)}
          ${u("Views",e)}
          ${u("Comments",o)}
          ${u("Downloads",c)}
        </div>
      </div>
    </a>
  `}const q=new k(".lightbox-image",{captionsData:"alt",captionDelay:250});function $(n){const t=document.createElement("div");return t.className="gallery custom-gallery-style",n.appendChild(t),t}const x=document.querySelector(".container"),p={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"},g=document.querySelector(".gallery")||$(x),f=document.querySelector("form"),A=document.querySelector("input"),s=document.createElement("div");s.classList.add("loader-text");s.style.display="none";s.textContent="Loading images, please wait...";let r=document.querySelector(".load-more-btn");r||(r=document.createElement("button"),r.classList.add("load-more-btn"),r.textContent="Load more",r.style.display="none");const d=document.createElement("div");d.classList.add("btn-loader-container");d.appendChild(r);d.appendChild(s);f.insertAdjacentElement("afterend",d);let v=0,h=0;async function S(){try{s.style.display="block";const t=(await E.get(`${w}?${l}`)).data;v=t.totalHits,t.hits.length===0?m.warning(p):(r.style.display="block",t.hits.forEach(a=>{const e=C(a);g.insertAdjacentHTML("beforeend",e)}),g.insertAdjacentElement("afterend",d)),q.refresh(),s.style.display="none",h++;const i=document.querySelector(".image-card");if(i&&h>1){const a=i.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch(n){console.error("Error:",n),s.style.display="none",m.error({...p,message:"An error occurred. Please try again later."})}}f.addEventListener("submit",function(n){n.preventDefault(),g.innerHTML="",s.style.display="block",r.style.display="none",l.set("page",1);const t=A.value.trim();if(!t){s.style.display="none",m.warning({...p,message:"Please enter your search query!"});return}f.reset(),l.set("q",t),setTimeout(S,2e3)});r.addEventListener("click",function(){r.style.display="none",s.style.display="block",y++,l.set("page",y),setTimeout(S,2e3),y*L>=v&&(r.style.display="none",s.style.display="none",m.warning({...p,message:"We're sorry, but you've reached the end of search results."}))});
//# sourceMappingURL=commonHelpers.js.map
