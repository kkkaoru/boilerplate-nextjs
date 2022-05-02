import './button.scss';
import type { ExampleButtonProps } from './button.types';

/**
 * Primary UI component for user interaction
 */
export function ExampleButton({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ExampleButtonProps) {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
