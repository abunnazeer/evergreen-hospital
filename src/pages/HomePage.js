import Header from "../layouts/Header";
import Banner from "../components/Banner";
import banner from "../components/banner.module.scss";
import bana from "../assets/bana.png";

const HomePage = () => {
  return (
    <section>
      <Header></Header>
      <Banner className={banner.container}>
        <div>
          <h2>Medical and Health</h2>
          <h1>A Great Place to recieve care</h1>
          <p>We are always focused on treating you perfectly</p>
          <a href="#">Join us</a>
        </div>
        <div>
          <img src={bana} alt="image" width={400} />
        </div>
      </Banner>
    </section>
  );
};

export default HomePage;
