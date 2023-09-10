import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px]">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
