import { ReactNode } from 'react';
import { ButtonVariantTypes } from '../../../types';
export interface ButtonProps {
    ariaLabel?: string;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    id?: string;
    type: 'button' | 'submit';
    variant?: ButtonVariantTypes;
    onClick?: () => void;
}
export default function Button({ ariaLabel, children, className, disabled, id, onClick, type, variant }: ButtonProps): JSX.Element;
