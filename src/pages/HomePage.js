import Header from '../layouts/Header';
import Banner from '../components/Banner';
import banner from '../components/banner.module.scss';
import bana from '../assets/bana.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section>
      <Header></Header>
      <Banner className={banner.container}>
        <div>
          <h2>Medical and Health</h2>
          <h1>A Great Place to recieve care</h1>
          <p>We are always focused on treating you perfectly</p>
          <Link to="#">Join us</Link>
        </div>
        <div>
          <img src={bana} alt="banner" width={400} />
        </div>
      </Banner>
    </section>
  );
};

export default HomePage;
