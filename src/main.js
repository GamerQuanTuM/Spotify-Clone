import "./style.css";
const HOST_URL = import.meta.env.VITE_HOST_URL;

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("accessToken")) {
    window.location.href = `${HOST_URL}/dashboard/dashboard.html`;
  } else {
    window.location.href = `${HOST_URL}/login/login.html`;
  }
});
