import { getByText, render, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './button.stories';

describe('ExampleButton', () => {
  const { Default } = composeStories(stories);

  it('should exec onClick when click button', async () => {
    const mockOnClick = jest.fn();
    const { container } = render(<Default onClick={mockOnClick} />);
    const button = getByText(container, 'Button');
    await fireEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
