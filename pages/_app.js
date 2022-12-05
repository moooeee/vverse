import "../styles/globals.css";
import "../components/styles/nav.css";
import "../components/styles/feedMenu.css";
import "../components/styles/notifications.css";
import "../components/styles/profilePic.css";
import "../components/styles/mirrors.css";
import "../components/styles/friends.css";
import "../components/styles/post.css";
import "../components/styles/dimensions.css";
import "../components/styles/feed.css";

import { ConfigProvider } from "antd";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#93C850", fontFamily: "Poppins" },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
