import Header from "../components/Header";
import Testimonial from "../components/Testimonials/Testimonial";
import PopularTutorials from "../components/populartutorials/PopularTutorials";
import FreeMembership from "../components/FreeMembership/FreeMemberShip";
import LatestVideos from "../components/LatestVideos/LatestVideos";

const HomePage = () => {
  return (
    <>
      <Header />
      <Testimonial />
      <PopularTutorials />
      <FreeMembership />
      <LatestVideos />
    </>
  );
};

export default HomePage;
