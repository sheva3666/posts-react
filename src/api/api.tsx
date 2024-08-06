import axios from "axios";

export const fetchPosts = async () => {
  return await axios.get("http://localhost:3000/posts");
};

export const deletePost = async (postId: number) => {
  return await axios.delete(`http://localhost:3000/posts/${postId}`);
};

export const createPost = async (post: { title: string }) => {
  return await axios.post(`http://localhost:3000/posts`, post);
};

export const updatePost = async (post: Post) => {
  return await axios.put(`http://localhost:3000/posts/${post.id}`, post);
};
