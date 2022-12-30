import React from 'react';
import PropTypes from 'prop-types';
import ThreadCategoryItem, { threadItemShape } from './ThreadCategoryItem';

function ThreadCategoryList({ threads }) {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="flex space-x-4">
        {
          threads.map((thread) => (
            <ThreadCategoryItem key={thread.id} {...thread} />
          ))
        }
      </div>
    </div>
  );
}

ThreadCategoryList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadCategoryList;
