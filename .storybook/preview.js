import { themes } from '@storybook/theming';
import { DocsContainer } from "./DocsContainer";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: 'dark',
      dark: {
        ...themes.dark,
        appBg: '#230050',
        barBg: '#230050',
        appContentBg: '#060817'
      },
      light: {
        ...themes.dark,
        appBg: '#230050',
        barBg: '#230050',
        appContentBg: '#FFFFFF'
      }
    },
    docs: {
      container: DocsContainer
    }
  },
};

export default preview;
