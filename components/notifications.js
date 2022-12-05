import { Badge } from "antd";

function Notifications() {
  return (
    <div className="notif-list">
      {["notifications", "messages", "cart"].map((item) => {
        return (
          <div className="notif-item" key={item}>
            <img src={`./${item}.png`} />
          </div>
        );
      })}
    </div>
  );
}

export default Notifications;
