import{a as v,S as b,i as a}from"./assets/vendor-B5nsgUv9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const S="https://pixabay.com/api/",P="54663949-13f76c0603320688597afb8b9",R=15;async function p(r,s=1){return(await v.get(S,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:R}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader-spinner"),h=document.querySelector(".load-more"),q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const s=r.map(e=>`
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
`).join("");f.insertAdjacentHTML("beforeend",s),q.refresh()}function M(){f.innerHTML=""}function y(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}function w(){h.classList.remove("is-hidden")}function l(){h.classList.add("is-hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let i=1,u="",d=0;B.addEventListener("submit",async r=>{r.preventDefault();const s=r.currentTarget.elements["search-text"].value.trim();if(!s){a.warning({message:"Please fill in the search field!",position:"topRight"});return}u=s,i=1,M(),l(),y();try{const e=await p(u,i);if(d=e.totalHits,e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits);const n=Math.ceil(d/15);i>=n?(l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w()}catch{a.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{L()}});$.addEventListener("click",async()=>{i+=1,y(),l();try{const r=await p(u,i);g(r.hits);const s=Math.ceil(d/15);if(i>=s){l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}w();const e=document.querySelector(".gallery-item");if(e){const{height:n}=e.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}}catch{a.error({message:"Something went wrong.",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
