"use strict";
const articles = document.querySelectorAll(".post");

const removeActiveClass = (htmlElements) =>
  htmlElements.forEach((element) => element.classList.remove("active"));

const getTitleFromHref = (href) => {
  const indexOfDash = href.indexOf("-");
  return href.slice(indexOfDash + 1);
};

const calculateTagsParams = (tags) => {
  return {
    min: Math.max(...Object.values(tags)),
    max: Math.min(...Object.values(tags)),
  };
};

const calculateTagClass = (reappearanceOfTag, tagParams) => {
  const maxTagsCount = 5;

  return `tag-size-${Math.floor(
    ((reappearanceOfTag - tagParams.min) / (tagParams.max - tagParams.min)) *
      (maxTagsCount - 1) +
      1
  )}`;
};

const generateSideBarHTML = (allElement, selector, type) => {
  const elementSideBar = document.querySelector(selector);
  let allElementHTML = "";
  const elementParams = calculateTagsParams(allElement);

  for (const info in allElement) {
    const reappearanceOfElement = allElement[info];
    allElementHTML += `<li class=${calculateTagClass(
      reappearanceOfElement,
      elementParams
    )}><a href="#${type}-${info}">${info}</a> <span>(${reappearanceOfElement})</span></li>`;
  }

  elementSideBar.innerHTML = allElementHTML;
};

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
  const author = getTitleFromHref(href);
  const activeAuthors = document.querySelectorAll(".post-author a.active");

  removeActiveClass(activeAuthors);
  document.querySelectorAll(".post-author a").forEach((author) => {
    if (author.getAttribute("href") === href) author.classList.add("active");
  });

  generateTitleLinks(`[data-author="${author}"]`);
};

const tagClickHandler = function (e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const tag = getTitleFromHref(href);
  const activeTags = document.querySelectorAll(".post-tags .list .active");

  removeActiveClass(activeTags);
  document.querySelectorAll(".post-tags .list a").forEach((tag) => {
    if (tag.getAttribute("href") === href) tag.classList.add("active");
  });

  generateTitleLinks(`[data-tags~=${tag}]`);
};

const generateTitleLinks = function (customSelector = "") {
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
  const allTags = {};

  articles.forEach((article) => {
    const postTags = article.querySelector(".post-tags .list");
    postTags.innerHTML = "";
    const tagList = article.getAttribute("data-tags").split(" ");
    tagList.forEach((tag) => {
      if (!allTags[tag]) allTags[tag] = 1;
      allTags[tag]++;
      const linkEl = `<li><a href="#tag-${tag}">${tag}</a></li> `;
      postTags.innerHTML += linkEl;
    });
  });

  generateSideBarHTML(allTags, ".list.tags", "tag");
};

const generateAuthor = function () {
  const allAuthors = {};

  articles.forEach((article) => {
    const author = article.getAttribute("data-author");
    if (!allAuthors[author]) allAuthors[author] = 1;
    allAuthors[author]++;
    const authorTag = article.querySelector(".post-author");
    authorTag.innerHTML = `by <a href="#author-${author}">${author}</a>`;
  });

  generateSideBarHTML(allAuthors, ".list.authors", "author");
};

generateTitleLinks();
generateTags();
generateAuthor();
addClickHandler(".post-tags .list a", tagClickHandler);
addClickHandler(".list.tags a", tagClickHandler);
addClickHandler(".post-author a", authorClickHandler);
addClickHandler(".list.authors a", authorClickHandler);
