import * as React from 'react';
import { createGlobalCSS } from '@aws-amplify/ui';
import { Style } from './Style.mjs';

/**
 * @experimental
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/theme)
 */
const GlobalStyle = ({ styles, ...rest }) => {
    if (!styles) {
        return null;
    }
    const cssText = createGlobalCSS(styles);
    return React.createElement(Style, { ...rest, cssText: cssText });
};
GlobalStyle.displayName = 'GlobalStyle';

export { GlobalStyle };
