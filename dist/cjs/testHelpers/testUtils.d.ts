/// <reference types="react" />
import { RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
export declare const testQuestionnaire: import("../types").Questionnaire;
export interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    route?: string;
    withRouter?: boolean;
}
declare const render: (ui: JSX.Element, options?: CustomRenderOptions) => RenderResult;
declare const textContentMatcher: (text: string) => (_content: string, node: Element | null) => boolean;
export { render, textContentMatcher, userEvent };
export * from '@testing-library/react';
