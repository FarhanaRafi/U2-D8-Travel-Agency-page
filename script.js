function numberOfCards() {
  let album = document.querySelectorAll("img");
  let albumCount = document.getElementById("album-count");
  albumCount.innerText = `Number Of Cards: ${album.length + 10}`;
}

function deleteChild() {
  let section = document.querySelectorAll(".delete");
  for (let i = 0; i < section.length; i++) {
    section[i].parentElement.removeChild(section[i]);
  }
}

function addBadge() {
  let cards = document.querySelectorAll(".hot-deal");
  for (let i = 0; i < cards.length; i++) {
    let badge = document.createElement("span");
    badge.classList.add("badge");
    badge.classList.add("badge-danger");
    badge.classList.add("position-absolute");
    badge.innerText = "HOT";
    cards[i].appendChild(badge);
  }
}

function onLoad() {
  numberOfCards();
  addBadge();
}

window.onload = onLoad();
