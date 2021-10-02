import React from "react";
import { Card, Button } from "react-bootstrap";
import { PDFInvoice } from "../../common/invoice";
import "./Checkout.css";

const Checkout = () => {
  const invoiceGenerator = () => {
    const logo = "https://public.easyinvoice.cloud/img/logo_en_original.png";
    const senderDetails = {
      company: "Sample Corp",
      address: "Sample Street 123",
      zip: "1234 AB",
      city: "Sampletown",
      country: "Samplecountry",
    };
    const clientDetails = {
      company: "Client Corp",
      address: "Clientstreet 456",
      zip: "4567 CD",
      city: "Clientcity",
      country: "Clientcountry",
    };
    const invoiceNumber = "2021.0001";
    const invoiceDate = "1.1.2021";
    const products = [
      {
        quantity: "2",
        description: "Test1",
        tax: 6,
        price: 33.87,
      },
      {
        quantity: "4",
        description: "Test2",
        tax: 21,
        price: 10.45,
      },
      {
        quantity: "4",
        description: "Test2",
        tax: 21,
        price: 10.45,
      },
    ];
    const bottomNotice = "Please visit again. Thank you.";
    PDFInvoice(
      logo,
      senderDetails,
      clientDetails,
      invoiceNumber,
      invoiceDate,
      products,
      bottomNotice
    );
  };
  return (
    <div className="checkout-page-wrapper">
      <div className="order-summary-wrapper">Order Summary</div>
      <div className="products-wrapper">PRODUCTS</div>
      <div className="checkout-page-content-wrapper">
        <div className="flex-1">
          <Card className="margin-bottom-12">
            <Card.Body>
              {[1, 2, 3].map((item) => (
                <div className="medicine-card-wrapper">
                  <div className="flex-content-sb">
                    <div className="flex-column">
                      <span className="font-weight-700">Dolo 650 Tablet</span>
                      <span className="tablets-strip">strip of 15 tablets</span>
                    </div>

                    <div className="checkout-price">Rs. 51.56</div>
                  </div>

                  <div className="checkout-page--counter-wrapper">
                    <div className="checkout-counter--wrapper">
                      <div className="increment-decrement-counter-wrapper">
                        -
                      </div>

                      <div classname="checkout-page--counter-value">9</div>

                      <div className="increment-decrement-counter-wrapper">
                        +
                      </div>
                    </div>
                    <div>
                      <Button variant="secondary" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="add-more-items">+ ADD MORE ITEMS</div>
            </Card.Body>
          </Card>
        </div>
        <div className="checkout-payment-details">
          <Card>
            <Card.Body>
              <div className="opacity-6">PAYMENT DETAILS</div>
              <div className="total-amount">
                <div>Total Amount *</div>
                <div>Rs. 111.52</div>
              </div>

              <div className="total-amoount-wrapper">
                <div className="flex-column">
                  <div className="total-amount-wrapper">TOTAL AMOUNT</div>
                  <div className="font-weight-bold">Rs. 111.52</div>
                </div>
                <div>
                  <Button
                    className="checkout-proceed-button"
                    onClick={invoiceGenerator}
                  >
                    DOWNLOAD INVOICE
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
