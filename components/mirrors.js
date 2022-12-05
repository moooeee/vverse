import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";

function AddMirror() {
  return (
    <div className="add-mirror">
      <div className="label">
        <button className="add-btn">
          <PlusOutlined />
        </button>
        <Typography.Title level={5}>Add Mirror</Typography.Title>
      </div>
    </div>
  );
}

function Mirror() {
  return (
    <div className="mirror-wrapper">
      <div className="mirror">
        <div className="label">
          <img src="./avatar.png" alt="profile pic" />
          <Typography.Text style={{ color: "white" }}>username</Typography.Text>
        </div>
      </div>
    </div>
  );
}

function Mirrors() {
  return (
    <div className="mirrors-wrapper">
      <Typography.Title level={4} style={{ fontWeight: "700" }}>
        Mirrors
      </Typography.Title>
      <div className="mirrors-list">
        <AddMirror />
        {Array(15)
          .fill(null)
          .map((_, index) => {
            return <Mirror key={index} />;
          })}
      </div>
    </div>
  );
}

export default Mirrors;
