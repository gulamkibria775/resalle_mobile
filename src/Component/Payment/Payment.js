import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from './Loading';
import CheckoutForm from './CheckoutForm';
import useTitle from '../../hooks/useTitle';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const stripePromise = loadStripe('pk_test_51M9897Kx10OnPie74PagJYh3IctHLV9nfyDxnP3uyw2eWyRod3C7ZeOh98KKznUAafVDaodkcfjfOdczt2e9ncw300PM9bJNVI');

const Payment = () => {
    useTitle("payment")
    const booking = useLoaderData();
    const navigation = useNavigation();
    console.log('bookin',booking)
    const { product_name, price } = booking[0];
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl">Payment for <span className=' text-emerald-600'>{product_name}</span></h3>
            <p className="text-xl">Please pay <strong className='text-red-600'>${price}</strong> for your service</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;