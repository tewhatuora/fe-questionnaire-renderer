/// <reference types="react" />
interface Props {
    basePath: string;
    useCompletedPage: boolean;
    useReviewPage: boolean;
}
export default function NavigationButtons({ basePath, useCompletedPage, useReviewPage }: Props): JSX.Element | null;
export {};
