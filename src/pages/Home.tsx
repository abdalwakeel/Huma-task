import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts.api";
import PostCard from "../components/ui/PostCard";
import "./Home.css";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <p className="status-message">Loading posts...</p>;
  }

  if (isError) {
    return (
      <p className="status-message error">
        Something went wrong: {error instanceof Error ? error.message : "Unknown error"}
      </p>
    );
  }

  return (
    <div>
      <h2>Posts</h2>
      <div className="posts-grid">
        {data?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;