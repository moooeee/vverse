import { Button, Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import FeedMenu from "./feedMenu";
import Notifications from "./notifications";
import Profile from "./profile";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo-search-wrapper">
          <div className="logo-wrapper">
            <img className="logo" src="./logo.png" alt="logo" />
          </div>
          <div className="input-wrapper">
            <Input
              placeholder="Search..."
              allowClear
              prefix={<SearchOutlined className="input-icon" />}
            />
          </div>
          <Button type="ghost" className="mobile-search">
            <SearchOutlined />
          </Button>
        </div>
        <FeedMenu />
        <div className="notif-profile-wrapper">
          <Button type="ghost" className="mobile-nav">
            <MenuOutlined />
          </Button>
          <Notifications />
          <Profile />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
