/// <reference types="react" />
import { PopupParams } from '../PopupProvider/PopupProvider';
interface Props {
    popupParams: PopupParams;
    onDismiss?: () => void;
    onRetry?: () => void;
}
declare function ErrorPopup({ popupParams, onDismiss, onRetry }: Props): JSX.Element;
export default ErrorPopup;
