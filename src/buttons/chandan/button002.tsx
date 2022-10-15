//custom button for react
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
}   
const Button: React.FC<Props> = ({
    border,
    color,
    children,
    height,
    onClick,
    radius,
    width
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width
            }}
        >
            {children}
        </button>
    );
}
export default Button;
