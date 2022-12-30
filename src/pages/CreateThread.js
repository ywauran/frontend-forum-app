import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';
import BottomNavigation from '../components/BottomNavigation';

function CreateThread() {
  const dispatch = useDispatch();

  const onThreadInput = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <div className="pt-4">
      <h3 className="text-primary text-center font-bold text-xl">
        Buat Diskusi Baru
      </h3>
      <ThreadInput threadInput={onThreadInput} />
      <BottomNavigation />
    </div>
  );
}

export default CreateThread;
