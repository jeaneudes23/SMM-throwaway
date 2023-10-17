document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-toggle").previousElementSibling.classList.add("show");
  document.querySelector("body").classList.add("snip");
  document.querySelector(".nav-toggle").classList.add("show");
});

document.addEventListener("click", (event) => {
  if (document.querySelector("body").classList.contains("snip")) {
    if (event.target === document.querySelector(".nav-menu")) {
      document.querySelector(".nav-menu").classList.remove("show");
      document.querySelector("body").classList.remove("snip");
      document.querySelector(".nav-toggle").classList.remove("show");
    }
  }

});


/* Admin */
document.querySelector('[data-show-admin-panel]').addEventListener('click',()=>{
  document.querySelector("body").classList.add("snip");
  document.querySelector('.admin-login-form').classList.add('show')
  history.pushState(null, null, '/admin');
    
})
document.querySelector('[data-hide-admin-panel]').addEventListener('click',()=>{
  document.querySelector("body").classList.remove("snip");
  document.querySelector('.admin-login-form').classList.remove('show')
  history.back();
    
})



/* Hide Nav On Scroll */
// let prevScrollPos = window.pageYOffset;

// function handleScroll() {
//   const currentScrollPos = window.pageYOffset;
//   const scrollUp = currentScrollPos < prevScrollPos;

//   if (scrollUp) {
//     document.querySelector("nav").style.top = '0'; 
//   } else {
//     document.querySelector("nav").style.top = '-70px'; 
//   }
//   prevScrollPos = currentScrollPos;
// }

// function throttle(callback, delay) {
//   let previousCall = 0;
//   return function(...args) {
//     const now = new Date().getTime();
//     if (now - previousCall >= delay) {
//       previousCall = now;
//       callback(...args);
//     }
//   };
// }
// const throttledScrollHandler = throttle(handleScroll, 200);
// window.addEventListener('scroll', throttledScrollHandler);

