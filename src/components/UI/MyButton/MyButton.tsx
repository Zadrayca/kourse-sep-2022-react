import React, {FC, MouseEventHandler, ReactNode} from "react";

import css from './MyButton.module.css';

interface IProps {
    children?: ReactNode;
    onClick:  MouseEventHandler<HTMLButtonElement>;
}

const MyButton: FC<IProps> = ({children, ...props}) => {

    return (
        <button {...props} className={css.Button}>
            {children}
        </button>
    );
};

export {
    MyButton
};