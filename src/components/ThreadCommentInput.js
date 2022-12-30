import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ commentThread }) {
  const [content, setContent] = useState('');

  function commentThreadHandler() {
    if (content.trim()) {
      commentThread(content);
      setContent('');
    }
  }

  function handleCommentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className="">
      <h4>Beri komentar</h4>
      <form onSubmit={commentThreadHandler} className="comment-form">
        <textarea value={content} onChange={handleCommentChange} className="textarea textarea-bordered w-full h-48" placeholder="" />
        <button type="submit" className="btn btn-primary w-full">Kirim</button>
      </form>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  commentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
