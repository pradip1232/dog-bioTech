import React from 'react';
import '../css/WelcomeSection.css'; // Custom CSS for styling
import dog from '../img/1  (5).webp'; // Dog image path

function WelcomeSection() {
    return (
        <div className="welcome-section container-fluid d-flex align-items-center">
            <div className="half-circle"></div>

            <div className="container">
                <div className="row w-100">
                    {/* Left Half Circle + Content */}
                    <div className="col-lg-10 content-section d-flex align-items-center">
                        <div className="text-content">
                            <h1 className="fw-bold">WELCOME TO</h1>
                            <h2 className="fw-bold">PANAV BIO-TECH</h2>
                            <p className="text-justify">
                                The corporate ideology to construct consciousness regarding the relevance of vaccines in
                                animals' life and serve the animal race with quality vaccines at economical prices to
                                enhance their quality of life.
                                <br />
                                The ethics and beliefs such as virtuosity, eminence, fidelity, faith, and gratitude make
                                Panav Biotech a company that stands out in the veterinary world. The innovations, service
                                orientation, drive towards achieving success, and an attitude of being triumphant against
                                all odds are at the heart of Panav Bio-tech.
                            </p>
                        </div>
                    </div>

                    {/* Dog Image Section */}
                    <div className="col-lg-2 position-relative">
                        <img src={dog} alt="Dog" className="dog-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;
