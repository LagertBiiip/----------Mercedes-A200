(()=>{"use strict";const e=e=>{const t=document.querySelector(e);t.addEventListener("submit",(e=>{e.preventDefault();let s={};for(let{name:e,value:c}of t.elements)e&&(s[e]=c);fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s)}).then((e=>{if(200===e.status||201===e.status)return e.json();throw new Error(e.status)})).then((e=>{alert("Данные успешно сохранены!"),t.reset()})).catch((e=>{alert("Произошла ошбика, статус "+e.message)}))}))};(()=>{const e=document.querySelectorAll("[data-tabs-handler]"),t=document.querySelectorAll("[data-tabs-field]");for(let s of e)s.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("design-list__item_active"))),s.classList.add("design-list__item_active"),t.forEach((e=>{e.dataset.tabsField==s.dataset.tabsHandler?e.classList.remove("hidden"):e.classList.add("hidden")}))}))})(),[...document.querySelectorAll(".menu-list__link"),document.querySelector(".main__scroll"),document.querySelector(".main__button")].forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),e(".form-test-drive"),e(".modal__form"),(()=>{const e=document.querySelectorAll(".more"),t=document.querySelector(".modal");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.remove("hidden")}))})),t.addEventListener("click",(e=>{const s=e.target;(s.classList.contains("overlay")||s.classList.contains("modal__close"))&&t.classList.add("hidden")}))})(),(()=>{const e=document.querySelector(".humburger-menu"),t=document.querySelector(".menu");e.addEventListener("click",(()=>(t.classList.toggle("menu-active"),void e.classList.toggle("humburger-menu-active"))))})(),(()=>{const e=document.querySelectorAll(".feature__link"),t=document.querySelectorAll(".feature-sub");e.forEach(((e,s)=>{e.addEventListener("click",(()=>{e.classList.toggle("feature__link_active"),t[s].classList.toggle("hidden")}))}))})()})();