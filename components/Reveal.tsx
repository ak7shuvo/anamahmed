import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Marker for a hairline rule that draws as its section scrolls into view. Server component: it only sets
 * data-reveal; MotionRoot adds `.is-in`. The content itself is never hidden, and rules are static under
 * prefers-reduced-motion or if the motion module fails to start.
 */
export default function Reveal({ as: Tag = "div", variant = "rule", className, style, children, ...rest }: {
  as?: ElementType; variant?: "rule"; className?: string; style?: CSSProperties; children?: ReactNode;
} & Record<string, unknown>) {
  return <Tag data-reveal={variant} className={className} style={style} {...rest}>{children}</Tag>;
}
