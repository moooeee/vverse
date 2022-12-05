import { Button, Input, Tabs, Typography } from "antd";
import { useState } from "react";

function Post() {
  const [postContent, setPostContent] = useState("");
  return (
    <div className="post-wrapper">
      <Tabs
        items={[
          {
            label: (
              <div className="post-tab-item">
                <img src="./paragraph.png" alt="blah" />
                Post
              </div>
            ),
            key: 0,
            children: null,
          },
          {
            label: (
              <div className="post-tab-item">
                <img src="./vverse.png" alt="blah" />
                Dimension
              </div>
            ),
            key: 1,
            children: null,
          },
          {
            label: (
              <div className="post-tab-item">
                <img src="./photo.png" alt="blah" />
                Photo/Video
              </div>
            ),
            key: 2,
            children: null,
          },
        ]}
      />
      <form className="post-form">
        <div className="input-wrapper">
          <img src="./avatar.png" />
          <Input
            className="input"
            placeholder="what's on your mind?"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <Button type="primary" disabled={postContent.length === 0}>
          Post
        </Button>
      </form>
    </div>
  );
}

export default Post;
