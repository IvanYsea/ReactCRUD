import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostFormPage from "./pages/PostFormPage";
import PostEditPage from "./pages/PostEditPage";
import { usePosts } from "./hooks/usePosts";

function App() {
    const { posts, isLoading, error, deletePostLocal, addPostLocal, updatePostLocal } = usePosts();

    return (
        <>
            <header>
                <h1>POSTS</h1>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<PostsPage posts={posts} isLoading={isLoading} error={error} deletePostLocal={deletePostLocal} />} />
                    <Route path="/create" element={<PostFormPage addPostLocal={addPostLocal} />} />
                    <Route path="/posts/:id" element={<PostDetailPage posts={posts} />} />
                    <Route path="/edit/:id" element={<PostEditPage posts={posts} updatePostLocal={updatePostLocal} />} />
                </Routes>
            </main>
            <footer>
                <p>Parcial de Programacion Web II</p>
            </footer>
        </>
    );
}

export default App;