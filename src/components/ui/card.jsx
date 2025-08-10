import * as React from "react";
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative overflow-hidden transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        elevated:
          "bg-white shadow-lg hover:shadow-xl border border-gray-200/50",
        outlined: "bg-white border-2 border-gray-200 hover:border-indigo-300",
        filled: "bg-gray-50 border border-gray-100 hover:bg-gray-100",
        glass: "bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "elevated",
      size: "md",
      rounded: "lg",
    },
  }
);

const Card = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      rounded,
      hover = true,
      animation = "lift",
      children,
      ...props
    },
    ref
  ) => {
    const animationVariants = {
      lift: {
        rest: { y: 0, scale: 1 },
        hover: { y: -4, scale: 1.02 },
      },
      glow: {
        rest: { boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
        hover: {
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
      },
      scale: {
        rest: { scale: 1 },
        hover: { scale: 1.05 },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, size, rounded, className }))}
        initial="rest"
        whileHover={hover ? "hover" : "rest"}
        variants={animationVariants[animation]}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
