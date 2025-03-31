import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <div className="policy">
              <h2>About Patel Traders</h2>
              <p>
                Incorporated in 2002, Patel Traders is a leading Manufacturer, Exporter, 
                Wholesaler, and Trader of high-quality Chip Resetters and Resetting Devices. 
                Our product range includes Apex Unismart Laser Chip Programmer, Packing Materials Airbag, 
                Packing Rolls, and HP 1918 Dye-Based Black Print Cartridge. We are committed to offering 
                top-quality products with a focus on customer satisfaction and innovation.
              </p>
              
              <h3>Company Information</h3>
              <ul>
                <li><strong>Nature of Business:</strong> Trader - Wholesaler/Distributor</li>
                <li><strong>Company CEO:</strong> Mahesh Patel</li>
                <li><strong>Registered Address:</strong> No. 26, Mahalaxmi Market 1, Near Maninagar Char Rasta, 
                  Mani Nagar, Ahmedabad-380008, Gujarat, India</li>
                <li><strong>Total Number of Employees:</strong> Upto 10 People</li>
                <li><strong>Annual Turnover:</strong> 5 - 25 Cr</li>
                <li><strong>GST No.:</strong> 24AHMPP6942M1ZO</li>
              </ul>
              
              <h3>Why Choose Us?</h3>
              <ul>
                <li>Experienced R&D Department</li>
                <li>Good Financial Position & TQM</li>
                <li>Large Product Line</li>
                <li>Timely Delivery</li>
                <li>Customer-Centric Approach</li>
              </ul>
              
              <h3>Infrastructure</h3>
              <ul>
                <li><strong>Location Type:</strong> Urban</li>
                <li><strong>Building Infrastructure:</strong> Permanent</li>
                <li><strong>Size of Premises:</strong> 760 square feet</li>
              </ul>
              
              <h3>Major Markets</h3>
              <ul>
                <li>Africa</li>
                <li>Dubai</li>
                <li>Sri Lanka</li>
                <li>Nepal</li>
                <li>Gulf Countries</li>
              </ul>
              
              <h3>Contact Us</h3>
              <p>
                For more information, inquiries, or business collaborations, feel free to reach out to us.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPloicy;
