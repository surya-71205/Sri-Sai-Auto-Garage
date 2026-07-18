import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-12", centered && "items-center text-center", className)}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground uppercase relative z-10">
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full" />
        {centered && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-full" />}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}