const hearts = document.querySelectorAll(".favorite-icon");

hearts.forEach(function(btn) {
  btn.addEventListener("click",function() {
    if (btn.classList.contains("filled")) {
      btn.classList.remove("filled");
      btn.innerHTML = "&#9825";
    } else {
      btn.classList.add("filled");
      btn.innerHTML = "&#10084";
    }
  });
});