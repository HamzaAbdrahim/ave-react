import { useState, useEffect } from "react";
import Header from "../pages/home/header/Header";
import Hero from "../pages/home/hero/Hero";
import Lodingpage from "../components/commen/pages/loding/Lodingpage";
import Communauté from "../pages/home/communauté/Communauté";
import Footer from "../pages/home/footer/Footer";
import Jobtype from "../pages/home/job-types/Jobtype";
// import Carousel from "../pages/home/carousel/Carousel";
import Trouve from "../pages/home/trouve/Trouve";
import Application from "../pages/home/Application/Application";
import MultiStepForm from "../pages/home/popUps/MultiStepForm";
import { useYourContext } from "../context/MultiStepForm";
import StepsOverviwe from "../pages/home/stepsOverviwe/StepsOverviwe";

const HomeLayout = () => {
  const [loaded, setLoaded] = useState(false);
  const { showPopup } = useYourContext();

  



  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!loaded) {
    return <Lodingpage />;
  }

  return (
    <>
      <Header />
      <Hero />
      <Trouve />
      <Jobtype />
      <StepsOverviwe />
      {/* <Carousel /> */}
      <Communauté />
      <Application />
      <Footer />
    {showPopup  ? <MultiStepForm /> : false} 
    </>
  );
};

export default HomeLayout;