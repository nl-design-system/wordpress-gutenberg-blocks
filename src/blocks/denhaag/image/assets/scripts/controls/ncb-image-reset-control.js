import { _x } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { ReactComponent as icon } from '../../icons/reset-image.svg';

/**
 * Returns the Reset Image Toolbar Controller.
 *
 * @param {boolean} isDisabled If this controller is disabled or not.
 * @param {function} setAttributes setAttributes object of Gutenberg.
 * @return {unknown}
 * @constructor
 */
const NCB_ImageResetControl = ( { isDisabled = false, setAttributes } ) => {
	// On update `value` the controller will be rendered.
	return useMemo( () => {
		return (
			<ToolbarButton
				onClick={ () =>
					setAttributes( {
						image: 0,
						download: false,
						hasCaption: false,
						caption: '',
					} )
				}
				icon={ icon }
				label={ _x(
					'Reset image',
					'ncb-denhaag/image: Control label',
					'nlds-community-blocks'
				) }
				disabled={ isDisabled }
			/>
		);
	}, [ isDisabled ] );
};

export default NCB_ImageResetControl;
