import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object

const URL: any =
  process.env.NODE_ENV === "production"
    ? `https://${import.meta.env.VITE_BACKEND}/`
    : "http://localhost:5500/";

export const socket = io(URL);
