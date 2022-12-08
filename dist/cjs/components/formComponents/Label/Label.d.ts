import { ReactNode } from 'react';
export interface LabelProps {
    children: ReactNode;
    className?: string;
    htmlFor: string;
}
export default function Label({ children, className, htmlFor }: LabelProps): JSX.Element;
