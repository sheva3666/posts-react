import { deletePost, updatePost } from "../../../../api/api";
import Button from "../../../common/Button/Button";
import "./Item.scss";
import usePostsStore from "../../../../stores/postsStore";
import { useState } from "react";
import Input from "../../../common/Input/Input";

export interface ItemProps {
  post: { id: number; title: string };
}

const Item: React.FC<ItemProps> = ({ post }) => {
  const [update, setUpdate] = useState(false);
  const [newTitle, setNewTitle] = useState(post.title);

  const { removePost, editPost } = usePostsStore();

  const onUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setUpdate((prevState) => !prevState);
  };

  const handleUpdateClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    updatePost({ id: post.id, title: newTitle })
      .then(() => editPost({ id: post.id, title: newTitle }))
      .then(() => setUpdate(false));
  };

  const handleUpdate = (title: string) => {
    setNewTitle(title);
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    postId: number
  ) => {
    e.preventDefault();
    deletePost(postId).then(() => removePost(postId));
  };

  return (
    <div className="posts-item">
      {update ? (
        <Input
          placeholder="New title"
          value={newTitle}
          onChange={(e: { target: { value: string } }) =>
            handleUpdate(e.target.value)
          }
        />
      ) : (
        <p>{post.title}</p>
      )}
      <div className="buttons">
        <Button
          name="Update"
          onClick={(e) => (update ? handleUpdateClick(e) : onUpdate(e))}
        />
        <Button
          name={update ? "Cancel" : "Delete"}
          onClick={(e) => (update ? onUpdate(e) : handleDelete(e, post.id))}
        />
      </div>
    </div>
  );
};

export default Item;
