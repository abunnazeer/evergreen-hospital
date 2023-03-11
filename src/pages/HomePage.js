import Header from '../layouts/Header';
import Banner from '../components/Banner';
import banner from '../components/banner.module.scss';
import bana from '../assets/bana.png';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faBedPulse,
  faHospitalUser,
  faHeartPulse,
} from '@fortawesome/free-solid-svg-icons';
import Flex from '../utils/Flex';

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
      <Card p="5rem 20rem">
        <h2>Practice Advice</h2>
        <h1>What we offer</h1>
        <p className="wt_50">
          If you need urgent medical attention but it is not a life-threatening
          emergency, call your healthcare provider or go to the nearest urgent
          care clinic.
        </p>

        <Flex>
          <Card bg="white" p="2rem 3rem" m="1rem" bs="#cdc7c7 0px 0px 4px 1px">
            <div className="icon__bg">
              <FontAwesomeIcon icon={faHeartPulse} color="red" size="2x" />
            </div>
            <h1 className="size_2 reset wt_100 bold mt_2">Emergency Case</h1>
            <p className="p_m wt_100 mt_2">
              we can help you get the urgent care you need
            </p>
          </Card>
          <Card bg="white" p="2rem 3rem" m="1rem" bs="#cdc7c7 0px 0px 4px 1px">
            <div className="icon__bg">
              <FontAwesomeIcon icon={faStethoscope} color="red" size="2x" />
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
            p="2rem 3rem"
            m="1rem"
            bs="#cdc7c7 0px 0px 4px 1px"
          >
            <div className="icon__bg_w mt_1_5">
              <FontAwesomeIcon icon={faHospitalUser} color="red" size="2x" />
            </div>
            <h1 className="size_2 reset wt_100 white bold mt_2">Book now</h1>
            <p className="p_m wt_100 white mt_2">
              we can help you get the urgent care you need
            </p>
          </Card>
          <Card bg="white" p="2rem 3rem" m="1rem" bs="#cdc7c7 0px 0px 4px 1px">
            <div className="icon__bg">
              <FontAwesomeIcon icon={faBedPulse} color="red" size="2x" />
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
      <Card bg="#fff" p="2rem 20rem">
        <h1 className="center wt_100 pr_color">Evergreen Hospital</h1>
        <p className="mt_2">
          Welcome to our digital hospital, where we provide convenient and
          accessible healthcare services through online consultations. We
          understand that visiting a traditional hospital can be a daunting and
          time-consuming process, which is why we have developed a platform that
          enables patients to receive medical consultations from the comfort of
          their own homes. Our team of experienced healthcare professionals is
          committed to delivering high-quality care and personalized attention
          to each patient. By leveraging the latest technology, we aim to make
          healthcare more efficient, affordable, and accessible to all. Whether
          you need a routine check-up or have a more complex medical concern, we
          are here to provide you with the care you need.
        </p>
      </Card>

      <Card p="5rem 20rem">
        <h2>Specialist Doctors</h2>
        <h1>Hight Qualified professionals</h1>
        <p className="wt_50">
          If you need urgent medical attention but it is not a life-threatening
          emergency, call your healthcare provider or go to the nearest urgent
          care clinic.
        </p>
      </Card>
    </section>
  );
};

export default HomePage;
