/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { useLocalize } from '../lib/localize';
import Button from './button';
import { useFormStatus } from '../lib/form-status';

// The react-stripe-elements PaymentRequestButtonElement cannot have its
// paymentRequest updated once it has been rendered, so this is a custom one.
// See: https://github.com/stripe/react-stripe-elements/issues/284
export default function PaymentRequestButton( {
	paymentRequest,
	paymentType,
	disabled,
	disabledReason,
} ) {
	const localize = useLocalize();
	const { formStatus, setFormReady, setFormSubmitting } = useFormStatus();
	const onClick = event => {
		event.persist();
		event.preventDefault();
		setFormSubmitting();
		paymentRequest.on( 'cancel', setFormReady );
		paymentRequest.show();
	};
	if ( ! paymentRequest ) {
		disabled = true;
	}

	if ( formStatus === 'submitting' ) {
		return (
			<Button disabled fullWidth>
				{ localize( 'Completing your purchase', { context: 'Loading state on /checkout' } ) }
			</Button>
		);
	}
	if ( disabled ) {
		return (
			<Button disabled fullWidth>
				{ disabledReason }
			</Button>
		);
	}

	if ( paymentType === 'apple-pay' ) {
		return <ApplePayButton onClick={ onClick } />;
	}
	return (
		<Button onClick={ onClick } fullWidth>
			{ localize( 'Select a payment card', { context: 'Loading state on /checkout' } ) }
		</Button>
	);
}

PaymentRequestButton.propTypes = {
	paymentRequest: PropTypes.object,
	paymentType: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	disabledReason: PropTypes.string,
};

const ApplePayButton = styled.button`
	-webkit-appearance: -apple-pay-button;
	-apple-pay-button-style: black;
	-apple-pay-button-type: plain;
	width: 100%;
`;
