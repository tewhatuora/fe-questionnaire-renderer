/// <reference types="react" />
import { PopupParams } from '../PopupProvider/PopupProvider';
interface Props {
    popupParams: PopupParams;
    onConfirm?: () => void;
    onDismiss?: () => void;
}
declare function ConfirmationPopup(props: Props): JSX.Element | null;
export default ConfirmationPopup;
