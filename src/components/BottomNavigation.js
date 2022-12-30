import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdHome, MdLeaderboard } from 'react-icons/md';

function BottomNavigation() {
  return (
    <div className="btm-nav">
      <Link to="/">
        <MdHome className="text-3xl" />
      </Link>
      <Link to="/new">
        <MdAddCircleOutline className="text-3xl" />
      </Link>
      <Link to="/leaderboards">
        <MdLeaderboard className="text-3xl" />
      </Link>
    </div>
  );
}

export default BottomNavigation;
