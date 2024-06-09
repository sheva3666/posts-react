export const fetchPosts = async () => {
  const res = await fetch("http://localhost:3000/posts");
  return res.json();
};
