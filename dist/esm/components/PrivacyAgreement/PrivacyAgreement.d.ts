/// <reference types="react" />
import { Input } from '../../types';
interface Props {
    basePath: string;
    input?: Input;
    pageContent: JSX.Element;
}
export default function PrivacyAgreement({ basePath, input, pageContent }: Props): JSX.Element | null;
export {};
