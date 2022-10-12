import FixedButton from '../components/FixedButton';
import HomeHeader from '../components/HomeHeader';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import Metaheader from '../components/Metaheader';
import Partners from '../components/Partners';
import SavingCosts from '../components/SavingCosts';
import Services from '../components/Services';
import Video02 from '../components/Video02';

export default function Home() {
  return (
    <>
      <Metaheader title="Cloudmetricas"></Metaheader>
      <LoadingScreen></LoadingScreen>
      <Layout id="home">
        <HomeHeader></HomeHeader>
        <Partners></Partners>
        <SavingCosts></SavingCosts>
        <Services></Services>
        <Video02></Video02>
      </Layout>
      <FixedButton></FixedButton>
    </>
  );
}
