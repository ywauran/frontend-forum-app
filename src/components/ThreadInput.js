/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function ThreadInput({ threadInput }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
      navigate('/');
    }
  }

  return (
    <form className="flex flex-col items-center justify-center" onSubmit={threadInputHandler}>
      <div className="w-96 flex flex-col space-y-4">
        <div className="">
          <label htmlFor="title">
            Judul
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={onTitleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="">
          <label htmlFor="category" className="category-label">
            Kategori
          </label>
          <input
            type="text"
            id="catergory"
            value={category}
            onChange={onCategoryChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="">
          <textarea
            id="thread"
            value={body}
            onChange={onBodyChange}
            className="textarea textarea-bordered w-full h-48"
          />
        </div>
        <button
          className="btn btn-primary w-full"
          type="submit"
        >
          Buat
        </button>
      </div>
    </form>
  );
}

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
