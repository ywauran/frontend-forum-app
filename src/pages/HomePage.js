import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadCategoryList from '../components/ThreadCategoryList';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncToggleDownVoteThread,
  asyncToggleNeutralDownVoteThread,
  asyncToggleNeutralUpVoteThread,
  asyncToggleUpVoteThread,
} from '../states/threads/action';
import BottomNavigation from '../components/BottomNavigation';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLike = (id) => {
    dispatch(asyncToggleUpVoteThread(id));
  };

  const onDislike = (id) => {
    dispatch(asyncToggleDownVoteThread(id));
  };

  const onNeutralLike = (id) => {
    dispatch(asyncToggleNeutralUpVoteThread(id));
  };

  const onNeutralDislike = (id) => {
    dispatch(asyncToggleNeutralDownVoteThread(id));
  };

  const threadCategoryList = threads.filter((thread, index) => (
    threads.findIndex((item) => item.category === thread.category) === index
  ));

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="">
      <div className="">
        <div className="">
          <h1 className="text-center text-primary font-bold text-xl">Kategori</h1>
          <ThreadCategoryList threads={threadCategoryList} />
        </div>
      </div>
      <ThreadsList
        threads={threadList}
        like={onLike}
        dislike={onDislike}
        neutralLike={onNeutralLike}
        neutralDislike={onNeutralDislike}
      />
      <BottomNavigation />
    </section>
  );
}

export default HomePage;
