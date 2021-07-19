import * as React from 'react';
import styles from './Clock.module.scss';

export interface IClockProps {
  description: string
}

export const Clock: React.FunctionComponent<IClockProps> = (props: React.PropsWithChildren<IClockProps>) => {
  return (
    <div>
      <span className={styles.desc}>{props.description}</span>
    </div>
  );
};