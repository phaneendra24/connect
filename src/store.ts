import { create } from "zustand";

type tweetType = {
  _id: string;
  name: string;
  likes: number;
  dislikes: number;
  tweet: string;
  createdAt: string;
}[];

const usestore = create((set) => ({
  name: "",
  tweets: [],
  setName: (state: string) => set(() => ({ name: state })),
  setTweets: (state: tweetType) => set(() => ({ tweets: [...state] })),
}));

export default usestore;
