import { atom, selector } from "recoil";
import axios from "axios";
export const userState = atom({
  key: "user-state",
  default: {
    name: {
      first: "",
    },
    picture: {
      large: "",
    },
  },
});

export const userFetch = selector({
  key: "user-fetch",
  get: async () => {
    return await axios.get("https://randomuser.me/api/");
  },
});
