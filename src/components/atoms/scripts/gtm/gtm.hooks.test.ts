import { renderHook } from '@testing-library/react-hooks';
import { useGenerateGTMScriptTemplate } from './gtm.hooks';

describe('useGenerateGTMScriptTemplate', () => {
  const original = process.env.NEXT_PUBLIC_GTM_ID;
  beforeEach(() => {
    process.env.NEXT_PUBLIC_GTM_ID = original;
  });
  it('should return gtm template', () => {
    process.env.NEXT_PUBLIC_GTM_ID = 'GTM-I2E45';
    const { result } = renderHook(() => useGenerateGTMScriptTemplate());
    expect(result.current).toEqual(`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-I2E45');
  `);
  });

  it('should return undefined', () => {
    delete process.env.NEXT_PUBLIC_GTM_ID;
    const { result } = renderHook(() => useGenerateGTMScriptTemplate());
    expect(result.current).toBeUndefined();
  });
});
