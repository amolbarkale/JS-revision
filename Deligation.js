document.querySelector("#category").addEventListener("click", (e) => {
  console.log("#category:", e.target);
  window.location.href = "/" + e.target.id;
});
