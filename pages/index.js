import ContactUs from '../components/ContactUs';
import FixedButton from '../components/FixedButton';
import HomeHeader from '../components/HomeHeader';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import Metaheader from '../components/Metaheader';
import Partners from '../components/Partners';
import About from '../components/About';
import Services from '../components/Services';
import Video02 from '../components/Video02';
import React, { useRef } from 'react';
import useIntersection from '../hooks/useIntersection';
import Footer from '../components/Footer';

export default function Home() {
  const ref = useRef();
  const isContactInView = useIntersection(ref, '0px');
  return (
    <>
      <Metaheader title="Cloudmetricas"></Metaheader>
      <LoadingScreen></LoadingScreen>

      <Layout id="home" className={!isContactInView ? 'pading-bottom-100' : ''}>
        <HomeHeader></HomeHeader>
        <Partners></Partners>
        <About></About>

        <Services></Services>
        <Video02></Video02>
        <ContactUs reference={ref}></ContactUs>
        <Footer></Footer>
      </Layout>

      {!isContactInView && <FixedButton></FixedButton>}
    </>
  );
}
