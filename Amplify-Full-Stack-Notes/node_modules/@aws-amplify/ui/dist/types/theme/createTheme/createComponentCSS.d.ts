import { WebTheme } from '../types';
import { ComponentsTheme } from '../components';
import { BaseTheme } from '../components/utils';
export declare function recursiveComponentCSS(baseSelector: string, theme: BaseTheme): string;
interface CreateComponentCSSParams {
    theme: Pick<WebTheme, 'tokens' | 'breakpoints' | 'name'>;
    components: Array<ComponentsTheme>;
}
/**
 * This will take a component theme and create the appropriate CSS for it.
 *
 */
export declare function createComponentCSS({ theme, components, }: CreateComponentCSSParams): string;
export {};
