/// <reference types="react" />
import { RectButtonProps } from 'react-native-gesture-handler';
declare type Props = RectButtonProps & {
    title: string;
};
export declare function Button({ title, ...rest }: Props): JSX.Element;
export {};
