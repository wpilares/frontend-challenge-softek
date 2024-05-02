import { type ReactNode } from 'react';

export type ChildrenType = string | ReactNode;

export interface IClassName {
  className?: string;
}

export interface IOnClick {
  onClick?: () => void;
}

export type ColorType = 'black' | 'white' | 'blue';

export type FontFamilyType = 'sonoma' | 'lato';

export type WeightType = 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';
