import{S as k,i as p,a as E}from"./assets/vendor-bad0427b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const b={base:"https://pixabay.com/api/",key:"41493530-c71176b83a18405cd33ba2537",image_type:"photo",orientation:"horizontal",safesearch:"true"};let m=1;const L=40,i=new URLSearchParams(b),w=b.base;i.set("page",m);i.set("per_page",L);function y(r,t){return`
    <div class="info-block">
      <p>${r}</p>
      <p>${t}</p>
    </div>
  `}function C({largeImageURL:r,webformatURL:t,tags:l,likes:a,views:e,comments:o,downloads:c}){return`
    <a href="${r}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${t}" alt="${l}" class="imgStyle" />
        <div class="infoStyle">
          ${y("Likes",a)}
          ${y("Views",e)}
          ${y("Comments",o)}
          ${y("Downloads",c)}
        </div>
      </div>
    </a>
  `}const q=new k(".lightbox-image",{captionsData:"alt",captionDelay:250});function $(r){const t=document.createElement("div");return t.className="gallery custom-gallery-style",r.appendChild(t),t}const x=document.querySelector(".container"),g={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"},d=document.querySelector(".gallery")||$(x),f=document.querySelector("form"),A=document.querySelector("input"),s=document.createElement("div");s.classList.add("loader-text");s.style.display="none";s.textContent="Loading images, please wait...";let n=document.querySelector(".load-more-btn");n||(n=document.createElement("button"),n.classList.add("load-more-btn"),n.textContent="Load more",n.style.display="none");const u=document.createElement("div");u.classList.add("btn-loader-container");u.appendChild(n);u.appendChild(s);f.insertAdjacentElement("afterend",u);let v=0,h=0;async function S(){try{s.style.display="block";const t=(await E.get(`${w}?${i}`)).data;v=t.totalHits,t.hits.length===0?p.warning(g):(n.style.display="block",t.hits.forEach(a=>{const e=C(a);d.insertAdjacentHTML("beforeend",e)}),d.insertAdjacentElement("afterend",u),d.classList.add("custom-gallery-style")),q.refresh(),s.style.display="none",h++;const l=document.querySelector(".image-card");if(l&&h>1){const a=l.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch(r){console.error("Error:",r),s.style.display="none",p.error({...g,message:"An error occurred. Please try again later."})}}f.addEventListener("submit",function(r){r.preventDefault(),d.innerHTML="",d.classList.remove("custom-gallery-style"),s.style.display="block",n.style.display="none",i.set("page",1);const t=A.value.trim();if(!t){s.style.display="none",p.warning({...g,message:"Please enter your search query!"});return}f.reset(),i.set("q",t),h=0,setTimeout(S,2e3)});n.addEventListener("click",function(){n.style.display="none",s.style.display="block",m++,i.set("page",m),setTimeout(S,2e3),m*L>=v&&(n.style.display="none",s.style.display="none",p.warning({...g,message:"We're sorry, but you've reached the end of search results."}))});
//# sourceMappingURL=commonHelpers.js.map
