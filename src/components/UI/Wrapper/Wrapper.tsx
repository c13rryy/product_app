import type { FC, HTMLAttributes, ReactNode } from "react"

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({ className, children }) => {
  return (
    <div className={`${className} mx-auto max-w-screen-2xl xh:w-full w-[95%]`}>
      {children}
    </div>
  )
}

export default Wrapper
