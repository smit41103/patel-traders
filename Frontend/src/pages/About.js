import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const About = () => {
  return (
    <>
      <Meta title={"About Us - Patel Traders"} />
      <BreadCrumb title="About Us" />
      <Container className="about-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h2>About Patel Traders</h2>
            <p>
              Established in 2002, Patel Traders has emerged as a leading name in
              the manufacturing, exporting, wholesale, and trading of high-quality
              Chip Resetters and Resetting Devices. Our product range includes the
              Apex Unismart Laser Chip Programmer, Packing Materials Airbag, Packing
              Rolls, and HP 1918 Dye-Based Black Print Cartridge. With an emphasis
              on quality and customer satisfaction, we strive to deliver only the
              best products in the industry.
            </p>
            <h3>Our Mission</h3>
            <p>
              To provide innovative and reliable solutions while maintaining
              exceptional quality and customer service.
            </p>
            <h3>Our Vision</h3>
            <p>
              To become the most trusted and preferred brand in chip resetting
              solutions and electronic components worldwide.
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Experienced R&D team</li>
              <li>Strong financial position</li>
              <li>Custom solutions tailored to your needs</li>
              <li>Large product line with superior quality</li>
              <li>Timely delivery and excellent customer support</li>
            </ul>
            <h3>Company Details</h3>
            <p><strong>CEO:</strong> Mahesh Patel</p>
            <p><strong>Registered Address:</strong> No. 26, Mahalaxmi Market 1, Near Maninagar Char Rasta, Ahmedabad-380008, Gujarat, India</p>
            <p><strong>Annual Turnover:</strong> 5 - 25 Cr</p>
            <p><strong>Legal Status:</strong> Proprietorship</p>
            <h3>Contact Us</h3>
            <p>For inquiries, collaborations, or product information, feel free to reach out to us.</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;