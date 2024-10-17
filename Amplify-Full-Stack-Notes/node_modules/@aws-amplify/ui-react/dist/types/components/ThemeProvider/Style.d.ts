import * as React from 'react';
interface StyleProps extends React.ComponentProps<'style'> {
    cssText?: string;
}
/**
 * @experimental
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/theme)
 */
export declare const Style: {
    ({ cssText, ...rest }: StyleProps): JSX.Element | null;
    displayName: string;
};
export {};
