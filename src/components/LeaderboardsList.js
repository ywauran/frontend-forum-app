import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="flex items-center justify-center">
      <table className="w-96">
        <thead>
          <tr>
            <th className="text-left">Pengguna</th>
            <th className="text-left">Skor</th>
          </tr>
        </thead>
        <tbody>
          {
          leaderboards.map((leaderboard) => (
            <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
