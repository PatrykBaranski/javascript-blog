// document.querySelector("#test-button").addEventListener("click", () => {
//   const links = document.querySelectorAll(".titles a");
//   console.log(links);
// });
const titleClickhandler = (e) => {
  console.log("link was clicked");
  console.log(e);
  /* remove class 'active' from all article links  */

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
};
const links = document.querySelectorAll(".titles a");
links.forEach((link) => link.addEventListener("click", titleClickhandler));
