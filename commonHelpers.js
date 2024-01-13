import{S as m,i as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d={base:"https://pixabay.com/api/",key:"41493530-c71176b83a18405cd33ba2537",image_type:"photo",orientation:"horizontal",safesearch:"true"},l=new URLSearchParams(d),y=`${d.base}?${l}`;function i(o,r){return`
    <div class="info-block">
      <p>${o}</p>
      <p>${r}</p>
    </div>
  `}function f({largeImageURL:o,webformatURL:r,tags:n,likes:a,views:e,comments:t,downloads:s}){return`
    <a href="${o}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${r}" alt="${n}" class="imgStyle" />
        <div class="infoStyle">
          ${i("Likes",a)}
          ${i("Views",e)}
          ${i("Comments",t)}
          ${i("Downloads",s)}
        </div>
      </div>
    </a>
  `}const p=new m(".lightbox-image",{captionsData:"alt",captionDelay:250});function g(o){const r=document.createElement("div");return r.className="gallery custom-gallery-style",o.appendChild(r),r}const h=document.querySelector(".container"),u={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"};document.querySelector("form").addEventListener("submit",function(o){o.preventDefault();const r=document.querySelector(".gallery")||g(h);r.innerHTML="";const n=document.querySelector(".loader");n.style.display="block";const a=document.querySelector("input").value;l.set("q",a),fetch(`${y}?${l.toString()}`).then(e=>e.json()).then(e=>{e.hits.length===0?c.warning(u):e.hits.forEach(t=>{const s=f(t);r.insertAdjacentHTML("beforeend",s)}),document.querySelector("form").reset(),p.refresh(),n.style.display="none"}).catch(e=>{console.error("Error:",e),n.style.display="none",c.error({...u,message:"An error occurred. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
