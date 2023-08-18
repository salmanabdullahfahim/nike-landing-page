import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="relative">
      <Navbar></Navbar>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">Popular Products</section>
      <section className="padding">Super Quality</section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">Special Offer</section>
      <section className="bg-pale-blue padding">Customer Review</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className="bg-black padding-x padding-t pb-8">Footer</section>
    </main>
  );
};

export default App;
