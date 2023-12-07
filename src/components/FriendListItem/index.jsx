import React from 'react';

function FriendListItem({ data }) {
  return data.map(el => (
    <li className="item" key={el.id}>
      {/* <span className="status">{el.isOnline ? : }</span> */}
      <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
      <p className="name">{el.name}</p>
    </li>
  ));
}

export default FriendListItem;
