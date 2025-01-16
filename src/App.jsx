import { Outlet, Link } from 'react-router';

function App() {
  return (
    <>
      <nav>
        <h1>StoreName</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
