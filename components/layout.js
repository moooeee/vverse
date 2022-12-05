import Nav from "./nav";

function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
