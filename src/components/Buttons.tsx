import clsx from 'clsx';

type ButtonProps = {
    animation? : string
    children : React.ReactNode


} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children,animation,className,...props}: ButtonProps) => {

    return (
        <button className={className + " " + animation} {...props}>
            {children}
        </button>
    )

}