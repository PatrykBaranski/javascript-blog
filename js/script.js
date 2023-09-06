// document.querySelector("#test-button").addEventListener("click", () => {
//   const links = document.querySelectorAll(".titles a");
//   console.log(links);
// });
const titleClickhandler = function (e) {
  e.preventDefault();
  const clickeElement = this;
  const activeLinks = document.querySelectorAll(".titles a.active");
  const activeArticles = document.querySelectorAll(".post");
  const removeActiveClass = (htmlElements) =>
    htmlElements.forEach((element) => element.classList.remove("active"));

  removeActiveClass(activeLinks);
  removeActiveClass(activeArticles);
  clickeElement.classList.add("active");
  document
    .querySelector(clickeElement.getAttribute("href"))
    .classList.add("active");
};
const links = document.querySelectorAll(".titles a");
links.forEach((link) => link.addEventListener("click", titleClickhandler));
