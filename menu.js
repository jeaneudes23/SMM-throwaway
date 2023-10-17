const MenuItems = document.querySelectorAll(".menu-item");
const imgOverlay = document.createElement("div");
imgOverlay.classList.add("img-overlay");
imgOverlay.innerHTML = `<div style="text-align:center; color: white;margin-bottom: 1rem">Close outside the Image to exit</div><img src="" alt="">`;
document.querySelector("[data-show-categories]").addEventListener("click", () => {
    document
      .querySelector("[data-show-categories]")
      .nextElementSibling.classList.add("show");
  });
document.querySelectorAll("[data-filter]").forEach((filter) => {
  filter.addEventListener("click", () => {
    document.querySelector(
      "[data-shown-category]"
    ).innerText = `"${filter.innerText}"`;
    console.log(MenuItems)
    if(filter.innerText === 'All'){
      MenuItems.forEach(item =>{
        item.classList.remove('hidden')
      })
    }
    else{
      MenuItems.forEach(item => {    
        if (item.querySelector('.item-category').innerText.trim() === filter.innerText.trim())
        {
          item.classList.remove('hidden')
        }
        else{
          item.classList.add('hidden')
        }
          
      });
    }
   
  });
});
// document.querySelectorAll("[data-filter]").forEach((filterToggle) => {
//   filterToggle.addEventListener("click", () => {
//     const menuItems = allMenuItems.querySelectorAll(".menu-item");
//     document.querySelector(
//       "[data-shown-category]"
//     ).innerText = `"${filterToggle.innerText}"`;
//     menuItems.forEach((menuItem) => {
//       menuItem.style.display = "flex";
//       if (filterToggle.innerText === "All") {
//         return;
//       } else {
//         if (
//           menuItem.querySelector(".item-category").innerText !==
//           filterToggle.innerText
//         ) {
//           menuItem.style.display = "none";
//         }
//       }
//     });
//   });
// });

document.querySelectorAll("[data-show-item]").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    document.querySelector("body").classList.add("snip");
    imgOverlay.querySelector("img").src = toggle.closest(".menu-item").querySelector("img").src;
    document.querySelector(".container").prepend(imgOverlay);
  });
});
document.addEventListener("click", (event) => {
  if (event.target === imgOverlay) {
    imgOverlay.remove();
    document.querySelector("body").classList.remove("snip");
  }
  if (document.querySelector(".categories-list").classList.contains("show")) {
    if (event.target !== document.querySelector("[data-show-categories]")) {
      document.querySelector(".categories-list").classList.remove("show");
    }
  }
});