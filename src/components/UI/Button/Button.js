import css from './Button.module.css';

const Button = ({children, ...props}) => {

    return (
        <button {...props} className={css.Button}>
            {children}
        </button>
    );
};

export {
    Button
};
