import { Button as MuiButton } from '@material-ui/core';
import * as React from 'react';

export interface ButtonProps {
    children: string;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    variant?: 'text' | 'outlined' | 'contained';
    isDisabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ isDisabled, fullWidth, variant, children, onClick, color, size }) => (
    <MuiButton disabled={isDisabled} fullWidth={fullWidth} size={size} variant={variant} children={children} onClick={onClick} color={color} />
);

export { Button };