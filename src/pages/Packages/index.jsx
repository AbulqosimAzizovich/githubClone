import "./style.scss";

const index = () => {
  return (
    <div className="container stars">
      <img
        src="https://github.githubassets.com/images/mona-loading-default.gif"
        width="60"
        alt="Loading your activity..."
        class="mt-4 hide-reduced-motion"
      ></img>
      <p>One Moment</p>
    </div>
  );
};

export default index;
