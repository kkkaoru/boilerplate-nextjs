import { useGenerateGTMScriptTemplate } from './gtm.hooks';

export function GtmScript() {
  const template = useGenerateGTMScriptTemplate();
  return template ? (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: template,
      }}
    />
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
}
