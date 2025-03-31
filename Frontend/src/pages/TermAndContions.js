import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Conditions"} />
      <BreadCrumb title="Terms and Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Terms and Conditions</h2>
              <p>
                Welcome to Patel Trader Chip Company. By accessing our website and purchasing our products, you agree to comply with the following terms and conditions.
              </p>
              <h3>1. General</h3>
              <p>
                These terms apply to all users of our website. We reserve the right to update or modify these terms at any time.
              </p>
              <h3>2. Products & Pricing</h3>
              <p>
                All prices listed on our website are subject to change without notice. We strive to ensure accuracy but do not guarantee pricing errors.
              </p>
              <h3>3. Orders & Payments</h3>
              <p>
                All orders are subject to availability. We accept various payment methods and ensure secure transactions.
              </p>
              <h3>4. Returns & Refunds</h3>
              <p>
                Products can be returned within 7 days if they are defective or damaged. Customers must contact us for return authorization.
              </p>
              <h3>5. Warranty</h3>
              <p>
                Our chips come with a limited warranty covering manufacturing defects. Improper usage or modification voids the warranty.
              </p>
              <h3>6. Limitation of Liability</h3>
              <p>
                Patel Trader Chip Company is not responsible for any indirect, incidental, or consequential damages arising from the use of our products.
              </p>
              <h3>7. Governing Law</h3>
              <p>
                These terms are governed by the laws of [Your State/Country], and any disputes will be resolved in local courts.
              </p>
              <h3>8. Contact Us</h3>
              <p>
                If you have any questions, please contact us at support@pateltrader.com.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;