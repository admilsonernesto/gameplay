import { ReactNode } from 'react';
import { ModalProps } from 'react-native';
declare type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
};
export declare function ModalView({ children, closeModal, ...rest }: Props): JSX.Element;
export {};
