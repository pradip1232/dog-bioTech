import React from 'react'
import '../components/css/events.css';

import ff from '../components/img/EVENT PAGE/event 2.png';
import { Button, Container } from 'react-bootstrap';
import f1 from '../components/img/EVENT PAGE/event img 1 1.png';
import f2 from '../components/img/EVENT PAGE/webinar 1.png';
import f3 from '../components/img/EVENT PAGE/digital publication 1.png';
import SixCardSlider from '../components/BlogSection/SixCardSlider';

const Events = () => {
  return (
    <>
      <section className='events-section-container'>
        <img src={ff} className='img-fluid w-100' />
        <div className="container text-hero--events">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h1 className="text-center">CONFERENCE & EVENTS</h1>
              <hr />
              <p className="text-center">Panav Biotech Organizing conferences and participate in events across india.</p>

            </div>
          </div>
        </div>
      </section>

      <section>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <img src={f1} className="img-fluid w-100" />
            </div>
            <div className="col-md-5">
              <h2 className="text-centerr">Our Last Year Event</h2>
              <p>PaNAV BIOTECH IN ASSOCIATION WITH PETS PRACTITIONERS ASSOCIATION OF MUMBAI (PPAM) ORGANIZED PANAV BIOTECH SYMPOSIUM 2023</p>
              <p>Panav Biotech and Candioli Pharma in association with PETS PRACTITIONERS ASSOCIATION OF MUMBAI (PPAM) Organized Panav Biotech Symposium 2023 on New Diagnosis and Management of Chronic Kidney Disease (CKD) & Chronic Pain. The event was held at the Radisson Blu Mumbai, and over 200 veterinarians attended the event.</p>
            </div>
          </div>
        </Container>
      </section>


      <section>
        <SixCardSlider />
      </section>



      <section>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2>Join Our Interactive Webinars and Google Meet Sessions!</h2>
              <p>Stay ahead with real-time learning experiences, expert insights, and live Q&A sessions!</p>
              <Button>Join Now</Button>
            </div>
            <div className="col-md-6">
              <img src={f2} className='img-fluid w-100' />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src={f3} className='img-flud w-100' />
            </div>
            <div className="col-md-6">
              <h1>Digital Publication and Online Advertisement</h1>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </Container>
      </section>


    </>
  )
}

export default Events
