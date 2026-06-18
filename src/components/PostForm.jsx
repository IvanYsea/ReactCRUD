import { useRef, useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const PostForm = ({ onSubmit, initialData }) => {
  const { title, body, handleChange, resetForm } = useForm(initialData || { title: '', body: '' });
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body, id: initialData?.id });
    if (!initialData) resetForm();
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        ref={inputRef}
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Título del post"
        required
      />
      <textarea
        name="body"
        value={body}
        onChange={handleChange}
        placeholder="Contenido"
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default PostForm;