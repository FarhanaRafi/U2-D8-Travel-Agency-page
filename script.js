function numberOfCards() {
  let album = document.querySelectorAll("img");
  let albumCount = document.getElementById("album-count");
  albumCount.innerText = `Number Of Cards: ${album.length + 10}`;
}

window.onload = numberOfCards();
