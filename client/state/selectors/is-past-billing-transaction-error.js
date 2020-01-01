/**
 * External dependencies
 */

import { get } from 'lodash';

/**
 * Returns true if the past billing transaction fetch errored out
 *
 * @param  {object}  state   Global state tree
 * @param  {number}  id      ID of the transaction
 * @return {Boolean}         True if transaction failed to fetch, false otherwise
 */
export default ( state, id ) =>
	get( state, [ 'billingTransactions', 'individualTransactions', id, 'error' ], false );
