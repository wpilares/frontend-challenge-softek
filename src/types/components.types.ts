import {
  type ChildrenType,
  type ColorType,
  type FontFamilyType,
  type IClassName,
  type WeightType,
} from '@src/types/base.types.ts';
import { type CSSProperties } from 'react';

export interface TextProps extends IClassName {
  children: ChildrenType;
  color?: ColorType;
  style?: CSSProperties;
  family?: FontFamilyType;
  weight?: WeightType;
}

export interface FormProps {
  dni: string;
  documentType: string;
  phone: string;
  name: string;
  lastName: string;
  birthDay: string;
}
