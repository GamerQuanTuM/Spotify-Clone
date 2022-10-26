import { fetchRequest } from "../api";
import { ENDPOINT, logout } from "../common";

const onProfileClick = (event) => {
  event.stopPropagation();
  const profileMenu = document.querySelector("#profile-menu");
  profileMenu.classList.toggle("hidden");
  if (!profileMenu.classList.contains("hidden")) {
    profileMenu.querySelector("li#logout").addEventListener("click", logout);
  }
};

const loadUserProfile = async () => {
  const defaultImage = document.querySelector("#default-image");
  const profileBtn = document.querySelector("#user-profile-btn");
  const displayNameElement = document.querySelector("#display-name");

  const { display_name: displayName, images } = await fetchRequest(
    ENDPOINT.userInfo
  );
  if (images?.length) {
    defaultImage.classList.add("hidden");
  } else {
    defaultImage.classList.remove("hidden");
  }

  profileBtn.addEventListener("click", onProfileClick);

  displayNameElement.textContent = displayName;
};

const onPlaylistItemClicked = (event) => {
  console.log(event.target);
};

const loadFeaturedPlaylist = async () => {
  const {
    playlists: { items },
  } = await fetchRequest(ENDPOINT.featuredPlaylist);

  const playlistItemsSection = document.querySelector(
    "#featured-playlist-items"
  );

  let playlistItems = ``;
  for (let { name, description, images, id } of items) {
    const playlistItem = document.createElement("section");
    playlistItem.className = "rounded border-2 border-solid p-4 hover:cursor-pointer";
    playlistItem.id = id;
    playlistItem.setAttribute("data-type", "playlist");
    playlistItem.addEventListener("click", onPlaylistItemClicked);

    const [{ url: imgUrl }] = images;
    playlistItem.innerHTML = `<img src=${imgUrl} alt=${name} class="rounded mb-2 object-contain shadow" />
    <h2>${name}</h2>
    <h3>${description}</h3>
    `;
    playlistItemsSection.appendChild(playlistItem);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadUserProfile();
  loadFeaturedPlaylist();
  document.addEventListener("click", () => {
    const profileMenu = document.querySelector("#profile-menu");
    if (!profileMenu.classList.contains("hidden")) {
      profileMenu.classList.add("hidden");
    }
  });
});
