import { create } from "zustand";

type Store = {
  posts: { id: number; title: string }[];
  addOnePost: (newPost: { id: number; title: string }) => void;
  editPost: (newPost: { id: number; title: string }) => void;
  addPosts: (newPosts: { id: number; title: string }[]) => void;
  removePost: (postId: number) => void;
};

const usePostsStore = create<Store>()((set) => ({
  posts: [],
  addOnePost: (newPost: { id: number; title: string }) =>
    set((state) => ({ posts: [...state.posts, newPost] })),
  editPost: (newPost: { id: number; title: string }) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.id === newPost.id ? newPost : p)),
    })),
  addPosts: (newPosts: { id: number; title: string }[]) =>
    set((state) => ({ posts: [...state.posts, ...newPosts] })),
  removePost: (postId: number) =>
    set((state) => ({ posts: state.posts.filter((p) => p.id !== postId) })),
}));

export default usePostsStore;
