/// <reference types="react" />
import { RectButtonProps } from 'react-native-gesture-handler';
import { GuildProps } from '../Guild';
export declare type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
};
declare type Props = RectButtonProps & {
    data: AppointmentProps;
};
export declare function Appointment({ data, ...rest }: Props): JSX.Element;
export {};
