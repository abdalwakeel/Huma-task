import type { Post } from "../../types/post.types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default PostCard;