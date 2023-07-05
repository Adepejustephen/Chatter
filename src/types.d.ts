import { ElementType, ReactNode } from "react";
import { SIZES } from "./components/ui/utils/constant";


interface ButtonProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * @ignore
   */
  className?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * @ignore
   */
  type?: "button" | "reset" | "submit";
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: "contained" | "outlined" | "text" | string;
  /**
   * trigger button click
   */
  onClick?: () => void;
  darkMode?: boolean;
  color?: "secondary" | "primary";
  size?: string;
  loading?: boolean;
}

export type Colors =
  | "default"
  | "primary"
  | "textPrimary"
  | "secondary"
  | "textSecondary"
  | "textTertiary"
  | "error"
  | "white";

interface PolymorphicAsProps<E extends ElementType> {
  as?: E | "span" | "p" | "h6" | "h5" | "h4" | "h3" | "h2" | "h1";
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom?: boolean;
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: "inherit" | "left" | "center" | "right" | "justify";
  /**
   *
   */
  color?: Colors;
  /**
   * Paragraph
   */
  paragraph?: boolean;
  /**
   * Font variation for typography.
   */
  variant?:
    | "display"
    | "subdisplay"
    | "header"
    | "title"
    | "body"
    | "caption"
    | "link"
    | "text";
  /**
   * Override or set the component style.
   */
  className?: string;
  /**
   * Passing content to the component.
   */
  children?: ReactNode;
  isDarkMode?: boolean;
  disableUnderline?: boolean;
}

type TypographyProps<E extends ElementType> = PolymorphicAsProps<E>;

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}


interface CardProps {
  elevation?: 1 | 2 | 3 | 4 | 5;
  children?: ReactNode;
  className?: string;
}