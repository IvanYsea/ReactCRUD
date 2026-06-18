import { useState, useEffect, useCallback } from 'react';
import { getPosts } from '../services/posts.service';

// Custom hook 
export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtiene los posteos y actualiza el estado inicial
  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getPosts();
      setPosts(data.slice(0, 10)); // Limitamos a 10 elementos por diseño
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  //  (POST)
    const addPostLocal = (newPost) => {

        const postConId = {...newPost, id: Date.now()};

        setPosts((prevPosts) => [postConId, ...prevPosts]);
    }; // Para que cada Post tenga un ID único


  //(PUT)
  const updatePostLocal = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  // (DELETE)
  const deletePostLocal = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  // Ejecutamos la carga inicial al montar el hook
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { 
    posts, 
    isLoading, 
    error, 
    fetchPosts,
    addPostLocal,
    updatePostLocal,
    deletePostLocal
  };
};