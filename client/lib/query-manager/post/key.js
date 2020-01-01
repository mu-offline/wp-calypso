/**
 * External dependencies
 */
import { omitBy } from 'lodash';

/**
 * Internal dependencies
 */
import PaginatedQueryKey from '../paginated/key';
import { DEFAULT_POST_QUERY } from './constants';

/**
 * Returns true if the specified key value query pair is identical to that of
 * the default post query, is null, or is undefined.
 *
 * @param  {*}       value Value to check
 * @param  {string}  key   Key to check
 * @return {boolean}       Whether key value matches default query or is null
 */
function isDefaultOrNullQueryValue( value, key ) {
	return (
		null == value || DEFAULT_POST_QUERY[ key ] === value // Double-equals null checks undefined, null
	);
}

/**
 * PostQueryKey manages the serialization and deserialization of a query key
 * for use in tracking query results in an instance of PostQueryManager.
 */
export default class PostQueryKey extends PaginatedQueryKey {
	/**
	 * Returns a serialized query, given a query object
	 *
	 * @param  {object} query Query object
	 * @return {string}       Serialized query
	 */
	static stringify( query ) {
		return super.stringify( omitBy( query, isDefaultOrNullQueryValue ) );
	}

	/**
	 * Returns a query object, given a serialized query
	 *
	 * @param  {string} key Serialized query
	 * @return {object}     Query object
	 */
	static parse( key ) {
		return omitBy( super.parse( key ), isDefaultOrNullQueryValue );
	}
}
