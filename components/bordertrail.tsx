import { cn } from "../app/libs/utils";

interface AnimatedTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The duration of the animation.
   * @default "10s"
   */
  duration?: string;

  contentClassName?: string;

  trailColor?: string;
  trailSize?: "sm" | "md" | "lg";
}

interface CustomStyle extends React.CSSProperties {
  "--duration"?: string;
  "--angle"?: string;
}

const sizes = {
  sm: 5,
  md: 10,
  lg: 20,
};

export default function Bordertrail({
  children,
  className,
  duration = "10s",
  trailColor = "purple",
  trailSize = "md",
  contentClassName,
  ...props
}: AnimatedTrailProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative h-fit w-fit overflow-hidden rounded-2xl bg-zinc-500 m-4 p-px",
        className
      )}
    >
      {/* Animated Trail */}
      <div
        className="absolute inset-0 h-full w-full animate-trail"
        style={{
          "--duration": duration,
          "--angle": "0deg",
          background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${
            100 - sizes[trailSize]
          }%, ${trailColor})`,
        } as CustomStyle}
      />
      {/* Inner Content */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[15px] bg-[#11152c] w-36 h-32",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
