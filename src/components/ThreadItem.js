/* eslint-disable no-dupe-else-if */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { TfiComment } from 'react-icons/tfi';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import parse from 'html-react-parser';
import { postedAt } from '../utils/index';

function ThreadItem({
  id,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
  authUser,
  like,
  dislike,
  neutralLike,
  neutralDislike,
}) {
  const navigate = useNavigate();
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

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/talks/${id}`);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div role="button" tabIndex={0} onKeyDown={onThreadPress} onClick={onThreadClick} className="card w-96 bg-base-100 hover:bg-[#f8fafc]" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
        <figure className="p-4"><img src={user.avatar} alt={user.name} /></figure>
        <div className="card-body">
          <h4 className="card-title">{user.name}</h4>
          <div className="flex space-x-4">
            <div className="badge badge-outline">
              {`#${category}`}
            </div>
          </div>
          <div className="">
            <div className="">{parse(body)}</div>
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
            <div className="flex items-center space-x-2">
              <button href="/detail-thread" type="button" className="">
                <TfiComment />
              </button>
              <p>{totalComments}</p>
            </div>
            <div className="">{postedAt(createdAt)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
};

ThreadItem.defaultProps = {
  like: null,
  dislike: null,
  neutralDislike: null,
  neutralLike: null,
};

export { threadItemShape };

export default ThreadItem;
