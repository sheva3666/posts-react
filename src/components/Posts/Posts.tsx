import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import usePostsStore from "../../stores/postsStore";
import { fetchPosts, createPost } from "../../api/api";
import useLocalStorage, { storageKeys } from "../../hooks/useLocalStorage";
import { StaticRoutes } from "../../routes";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import Item from "./components/Item/Item";
import "./Posts.scss";

const Posts = () => {
  const [newPost, setNewPost] = useState("");
  const { getItem } = useLocalStorage();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  const { posts, addPosts, addOnePost } = usePostsStore();

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    createPost({ title: newPost })
      .then(({ data }) => addOnePost(data))
      .then(() => setNewPost(""));
  };

  useEffect(() => {
    const logged = getItem(storageKeys.login);
    if (!logged) {
      navigate(StaticRoutes.login);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      addPosts(data?.data);
    }
  }, [isLoading]);

  if (isLoading) {
    return <p>LOADING...</p>;
  }

  return (
    <div className="posts-page">
      <div className="create-section">
        <Input
          placeholder="New post"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <Button name="Create" onClick={(e) => handleCreate(e)} />
      </div>
      <div className="posts">
        {posts?.map((post) => (
          <Item key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
