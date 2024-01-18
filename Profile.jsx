import "./module.profile.css";
export default function () {
  return (
    <div id="info-section">
      <div id="right-info">
        <span className="span-info">Publications</span>
        <span className="span-info">Information</span>
        <span className="span-info">Friends</span>
        <span className="span-info">Pictures</span>
        <span className="span-info">Videos</span>
        <span className="span-info">Reels</span>
        <span className="span-info">More</span>
      </div>
      <div id="img-info">
        <img id="profile-img" src="./images/topSection/logo/RR.png" alt="" />
      </div>
      <div id="user-info">
        <h2 id="name-info">Erkan Shakir</h2>
        <span id="friends-count">218 friends</span>
      </div>
    </div>
  );
}
