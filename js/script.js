"use strict";
const articles = document.querySelectorAll(".post");
const titleClickhandler = function (e) {
  e.preventDefault();
  const clickedElement = this;
  const activeLinks = document.querySelectorAll(".titles a.active");
  const activeArticles = document.querySelectorAll(".post");
  const removeActiveClass = (htmlElements) =>
    htmlElements.forEach((element) => element.classList.remove("active"));

  removeActiveClass(activeLinks);
  removeActiveClass(activeArticles);
  clickedElement.classList.add("active");
  document
    .querySelector(clickedElement.getAttribute("href"))
    .classList.add("active");
};
const generateTitleLinks = function () {
  const linkList = document.querySelector(".titles");
  linkList.innerHTML = "";
  articles.forEach((article, i) => {
    const articleTitle = article.querySelector(".post-title").innerHTML;
    linkList.innerHTML += `<li>
                <a href="#${article.getAttribute(
                  "id",
                )}"><span>${articleTitle}</span></a>
              </li>`;
  });
  const links = document.querySelectorAll(".titles a");
  links.forEach((link) => link.addEventListener("click", titleClickhandler));
};
const generateTags = function () {
  articles.forEach((article) => {
    const postTags = article.querySelector(".post-tags .list");
    postTags.innerHTML = "";
    const tagList = article.getAttribute("data-tags").split(" ");
    tagList.forEach((tag) => {
      console.log(tag);
      postTags.innerHTML += `<li><a href="#">${tag}</a></li> `;
    });
  });
};
generateTitleLinks();
generateTags();
