/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * @param {object} state Global app state
 * @param {number} siteId - site ID
 * @return {boolean} Signals whether or not there is currently a request in progress for the given siteId
 */
export default ( state, siteId ) =>
	get( state, [ 'siteAddressChange', 'requesting', siteId ], null );
