interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  variant = "outline",
  size = "md",
  className = "",
  ...props
}: Props) => {
  const baseStyles =
    "rounded-full transition-all duration-300 font-medium cursor-pointer";

  const variants = {
    outline: "border-2 hover:text-white",
    solid: "text-white hover:opacity-90",
  };

  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-4 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
