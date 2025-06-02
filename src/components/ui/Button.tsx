import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-500',
        secondary: 'bg-secondary hover:bg-secondary-600 text-black shadow-lg hover:shadow-xl focus:ring-secondary-500',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-500',
        ghost: 'text-primary hover:bg-primary-50 focus:ring-primary-500',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const { asChild: _, ...restProps } = props as any
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...restProps}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }