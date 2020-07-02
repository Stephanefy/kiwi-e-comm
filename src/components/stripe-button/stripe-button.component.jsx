import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H0OB4JMSgFyeUz2KrSgfS6F7McYXTGcf0z3Pq9MZzgyxoBEkWYaDXtCllw3tX3TdnKyhB8ogp2TzBm44R6eYDFW004npDi8YH'

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Kiwi Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

};

export default StripeCheckoutButton;