import React from 'react';
import FriendListItem from 'components/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      <FriendListItem data={friends} />
    </ul>
  );
}

export default FriendList;
