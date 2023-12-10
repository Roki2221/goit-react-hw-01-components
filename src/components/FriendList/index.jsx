import React from 'react';
import FriendListItem from 'components/FriendListItem';
import css from './style.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      <FriendListItem data={friends} />
    </ul>
  );
}

export default FriendList;
