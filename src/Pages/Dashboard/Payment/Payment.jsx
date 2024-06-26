import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../../Components/CheckOutForm/CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)
const Payment = () => {
  return (
    <div className="p-4">
      <SectionTitle
      heading="Payment"
      subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
      </div>
    </div>
  );
};

export default Payment;