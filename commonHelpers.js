import{S as p,i as c}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f={base:"https://pixabay.com/api/",key:"41493530-c71176b83a18405cd33ba2537",image_type:"photo",orientation:"horizontal",safesearch:"true"},d=new URLSearchParams(f),g=f.base;function i(n,t){return`
    <div class="info-block">
      <p>${n}</p>
      <p>${t}</p>
    </div>
  `}function h({largeImageURL:n,webformatURL:t,tags:o,likes:s,views:e,comments:r,downloads:a}){return`
    <a href="${n}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${t}" alt="${o}" class="imgStyle" />
        <div class="infoStyle">
          ${i("Likes",s)}
          ${i("Views",e)}
          ${i("Comments",r)}
          ${i("Downloads",a)}
        </div>
      </div>
    </a>
  `}const b=new p(".lightbox-image",{captionsData:"alt",captionDelay:250});function S(n){const t=document.createElement("div");return t.className="gallery custom-gallery-style",n.appendChild(t),t}const v=document.querySelector(".container"),u={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"},m=document.querySelector(".gallery")||S(v),y=document.querySelector("form"),l=document.querySelector(".loader"),L=document.querySelector("input");y.addEventListener("submit",function(n){n.preventDefault(),m.innerHTML="",l.style.display="block";const t=L.value.trim();if(!t){l.style.display="none",c.warning({...u,message:"Please enter your search query!"});return}y.reset(),d.set("q",t),fetch(`${g}?${d}`).then(o=>o.json()).then(o=>{o.hits.length===0?c.warning(u):o.hits.forEach(s=>{const e=h(s);m.insertAdjacentHTML("beforeend",e)}),b.refresh(),l.style.display="none"}).catch(o=>{console.error("Error:",o),l.style.display="none",c.error({...u,message:"An error occurred. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
