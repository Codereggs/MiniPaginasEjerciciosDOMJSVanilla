export default function scrollTop(scrollBtn) {
  const d = document,
    $scrollBtn = d.querySelector(scrollBtn);

  d.addEventListener("scroll", (e) => {
    if (window.scrollY > 500) {
      $scrollBtn.classList.add("show");
    } else {
      $scrollBtn.classList.remove("show");
    }
  });

  d.addEventListener("click", (e) => {
    //console.log(e.target);
    if (e.target === $scrollBtn){
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
}
