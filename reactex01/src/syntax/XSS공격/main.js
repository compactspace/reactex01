const searchInput = document.querySelector("#search-input");
const submitButton = document.querySelector("#submit-button");
const searchInputResult = document.querySelector("#search-input-result");
const urlParams = new URLSearchParams(window.location.search);

submitButton.addEventListener("click", submitSearchInput);

function submitSearchInput() {
  searchInputResult.innerHTML = searchInput.value;
  
}
