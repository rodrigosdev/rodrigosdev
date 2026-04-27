/**
 * Main page wrapper providing theme, smooth scrolling, and WebGL context.
 *
 * IMPORTANT: This component ALREADY includes <Header> and <Footer>.
 * Do NOT add Header/Footer to layout.tsx or individual pages - they render here.
 *
 * Customize the Header and Footer components
 */
"use client";

import cn from "clsx";

/**
 * Props for the Wrapper component.
 */
interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Main page wrapper component.
 *
 * This component serves as the root container for pages and layout structure.
 * It includes navigation and footer.
 *
 * @param props - Component props
 * @param props.children - Page content
 * @param props.className - Additional CSS classes
 *
 * @example
 * ```tsx
 * // Basic usage with theme
 * export default function Page() {
 *   return (
 *     <Wrapper theme="dark">
 *       <section>My page content</section>
 *     </Wrapper>
 *   )
 * }
 * ```
 */
export function Wrapper({ children, className, ...props }: WrapperProps) {
  return (
    <main
      id="main-content"
      className={cn("relative flex grow flex-col", className)}
      {...props}
    >
      {children}
    </main>
  );
}
