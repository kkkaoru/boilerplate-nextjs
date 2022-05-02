import { GlobalStyles } from '../styles/global';
import('ress');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyles />
      <Story />
    </div>
  ),
];
