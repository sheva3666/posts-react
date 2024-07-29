import { create } from "zustand";

type Store = {
  posts: Post[];
  addOnePost: (newPost: Post) => void;
  editPost: (newPost: Post) => void;
  addPosts: (newPosts: Post[]) => void;
  removePost: (postId: number) => void;
};

const usePostsStore = create<Store>()((set) => ({
  posts: [],
  addOnePost: (newPost: Post) =>
    set((state) => ({ posts: [...state.posts, newPost] })),
  editPost: (newPost: Post) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.id === newPost.id ? newPost : p)),
    })),
  addPosts: (newPosts: Post[]) =>
    set((state) => ({ posts: [...state.posts, ...newPosts] })),
  removePost: (postId: number) =>
    set((state) => ({ posts: state.posts.filter((p) => p.id !== postId) })),
}));

export default usePostsStore;
