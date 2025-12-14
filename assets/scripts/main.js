function lightboxMain() {
  const $lightbox = document.querySelector(".lightbox");
  const $lightboxImg = document.querySelector(".lightbox-img");
  const $backdrop = document.querySelector(".lightbox-backdrop");

  document.querySelectorAll(".lightbox-trigger").forEach($img => {
    $img.addEventListener("click", () => {
      const fullSrc = $img.dataset.full || $img.src;
      $lightboxImg.src = fullSrc;
      $lightbox.classList.remove("hidden");
    });
  });

  $backdrop.addEventListener("click", () => {
    $lightbox.classList.add("hidden");
    $lightboxImg.src = "";
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !$lightbox.classList.contains("hidden")) {
      $lightbox.classList.add("hidden");
      $lightboxImg.src = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", lightboxMain);
