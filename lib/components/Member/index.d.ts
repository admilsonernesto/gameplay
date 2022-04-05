/// <reference types="react" />
export declare type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
};
declare type Props = {
    data: MemberProps;
};
export declare function Member({ data }: Props): JSX.Element;
export {};
