import * as React from 'react';
import { WebTheme } from '@aws-amplify/ui';
interface ThemeStyleProps extends React.ComponentProps<'style'> {
    /**
     * Provide a server generated nonce which matches your CSP `style-src` rule.
     * This will be attached to the generated <style> tag.
     * @see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
     */
    nonce?: string;
    theme?: WebTheme;
}
/**
 * @experimental
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/theme)
 */
export declare const ThemeStyle: {
    ({ theme, ...rest }: ThemeStyleProps): JSX.Element | null;
    displayName: string;
};
export {};
