import Profile from './Profile/index';
import data from '../user.json';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
    </div>
  );
};
