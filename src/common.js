export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const TOKEN_TYPE = "TOKEN_TYPE";
export const EXPIRES_IN = "EXPIRES_IN";
const HOST_URL = import.meta.env.VITE_HOST_URL;

export const ENDPOINT = {
  userInfo: "me",
  featuredPlaylist: "browse/featured-playlists?limit=5",
  toplists: "browse/categories/toplists/playlists?limit=10",
  playlist:"playlists"
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(TOKEN_TYPE);
  localStorage.removeItem(EXPIRES_IN);
  window.location.href = HOST_URL;
};

export const SECTIONTYPE = {
  DASHBOARD: "DASHBOARD",
  PLAYLIST: "PLAYLIST",
};
