import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
declare type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
};
export declare function Category({ title, icon: Icon, checked, hasCheckBox, ...rest }: Props): JSX.Element;
export {};
