import PostCard from "../components/PostCard";

function PostsPage({ posts, isLoading, error, deletePostLocal }) {
  if (isLoading) {
    return <h2 className="loading-spinner">Cargando posts...</h2>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="posts-container">
      <h2>Lista de Posts</h2>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onDeleteLocal={deletePostLocal}
        />
      ))}
    </div>
  );
}

export default PostsPage;