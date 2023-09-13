import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_2 from "../images/travel_2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-color">Welcome to Ticket Booking System</h1>
            <p>
              Our Online Ticket Booking System is designed with the user's
              convenience in mind, offering a seamless booking process that
              saves time and effort. Navigating through the website is
              intuitive, making it easy for both tech-savvy users and those less
              familiar with online booking platforms. The user-friendly
              interface allows travelers to quickly search for available train
              options, view schedules, and compare fares. Our system provides
              clear and detailed information about each train, including
              departure and arrival times, stops along the route, and available
              amenities, enabling customers to make informed decisions based on
              their preferences and needs.
            </p>
            <p>
              With our system, administrators can efficiently manage employee
              records, assign roles and permissions, generate reports, and
              oversee the overall employee management workflow. Employees can
              access their profiles, view their schedules, request leave, and
              communicate with their managers. Managers can easily track
              employee performance, approve requests, and ensure smooth
              operations within their teams.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={travel_2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
