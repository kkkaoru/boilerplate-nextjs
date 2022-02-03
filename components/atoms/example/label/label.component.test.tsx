import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './label.stories';

describe('ExampleLabel', () => {
  const { Default } = composeStories(stories);
  it('should be matched snapshot', () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });
});
