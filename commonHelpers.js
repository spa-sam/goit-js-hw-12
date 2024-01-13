import{S as p,i as l,a as g}from"./assets/vendor-bad0427b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m={base:"https://pixabay.com/api/",key:"41493530-c71176b83a18405cd33ba2537",image_type:"photo",orientation:"horizontal",safesearch:"true"},y=new URLSearchParams(m),h=m.base;function i(o,e){return`
    <div class="info-block">
      <p>${o}</p>
      <p>${e}</p>
    </div>
  `}function b({largeImageURL:o,webformatURL:e,tags:s,likes:n,views:t,comments:r,downloads:a}){return`
    <a href="${o}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${e}" alt="${s}" class="imgStyle" />
        <div class="infoStyle">
          ${i("Likes",n)}
          ${i("Views",t)}
          ${i("Comments",r)}
          ${i("Downloads",a)}
        </div>
      </div>
    </a>
  `}const S=new p(".lightbox-image",{captionsData:"alt",captionDelay:250});function v(o){const e=document.createElement("div");return e.className="gallery custom-gallery-style",o.appendChild(e),e}const L=document.querySelector(".container"),u={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"},f=document.querySelector(".gallery")||v(L),d=document.querySelector("form"),c=document.querySelector(".loader"),$=document.querySelector("input");async function k(){try{const e=(await g.get(`${h}?${y}`)).data;e.hits.length===0?l.warning(u):e.hits.forEach(s=>{const n=b(s);f.insertAdjacentHTML("beforeend",n)}),S.refresh(),c.style.display="none"}catch(o){console.error("Error:",o),c.style.display="none",l.error({...u,message:"An error occurred. Please try again later."})}}d.addEventListener("submit",function(o){o.preventDefault(),f.innerHTML="",c.style.display="block";const e=$.value.trim();if(!e){c.style.display="none",l.warning({...u,message:"Please enter your search query!"});return}d.reset(),y.set("q",e),k()});
//# sourceMappingURL=commonHelpers.js.map
