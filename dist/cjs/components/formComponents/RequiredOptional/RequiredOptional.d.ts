/// <reference types="react" />
export interface RequiredOptionalProps {
    className?: string;
    required?: boolean;
}
export default function RequiredOptional({ className, required }: RequiredOptionalProps): JSX.Element | null;
