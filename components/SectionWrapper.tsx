import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`body-container py-12 sm:py-16 ${className}`}
    >
      {children}
    </section>
  );
}
