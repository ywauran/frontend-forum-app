import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralDownVoteThreadDetail,
  asyncToggleNeutralUpVoteThreadDetail,
  asyncToggleUpVoteThreadDetail,
} from '../states/threadDetail/action';
import BottomNavigation from '../components/BottomNavigation';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onCommentThread = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  };

  const onLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleUpVoteThreadDetail(threadId));
  };

  const onDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleDownVoteThreadDetail(threadId));
  };

  const onNeutralLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleNeutralUpVoteThreadDetail(threadId));
  };

  const onNeutralDislikeDetail = (threadId) => {
    dispatch(asyncToggleNeutralDownVoteThreadDetail(threadId));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section>
      <div className="">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          like={onLikeThreadDetail}
          dislike={onDislikeThreadDetail}
          neutralLike={onNeutralLikeThreadDetail}
          neutralDislike={onNeutralDislikeDetail}
          addCommentThread={onCommentThread}
        />
      </div>
      <BottomNavigation />
    </section>
  );
}

export default DetailPage;
