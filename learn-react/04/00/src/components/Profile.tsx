type ProfileUser = {
  bgImg: string;
  userImg: string;
  userName: string;
  instarId: string;
  handler: () => void;
};

export default function Profile({ profileUser }: { profileUser: ProfileUser }) {
  return (
    <article className="card">
      <div>
        <img
          className="card-img"
          src={profileUser.bgImg}
          alt="background-pic"
        />
      </div>
      <div className="profile">
        <img className="prof-img" src={profileUser.userImg} alt="profile-pic" />
        <h3 className="alias">{profileUser.userName}</h3>
        <p className="username">{profileUser.instarId}</p>
        <button onClick={profileUser.handler}>Follow</button>
      </div>
    </article>
  );
}
