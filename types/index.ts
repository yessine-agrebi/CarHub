import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit" | "reset";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface searchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}