/// <reference types="react" />
import { TouchableOpacityProps } from 'react-native';
export declare type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
};
declare type Props = TouchableOpacityProps & {
    data: GuildProps;
};
export declare function Guild({ data, ...rest }: Props): JSX.Element;
export {};
