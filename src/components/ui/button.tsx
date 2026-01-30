import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-accent text-white hover:bg-red-600 shadow-md',
      outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
      ghost: 'hover:bg-gray-100 text-gray-700',
      secondary: 'bg-secondary text-white hover:bg-blue-900'
    }
    
    const sizes = {
      default: 'px-6 py-3',
      sm: 'px-4 py-2 text-sm',
      lg: 'px-8 py-4 text-lg',
      icon: 'p-2'
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
