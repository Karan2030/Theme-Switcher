import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-red-400 mb-4">Theme Switcher</h1>
        <p>This is a sample paragraph</p>
        <ProductList />
      </div>
    </>
  );
}

export default Home;
