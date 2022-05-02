import { render } from '@testing-library/react';

import Home from './index.page';

describe('Home', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
