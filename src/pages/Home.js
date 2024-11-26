import { Carousel, Container } from 'react-bootstrap';
import CarouselComponent from '../components/HomeSections/CarouselComponent';
import WelcomeSection from '../components/HomeSections/WelcomeSection';
import AboutUsSection from '../components/HomeSections/AboutUsSection';
import VeterinariansSection from '../components/HomeSections/VeterinariansSection';
import ProductSlider from '../components/HomeSections/ProductSlider';
import ProductSpotlight from '../components/HomeSections/ProductSpotlight';
import StatisticsSection from '../components/HomeSections/StatisticsSection';
/* Slick Carousel CSS */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSlider from '../components/HomeSections/BlogSlider';
import DiagonalCardSlider from '../components/HomeSections/DiagonalCardSlider';

function Home() {
    return (
        <>
            <CarouselComponent />
            <WelcomeSection />
            <AboutUsSection />
            <VeterinariansSection />
            <ProductSlider />
            <ProductSpotlight />

            <StatisticsSection />

            <BlogSlider />

        </>
    );
}

export default Home;
