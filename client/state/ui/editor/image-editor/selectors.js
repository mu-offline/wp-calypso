/**
 * Returns an object representing the image editor transform
 *
 *
 * @param {object}  state Global state tree
 * @return {object}  image editor transform { degrees, scaleX, scaleY }
 */

export function getImageEditorTransform( state ) {
	return state.ui.editor.imageEditor.transform;
}

/**
 * Returns an object containing the image data loaded in the editor
 *
 * @param  {object}  state Global state tree
 * @return {object}  image data { src, fileName }
 *
 */
export function getImageEditorFileInfo( state ) {
	return state.ui.editor.imageEditor.fileInfo;
}

/**
 * Returns true if there were any changes made to the editor
 *
 * @param  {object}  state Global state tree
 * @return {boolean} true if editor has changes
 *
 */
export function imageEditorHasChanges( state ) {
	return state.ui.editor.imageEditor.hasChanges;
}

/**
 * Returns true if image has been loaded.
 *
 * @param  {object}  state Global state tree
 * @return {boolean} true if image has been loaded
 *
 */
export function isImageEditorImageLoaded( state ) {
	return ! state.ui.editor.imageEditor.imageIsLoading;
}

/**
 * Returns the bounds of the canvas crop tool
 *
 * @param  {object} state Global state tree
 * @return {object} topBound, leftBound, bottomBound and rightBound of the canvas
 *
 */
export function getImageEditorCropBounds( state ) {
	return state.ui.editor.imageEditor.cropBounds;
}

/**
 * Returns the crop data for the image editor
 *
 * @param  {object} state Global state tree
 * @return {object} topRatio, leftRatio, widthRatio and heightRatio of the crop
 *
 */
export function getImageEditorCrop( state ) {
	return state.ui.editor.imageEditor.crop;
}

/**
 * Returns the crop data for the image editor
 *
 * @param  {object} state Global state tree
 * @return {object} one of the AspectRatios as defined in state/ui/editor/image-editor/constants
 *
 */
export function getImageEditorAspectRatio( state ) {
	return state.ui.editor.imageEditor.aspectRatio;
}
