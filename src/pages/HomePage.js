import Header from '../layouts/Header';
import Banner from '../components/Banner';
import banner from '../components/banner.module.scss';
import bana from '../assets/bana.png';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Flex from '../utils/Flex';
import { HeartPulseFill } from 'react-bootstrap-icons';

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
      <Card p="5rem 15rem">
        <h2>Practice Advice</h2>
        <h1>What we offer</h1>
        <p>
          If you need urgent medical attention but it is not a life-threatening
          emergency, call your healthcare provider or go to the nearest urgent
          care clinic.
        </p>

        <Flex>
          <Card bg="white" p="2rem 6rem" m="1rem" bs="#cdc7c7 0px 0px 4px 1px">
            <div className="icon__bg">
              <HeartPulseFill color="red" size={33} />
            </div>
            <h1 className="size_2 reset wt_100 bold mt_2">Emergency Case</h1>
            <p className="p_m wt_100 mt_2">
              we can help you get the urgent care you need
            </p>
          </Card>
          <Card bg="white" p="2rem 6rem" m="1rem" bs="#cdc7c7 0px 0px 4px 1px">
            <div className="icon__bg">
              <HeartPulseFill color="red" size={33} />
            </div>
            <h1 className="size_2 reset wt_100 bold mt_2">
              Online appointment
            </h1>
            <p className="p_m wt_100 mt_2 ">
              we can help you get the urgent care you need
            </p>
          </Card>
          <Card
            bg="#840000"
            p="2rem 6rem"
            m="1rem"
            bs="#cdc7c7 0px 0px 4px 1px"
          >
            <div className="icon__bg">
              <HeartPulseFill color="red" size={33} />
            </div>
            <h1 className="size_2 reset wt_100 white bold mt_2">Book now</h1>
            <p className="p_m wt_100 white mt_2">
              we can help you get the urgent care you need
            </p>
          </Card>
          <Card bg="white" p="2rem 6rem" m="1rem" bs="#cdc7c7 0px 0px 4px 1px">
            <div className="icon__bg">
              <HeartPulseFill color="red" size={33} />
            </div>
            <h1 className="size_2 reset wt_100 bold mt_2">
              Painless procedures
            </h1>
            <p className="p_m wt_100 mt_2 ">
              we can help you get the urgent care you need
            </p>
          </Card>
        </Flex>
      </Card>
    </section>
  );
};

export default HomePage;
