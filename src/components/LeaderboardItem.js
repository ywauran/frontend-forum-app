import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <tr className="py-4">
      <td className="flex space-x-6 items-center">
        <div className="avatar py-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img className="" src={user.avatar} alt={user.name} />
          </div>
        </div>
        <div className="">
          <h5 className="font-semibold">{user.name}</h5>
          <p className="font-medium text-xs text-[#cbd5e1]">{user.email}</p>
        </div>
      </td>
      <td className="">
        <p className="text-center font-semibold">{score}</p>
      </td>
    </tr>
  );
}

const userLeaderboardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userLeaderboardItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
