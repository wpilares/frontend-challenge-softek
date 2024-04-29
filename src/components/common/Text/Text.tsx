import { type ReactElement } from 'react';
import './text.scss';
import { type TextProps } from '@types';

export const Text = ({
  color = 'black',
  style,
  children,
  family = 'sonoma',
  weight = 'regular',
  className,
}: TextProps): ReactElement => {
  return (
    <p
      className={`text ${color} ${weight} ${family} ${className}`}
      style={style}>
      {children}
    </p>
  );
};
