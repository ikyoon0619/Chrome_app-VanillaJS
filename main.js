const searchEl = document.querySelector('.search-group');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click',()=>{
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus',()=>{
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder',"Google 통합검색")
})

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});