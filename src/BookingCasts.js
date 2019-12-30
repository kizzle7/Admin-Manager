import React from "react";
import CreateProfile from "./Components/CreateProfile";
import DescriptionPage from "./Components/DescriptionPage";
import SignUp from "./Components/SignUp/index";
import Login from "./Components/Login/index";
import LandingPage from "./Components/LandingPage/index";
import ContactUs from "./Components/Contactus/index";
import Next from "./Components/CreateProfile/Next";

class BookingCasts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LandingPage />
      </React.Fragment>
    );
  }
}
export default BookingCasts;
