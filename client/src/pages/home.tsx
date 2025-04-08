import HeroSlider from "@/components/Home/HeroSlider";
import Announcements from "@/components/Home/Announcements";
import Welcome from "@/components/Home/Welcome";
import QuickLinks from "@/components/Home/QuickLinks";
import AcademicExcellence from "@/components/Home/AcademicExcellence";
import NewsEvents from "@/components/Home/NewsEvents";
import Testimonials from "@/components/Home/Testimonials";
import Gallery from "@/components/Home/Gallery";
import CallToAction from "@/components/Home/CallToAction";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Tumaini Kiage Boys High School</title>
        <meta name="description" content="Tumaini Kiage Boys High School is a premier educational institution committed to excellence in academics, character development, and holistic student growth." />
      </Helmet>
      
      <HeroSlider />
      <Announcements />
      <Welcome />
      <QuickLinks />
      <AcademicExcellence />
      <NewsEvents />
      <Testimonials />
      <Gallery />
      <CallToAction />
    </>
  );
};

export default Home;
