import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardsList';
import BottomNavigation from '../components/BottomNavigation';
import { asyncPopulateLeaderboards } from '../states/shared/action';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <section>
      <div className="pb-16 pt-4">
        <h4 className="text-primary text-xl font-bold text-center">
          Klasemen Pengguna Aktif
        </h4>
        <LeaderboardList leaderboards={leaderboardsList} />
      </div>
      <BottomNavigation />
    </section>
  );
}

export default LeaderboardsPage;
