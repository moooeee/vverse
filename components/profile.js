import { Badge } from "antd";

function Profile() {
  return (
    <div className="profile-pic">
      <Badge count={2} size="small" offset={[-2, 4]}>
        <img src="./avatar.png" alt="profile pic" />
      </Badge>
    </div>
  );
}

export default Profile;
