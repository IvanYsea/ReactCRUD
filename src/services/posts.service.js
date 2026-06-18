const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Error al obtener posts");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPostById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Error al obtener post");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createPost = async (post) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Error al crear post");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updatePost = async (id, post) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar post");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar post");
    }

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};