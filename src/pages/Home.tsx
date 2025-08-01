import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-black-400 mb-4">Theme Switcher</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2 className="text-xl font-semibold m-4">Products</h2>
        <ProductList />
      </div>
    </>
  );
}

export default Home;
