"use strict";
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
const links = document.querySelectorAll(".titles a");
links.forEach((link) => link.addEventListener("click", titleClickhandler));
