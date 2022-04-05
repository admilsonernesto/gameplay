/// <reference types="react" />
declare type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
};
export declare function CategorySelect({ categorySelected, setCategory, hasCheckBox, }: Props): JSX.Element;
export {};
