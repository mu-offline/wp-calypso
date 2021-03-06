/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { getSelectedSiteId } from 'state/ui/selectors';

/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} orderId Order ID to check
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {Array} List of refund objects
 */
export const getOrderRefunds = ( state, orderId, siteId = getSelectedSiteId( state ) ) => {
	return get(
		state,
		[ 'extensions', 'woocommerce', 'sites', siteId, 'orders', 'refunds', orderId, 'items' ],
		[]
	);
};

/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} orderId Order ID to check
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether an order refund has been requested (or completed)
 */
export const isOrderRefunding = ( state, orderId, siteId = getSelectedSiteId( state ) ) => {
	const isSaving = get( state, [
		'extensions',
		'woocommerce',
		'sites',
		siteId,
		'orders',
		'refunds',
		orderId,
		'isSaving',
	] );
	// Strict check because it could also be undefined.
	return true === isSaving;
};
