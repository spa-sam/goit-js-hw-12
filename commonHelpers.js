import{S as L,i as m,a as S}from"./assets/vendor-bad0427b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();const h={base:"https://pixabay.com/api/",key:"41493530-c71176b83a18405cd33ba2537",image_type:"photo",orientation:"horizontal",safesearch:"true"};let p=1;const v=40,i=new URLSearchParams(h),k=h.base;i.set("page",p);i.set("per_page",v);function u(o,e){return`
    <div class="info-block">
      <p>${o}</p>
      <p>${e}</p>
    </div>
  `}function E({largeImageURL:o,webformatURL:e,tags:l,likes:s,views:t,comments:n,downloads:c}){return`
    <a href="${o}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${e}" alt="${l}" class="imgStyle" />
        <div class="infoStyle">
          ${u("Likes",s)}
          ${u("Views",t)}
          ${u("Comments",n)}
          ${u("Downloads",c)}
        </div>
      </div>
    </a>
  `}const $=new L(".lightbox-image",{captionsData:"alt",captionDelay:250});function x(o){const e=document.createElement("div");return e.className="gallery custom-gallery-style",o.appendChild(e),e}const C=document.querySelector(".container"),y={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"},f=document.querySelector(".gallery")||x(C),g=document.querySelector("form"),q=document.querySelector("input"),a=document.createElement("div");a.classList.add("loader-text");a.style.display="none";a.textContent="Loading images, please wait...";let r=document.querySelector(".load-more-btn");r||(r=document.createElement("button"),r.classList.add("load-more-btn"),r.textContent="Load more",r.style.display="none");const d=document.createElement("div");d.classList.add("btn-loader-container");d.appendChild(r);d.appendChild(a);g.insertAdjacentElement("afterend",d);async function b(){try{a.style.display="block";const e=(await S.get(`${k}?${i}`)).data;e.hits.length===0?m.warning(y):(r.style.display="block",e.hits.forEach(l=>{const s=E(l);f.insertAdjacentHTML("beforeend",s)}),f.insertAdjacentElement("afterend",d)),$.refresh(),a.style.display="none"}catch(o){console.error("Error:",o),a.style.display="none",m.error({...y,message:"An error occurred. Please try again later."})}}g.addEventListener("submit",function(o){o.preventDefault(),f.innerHTML="",a.style.display="block",r.style.display="none",i.set("page",1);const e=q.value.trim();if(!e){a.style.display="none",m.warning({...y,message:"Please enter your search query!"});return}g.reset(),i.set("q",e),setTimeout(b,2e3)});r.addEventListener("click",function(){r.style.display="none",a.style.display="block",p++,i.set("page",p),setTimeout(b,2e3)});
//# sourceMappingURL=commonHelpers.js.map
