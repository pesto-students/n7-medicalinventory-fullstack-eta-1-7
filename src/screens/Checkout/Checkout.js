import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { PDFInvoice } from "../../common/invoice";
import "./Checkout.css";
import ls from "local-storage";
import EmptyState from "../../components/EmptyState/EmptyState";

const Checkout = () => {
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const currentCartData = JSON.parse(ls.get("cartData"));
    if (currentCartData && currentCartData.length > 0) {
      setCartData(currentCartData);
    }
  }, []);

  useEffect(() => {
    let currentTotalAmount = 0;
    cartData.map((item) => {
      currentTotalAmount += item.count * item.sell_price;
    });

    setTotalAmount(currentTotalAmount);
  }, [cartData]);

  const invoiceGenerator = () => {
    const logo =
      "https://www.logomoose.com/wp-content/uploads/2013/08/ms_moose.jpg";
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

  const decrementCountHandler = async (item) => {
    let copyData = { ...item };
    if (copyData.count > 1) {
      copyData.count = copyData.count - 1;
      let filteredDdata = cartData.filter(
        (cartItem) => cartItem.id !== item.id
      );
      await filteredDdata.push(copyData);
      await setCartData(filteredDdata);
      await ls.remove("cartData");
      await ls.set("cartData", JSON.stringify(filteredDdata));
    }
  };

  const incrementCountHandler = async (item) => {
    let copyData = { ...item };
    copyData.count = copyData.count + 1;
    let filteredDdata = cartData.filter((cartItem) => cartItem.id !== item.id);
    await filteredDdata.push(copyData);
    await setCartData(filteredDdata);
    await ls.remove("cartData");
    await ls.set("cartData", JSON.stringify(filteredDdata));
  };

  const removeOrderHandler = async (item) => {
    let lsData = JSON.parse(ls.get("cartData"));
    let filteredData = lsData.filter((lsItem) => lsItem.id !== item.id);

    setCartData(filteredData);
    await ls.remove("cartData");
    await ls.set("cartData", JSON.stringify(filteredData));
  };

  return (
    <div className="checkout-page-wrapper">
      {cartData && cartData.length > 0 ? (
        <>
          <div className="order-summary-wrapper">Order Summary</div>
          <div className="products-wrapper">PRODUCTS</div>
          <div className="checkout-page-content-wrapper">
            <div className="flex-1">
              <Card className="margin-bottom-12">
                <Card.Body>
                  {cartData.map((item) => (
                    <section className="medicine-card-wrapper">
                      <div className="flex-content-sb">
                        <div className="flex-column">
                          <span className="font-weight-700">{item.name}</span>
                          {/* <span className="tablets-strip">
                          strip of 15 tablets
                        </span> */}
                        </div>

                        <div className="checkout-price">
                          Rs. {item.sell_price * Number(item.count)}
                        </div>
                      </div>

                      <div className="checkout-page--counter-wrapper">
                        <div className="checkout-counter--wrapper">
                          <div
                            className="increment-decrement-counter-wrapper"
                            onClick={() => {
                              decrementCountHandler(item);
                            }}
                          >
                            -
                          </div>
                          &nbsp;
                          <div className="checkout-page--counter-value">
                            {item.count}
                          </div>
                          &nbsp;
                          <div
                            className="increment-decrement-counter-wrapper"
                            onClick={() => {
                              incrementCountHandler(item);
                            }}
                          >
                            +
                          </div>
                        </div>
                        <div>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                              removeOrderHandler(item);
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </section>
                  ))}
                </Card.Body>
              </Card>
            </div>
            <div className="checkout-payment-details">
              <Card>
                <Card.Body>
                  <div className="opacity-6">PAYMENT DETAILS</div>
                  <div className="total-amount">
                    <div>Total Amount *</div>
                    <div>Rs. {totalAmount}</div>
                  </div>

                  <div className="total-amoount-wrapper">
                    <div className="flex-column">
                      <div className="total-amount-wrapper">TOTAL AMOUNT</div>
                      <div className="font-weight-bold">Rs. {totalAmount}</div>
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
        </>
      ) : (
        <EmptyState
          actions={
            <h5 className="empty-state-cart">Please add a medicine to cart</h5>
          }
        />
      )}
    </div>
  );
};

export default Checkout;
