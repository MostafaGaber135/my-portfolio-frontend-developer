import { ReactNode } from "react";
import clsx from "clsx";

export default function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("py-20 border-b border-white/10", className)}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{title}</h2>
      {children}
    </section>
  );
}
