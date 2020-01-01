/**
 * Internal dependencies
 */

import { EDITOR_LAST_DRAFT_SET } from 'state/action-types';

/**
 * Returns an action object signalling that the editor last draft should be set
 * to the specified site ID, post ID pair.
 *
 * @param  {number} siteId Site ID
 * @param  {number} postId Post ID
 * @return {object} Action object
 */
export function setEditorLastDraft( siteId, postId ) {
	return {
		type: EDITOR_LAST_DRAFT_SET,
		siteId,
		postId,
	};
}

/**
 * Returns an action object signalling that the editor last draft should be
 * unassigned.
 *
 * @return {object} Action object
 */
export function resetEditorLastDraft() {
	return setEditorLastDraft( null, null );
}
