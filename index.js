import{a as v,S as b,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const S="https://pixabay.com/api/",P="54663949-13f76c0603320688597afb8b9",q=15;async function p(r,o=1){return(await v.get(S,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:q}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader-spinner"),h=document.querySelector(".load-more"),R=new b(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const o=r.map(e=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item">
      <span class="info-title">Likes</span>
      <span class="info-value">${e.likes}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Views</span>
      <span class="info-value">${e.views}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Comments</span>
      <span class="info-value">${e.comments}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Downloads</span>
      <span class="info-value">${e.downloads}</span>
    </p>
  </div>
</li>
`).join("");f.insertAdjacentHTML("beforeend",o),R.refresh()}function B(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function w(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more");let a=1,c="",d=0;M.addEventListener("submit",async r=>{r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(!o){n.warning({message:"Please fill in the search field!",position:"topRight"});return}c=o,a=1,B(),l(),y();try{const e=await p(c,a);if(d=e.totalHits,e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),d>15&&w()}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{L()}});$.addEventListener("click",async()=>{a+=1,y(),l();try{const r=await p(c,a);g(r.hits);const o=Math.ceil(d/15);a>=o?(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w();const{height:e}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong.",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
