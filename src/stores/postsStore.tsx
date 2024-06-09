import { create } from "zustand";

type Store = {
  posts: { id: number; title: string }[];
  addOnePost: (newPost: { id: number; title: string }) => void;
  addPosts: (newPosts: { id: number; title: string }[]) => void;
};

const usePostsStore = create<Store>()((set) => ({
  posts: [],
  addOnePost: (newPost: { id: number; title: string }) =>
    set((state) => ({ posts: [...state.posts, newPost] })),
  addPosts: (newPosts: { id: number; title: string }[]) =>
    set((state) => ({ posts: [...state.posts, ...newPosts] })),
}));

export default usePostsStore;
