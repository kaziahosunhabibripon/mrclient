import React from "react";
import Container from "../Shared/Container";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Container>
        <div className="p-4 ">
          <h1 className="font-montserrat text-[#1C91E4] text-4xl py-4 font-medium">
            About
          </h1>
          <div className="p-2">
            <p className="font-montserrat">
              What design are you looking for today? Home Messages Notifications
              Contact Join Dashboard Designs Companies Price List Project About
              About We are a team of graphic designers. We are located in
              Sylhet, Bangladesh. We have worked with many online marketplaces
              since 2016 with graphics design. And we've been successful in
              those marketplaces. Now we have created this site in 2023. We want
              to help many businesses worldwide improve their business through
              marketing design based on our experience.
            </p>
            <div>
              <h4 className="text-[#1C91E4] text-xl py-4 font-medium">
                What kind of designs do we like to create?
              </h4>
              <p>
                We like to create all kinds of business advertising designs.
                Print design and social media post design. Most of the designs
                we create.
                <ul>
                  <li> ✓ Door Hanger Design</li>
                  <li> ✓ Flyer Design </li>
                  <li> ✓ Postcard Design </li>
                  <li> ✓ Poster Design </li>
                  <li> ✓ Rack Card Design </li>
                  <li> ✓ Business Card Design </li>
                  <li> ✓ Brochure Design</li>
                  <li> ✓ Social Media Post Design </li>
                  <li> ✓ Facebook Cover Design </li>
                  <li> ✓ Billboard Design </li>
                  <li> ✓ Yard Sign Design </li>
                  <li> ✓ Roll-up Banner Design </li>
                  <li> ✓ Sidewalk Sign Design</li>
                  <li> ✓ Trade Show Banner Design </li>
                  <li> ✓ Menu Design</li>
                  <li> ✓ Magazine Cover Design </li>
                  <li> ✓ Magazine Ads Design </li>
                  <li> ✓ Book Cover Design</li>
                  <li> ✓ Podcast Cover Design </li>
                  <li> ✓ And Much More </li>
                </ul>
              </p>
            </div>
            <h1 className="text-[#1C91E4] text-xl py-4 font-medium">
              Why should you choose us for your design?
            </h1>
            <p className="font-montserrat">
              We create every design for a specific business. Due to this the
              contents of each of our designs are of the right quality. After
              the business owners/customers see our designs, they no longer have
              to worry about the content of the designs. The business
              owner/customer can choose any design from the many designs created
              by us and easily edit that design with their own information
              through us. Or the business owner/customer can create a new design
              through us with some ideas from these designs. Also, if the
              business owner/customer already has a design idea of his own.
              However, we make designs according to their own ideas.
            </p>
            <p>
              (
              <Link
                to=""
                className="font-montserrat text-[#1C91E4] underline underline-offset-1 px-1"
              >
                Click here
              </Link>
              to see which businesses we have already created designs for.)
              Also, we can design for any business other than the businesses we
              have already designed for. For that, the business owner/customer
              must give us their design information.
            </p>
            What are our future plans? Our main goal is to create advertising
            designs for different types of businesses. We have already created
            many types of advertising designs. We will create more different
            types of advertising designs in the coming days. So that the
            advertising work of businesses becomes easier through our designs.
            MR mahfujurrahm535 Graphic Designer Home About Designs Companies
            Price List Project Contact Affiliate f O Pin Email:-
            mahfujurrahm535@gmail.com Terms and Conditions | Privacy Policy
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
