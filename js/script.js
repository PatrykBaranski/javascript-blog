// document.querySelector("#test-button").addEventListener("click", () => {
//   const links = document.querySelectorAll(".titles a");
//   console.log(links);
// });
const titleClickhandler = (e) => {
  const removeActiveClass = (htmlElements) =>
    htmlElements.forEach((element) => element.classList.remove("active"));
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");
  removeActiveClass(activeLinks);
  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".post");
  removeActiveClass(activeArticles);
  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
};
const links = document.querySelectorAll(".titles a");
links.forEach((link) => link.addEventListener("click", titleClickhandler));
