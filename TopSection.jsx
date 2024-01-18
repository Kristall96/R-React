import "./module.TopSection.css";
export default function TopSection() {
  return (
    <div id="section-top">
      <div id="top-left">
        <span id="logo">
          <a href="#">
            <img id="r" src="/images/topSection/logo/RR.png" alt="" />
          </a>
        </span>
        <span id="search">
          <form action="">
            <input id="top-search" type="text" />
          </form>
        </span>
      </div>
      <div id="top-center">
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/center/home.svg"
              alt="Main-Page"
            />
          </a>
        </span>
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/center/video-duration.svg"
              alt="Video-Page"
            />
          </a>
        </span>
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/center/shop.svg"
              alt="Market-Page"
            />
          </a>
        </span>
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/center/users-medical.svg"
              alt="Groups-Page"
            />
          </a>
        </span>
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/center/gamepad.svg"
              alt="Gaming-Page"
            />
          </a>
        </span>
      </div>
      <div id="top-right">
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/right/grid.svg"
              alt="menu"
            />
          </a>
        </span>
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/right/paper-plane.svg"
              alt="messenger"
            />{" "}
          </a>
        </span>
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/right/cowbell.svg"
              alt="notifications"
            />
          </a>
        </span>
        <span>
          <a href="#">
            <img
              className="top-logo"
              src="/images/topSection/right/profile-pic.png"
              alt="notifications"
            />
          </a>
        </span>
      </div>
    </div>
  );
}
