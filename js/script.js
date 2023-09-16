"use strict";
const articles = document.querySelectorAll(".post");

const removeActiveClass = (htmlElements) =>
  htmlElements.forEach((element) => element.classList.remove("active"));
const titleClickHandler = function (e) {
  e.preventDefault();
  const clickedElement = this;
  const activeLinks = document.querySelectorAll(".titles a.active");
  const activeArticles = document.querySelectorAll(".post");

  removeActiveClass(activeLinks);
  removeActiveClass(activeArticles);
  clickedElement.classList.add("active");
  document
    .querySelector(clickedElement.getAttribute("href"))
    .classList.add("active");
};
const addClickHandler = (element, callbackFunction) =>
  document
    .querySelectorAll(element)
    .forEach((tag) => tag.addEventListener("click", callbackFunction));

const authorClickHandler = function (e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const author = href.slice(8);
  const actvieAuthors = document.querySelectorAll(".post-author a.active");
  removeActiveClass(actvieAuthors);
  document.querySelectorAll(".post-author a").forEach((author) => {
    console.log(author);
    if (author.getAttribute("href") === href) author.classList.add("active");
  });
  generateTitleLinks(`[data-author="${author}"]`);
};

const tagClickHandler = function (e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const tag = href.slice(5);
  const activeTags = document.querySelectorAll(".post-tags .list .active");
  removeActiveClass(activeTags);
  document.querySelectorAll(".post-tags .list a").forEach((tag) => {
    if (tag.getAttribute("href") === href) tag.classList.add("active");
  });
  generateTitleLinks(`[data-tags~=${tag}]`);
};

const generateTitleLinks = function (customSelector = "") {
  console.log(customSelector);
  const articles = document.querySelectorAll(`.post${customSelector}`);
  const linkList = document.querySelector(".titles");
  linkList.innerHTML = "";
  articles.forEach((article) => {
    const articleTitle = article.querySelector(".post-title").innerHTML;
    linkList.innerHTML += `
            <li>
                <a href="#${article.getAttribute("id")}">
                    <span>${articleTitle}</span>
                </a>
            </li>`;
  });
  const links = document.querySelectorAll(".titles a");
  links.forEach((link) => link.addEventListener("click", titleClickHandler));
};

const generateTags = function () {
  articles.forEach((article) => {
    const postTags = article.querySelector(".post-tags .list");
    postTags.innerHTML = "";
    const tagList = article.getAttribute("data-tags").split(" ");
    tagList.forEach(
      (tag) =>
        (postTags.innerHTML += `<li><a href="#tag-${tag}">${tag}</a></li> `)
    );
    ``;
  });
};

const generateAuthor = function () {
  articles.forEach((article) => {
    const author = article.getAttribute("data-author");
    const authorTag = article.querySelector(".post-author");
    authorTag.innerHTML = `by <a href="#author-${author}">${author}</a>`;
  });
};

generateTitleLinks();
generateTags();
generateAuthor();
addClickHandler(".post-tags .list a", tagClickHandler);
addClickHandler(".post-author a", authorClickHandler);
