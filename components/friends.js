import React from "react";
import { Avatar, Badge, Space, Typography } from "antd";
import { friends } from "../data/friends";

function Friends() {
  return (
    <div className="friends-wrapper">
      <Typography.Title level={4} style={{ fontWeight: "700" }}>
        Friends
      </Typography.Title>

      <div className="friends-list">
        {friends.map((friend, inedx) =>
          friend.online ? (
            <div className="friend-item">
              <Badge offset={[-5, 10]} dot color="#8BC747" key={inedx}>
                <Avatar size={55} src="./avatar.png" />
              </Badge>
            </div>
          ) : (
            <div className="friend-item">
              <Avatar key={inedx} size={55} src="./avatar.png" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Friends;
