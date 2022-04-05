/// <reference types="react" />
import { GuildProps } from '../../components/Guild';
declare type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
};
export declare function Guilds({ handleGuildSelect }: Props): JSX.Element;
export {};
