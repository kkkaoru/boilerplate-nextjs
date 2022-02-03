import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { GtmScript } from '../components/atoms/scripts/gtm';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <GtmScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
