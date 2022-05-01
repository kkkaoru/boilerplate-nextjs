import { css } from '@emotion/react';
import type { ExampleLabelProps } from './label.types';

export function ExampleLabel({ text }: ExampleLabelProps): JSX.Element {
  return (
    <span
      css={css`
        font-size: 24px;
        color: red;
      `}
    >
      {text}
    </span>
  );
}
