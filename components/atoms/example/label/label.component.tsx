import type { ExampleLabelProps } from './label.types';
import styles from './label.module.scss';

export function ExampleLabel({ text }: ExampleLabelProps): JSX.Element {
  return <span className={styles.label}>{text}</span>;
}
