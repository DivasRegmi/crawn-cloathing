import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishableKey =
    "pk_test_51H4jDrBnLHAgrKLjpaPfvtbp5mtKS8gr1GznUDAPAiHP25WGLJNc7WALlrfn4Y1qrGN5mku4gnuLJLvYD34efPQE00nhMaXX9U";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return(
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing LTD."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
};

export default StripeCheckoutButton;
