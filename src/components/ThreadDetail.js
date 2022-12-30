/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import ThreadCommentInput from './ThreadCommentInput';
import ThreadCommentItem, { threadCommentItemShape } from './ThreadCommentItem';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  like,
  dislike,
  neutralLike,
  neutralDislike,
  addCommentThread,
}) {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      like(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
      like(id);
    } else if (isThreadLiked) {
      neutralLike(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      dislike(id);
    } else if (isThreadLiked) {
      neutralLike(id);
      dislike(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
    }
  };

  return (
    <section className="flex items-center justify-center mt-10 mb-24">
      <div className="w-96 p-5 card" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
        <figure><img src={owner.avatar} alt={owner.name} /></figure>
        <div className="card-body">
          <div className="flex space-x-4 items-center">
            <h3 className="card-title">{owner.name}</h3>
            <p className="badge badge-outline">{`# ${category}`}</p>
          </div>
          <div className="">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-[#1f2937]">{parse(body)}</p>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <button type="button" onClick={onLikeClick} className="">
                {isThreadLiked ? (
                  <AiOutlineLike style={{ color: 'blue' }} />
                ) : (
                  <AiOutlineLike />
                )}
              </button>
              {isThreadLiked ? (
                <p style={{ color: 'blue' }}>{upVotesBy.length}</p>
              ) : (
                <p>{upVotesBy.length}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <button type="button" onClick={onDislikeClick} className="">
                {isThreadDisliked ? (
                  <AiOutlineDislike style={{ color: 'red' }} />
                ) : (
                  <AiOutlineDislike />
                )}
              </button>
              {isThreadDisliked ? (
                <p style={{ color: 'red' }}>{downVotesBy.length}</p>
              ) : (
                <p>{downVotesBy.length}</p>
              )}
            </div>
            <p>{`${postedAt(createdAt)}`}</p>
          </div>
          <ThreadCommentInput commentThread={addCommentThread} />
          <div className="comment-container">
            <h2 className="comment-length">{`Komentar (${comments.length})`}</h2>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <ThreadCommentItem key={comment.id} {...comment} />
              ))
            ) : (
              <div>- Tidak ada komentar</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentItemShape)).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
  addCommentThread: PropTypes.func,
};

ThreadDetail.defaultProps = {
  like: null,
  dislike: null,
  neutralLike: null,
  neutralDislike: null,
  addCommentThread: null,
};

export { userShape };

export default ThreadDetail;
