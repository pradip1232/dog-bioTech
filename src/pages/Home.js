import { Carousel, Container } from 'react-bootstrap';
import CarouselComponent from '../components/HomeSections/CarouselComponent';
import WelcomeSection from '../components/HomeSections/WelcomeSection';

function Home() {
    return (
        <>
            <CarouselComponent />
            <WelcomeSection />
        </>
    );
}

export default Home;
