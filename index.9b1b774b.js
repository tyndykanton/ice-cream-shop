(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 1200px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),$(".nav-list__link").click((function(){$(".menu-wrap").removeClass("is-open")}));const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));(()=>{const e={openTextOneBtn:document.querySelector(".btn-cream"),closeTextOneBtn:document.querySelector(".btn-cream"),textOne:document.querySelector(".text-btn-cream")};e.openTextOneBtn.addEventListener("click",(function(){e.textOne.classList.toggle("is-hidden"),e.closeTextOneBtn.classList.toggle("active__cream")}))})(),(()=>{const e={openTextTwoBtn:document.querySelector(".btn-coffee"),closeTextTwoBtn:document.querySelector(".btn-coffee"),textTwo:document.querySelector(".text-btn-coffee")};e.openTextTwoBtn.addEventListener("click",(function(){e.textTwo.classList.toggle("is-hidden"),e.closeTextTwoBtn.classList.toggle("active__coffee")}))})(),(()=>{const e={openTextThreeBtn:document.querySelector(".btn-milkshakes"),closeTextThreeBtn:document.querySelector(".btn-milkshakes"),textThree:document.querySelector(".text-btn-milkshakes")};e.openTextThreeBtn.addEventListener("click",(function(){e.textThree.classList.toggle("is-hidden"),e.closeTextThreeBtn.classList.toggle("active__milkshakes")}))})(),window.onscroll=function(){window.pageYOffset>o?t.classList.add("sticky"):t.classList.remove("sticky")};var t=document.getElementById("home"),o=t.offsetTop;(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("backdrop--is-hidden"),document.body.classList.toggle("modal-open")}console.log(e.openModalBtn),e.openModalBtn.forEach((function(e){e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.9b1b774b.js.map