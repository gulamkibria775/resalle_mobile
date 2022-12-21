import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import Loading from "../Loading/Loading";

const CheckoutForm = ({ booking }) => {
  useTitle("Checkout");
  console.log("booking", booking);
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setisLoading] = useState();
  // const { price, email,product_name , _id } = booking;
  const { price, email, product_name, _id } = booking[0];
  console.log("bookingg,", _id, email, product_name, price);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://server-site-gulamkibria775.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ price: price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: product_name,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("https://server-site-gulamkibria775.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';

// const CheckoutForm = ({ booking }) => {

//     console.log("booking",booking)
//     const [cardError, setCardError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [processing, setProcessing] = useState(false);
//     const [transactionId, setTransactionId] = useState('');
//     const [clientSecret, setClientSecret] = useState("");

//     const stripe = useStripe();
//     const elements = useElements();
//     // const { price, email,product_name , _id } = booking;
//     const { price, email,product_name , _id } = booking[0];
//     console.log("booking",price)

//     useEffect(() => {
//         // Create PaymentIntent as soon as the page loads
//         fetch("https://server-site-gulamkibria775.vercel.app/create-payment-intent", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 // authorization: `bearer ${localStorage.getItem('accessToken')}`
//             },
//             body: JSON.stringify({ price:price }),
//         })
//             .then((res) => res.json())
//             .then((data) => setClientSecret(data.clientSecret));
//     }, [price]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return
//         }

//         const card = elements.getElement(CardElement);
//         if (card === null) {
//             return;
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         });

//         if (error) {
//             console.log(error);
//             setCardError(error.message);
//         }
//         else {
//             setCardError('');
//         }
//         setSuccess('');
//         setProcessing(true);
//         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
//             clientSecret,
//             {
//                 payment_method: {
//                     card: card,
//                     billing_details: {
//                         name: product_name,
//                         email: email
//                     },
//                 },
//             },
//         );

//         if (confirmError) {
//             setCardError(confirmError.message);
//             return;
//         }
//         if (paymentIntent.status === "succeeded") {
//             console.log('card info', card);
//             // store payment info in the database
//             const payment = {
//                 price,
//                 transactionId: paymentIntent.id,
//                 email,
//                 bookingId:_id
//             }
//             fetch('https://server-site-gulamkibria775.vercel.app/payments', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json',
//                     // authorization: `bearer ${localStorage.getItem('accessToken')}`
//                 },
//                 body: JSON.stringify(payment)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     if (data.insertedId) {
//                         setSuccess('Congrats! your payment completed');
//                         setTransactionId(paymentIntent.id);
//                     }
//                 })
//         }
//         setProcessing(false);

//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button
//                     className='btn btn-sm mt-4 btn-primary'
//                     type="submit"
//                     disabled={!stripe || !clientSecret || processing}>
//                     Pay
//                 </button>
//             </form>
//             <p className="text-red-500">{cardError}</p>
//             {
//                 success && <div>
//                     <p className='text-green-500'>{success}</p>
//                     <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
//                 </div>
//             }
//         </>
//     );
// };

// export default CheckoutForm;
