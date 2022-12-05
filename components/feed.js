import Layout from "./layout";
import Mirrors from "./mirrors";
import Nav from "./nav";
import Friends from "./friends";
import Post from "./post";
import Dimensions from "./dimensions";

function Feed() {
  return (
    <Layout>
      <main className="content-wrapper">
        <Mirrors />
        <Friends />
        <Post />
        <Dimensions />
      </main>
    </Layout>
  );
}

export default Feed;
