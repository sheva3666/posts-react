import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import usePostsStore from "../../stores/postsStore";
import { fetchPosts } from "../../api/api";
import useLocalStorage, { storageKeys } from "../../hooks/useLocalStorage";
import { StaticRoutes } from "../../routes";

const Posts = () => {
  const { getItem } = useLocalStorage();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  const { posts, addPosts } = usePostsStore();

  useEffect(() => {
    const logged = getItem(storageKeys.login);
    if (!logged.length) {
      navigate(StaticRoutes.login);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      addPosts(data);
    }
  }, [isLoading]);

  if (isLoading) {
    return <p>LOADING...</p>;
  }

  return (
    <div>
      {posts?.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts;
