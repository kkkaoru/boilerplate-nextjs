import { render } from '@testing-library/react';

import { GtmScript } from './gtm.component';

describe('GtmScript', () => {
  it('should be matched snapshot', () => {
    const original = process.env.NEXT_PUBLIC_GTM_ID;
    process.env.NEXT_PUBLIC_GTM_ID = 'GTM-I2E45';
    const { asFragment } = render(<GtmScript />);
    expect(asFragment()).toMatchSnapshot();
    process.env.NEXT_PUBLIC_GTM_ID = original;
  });
});
