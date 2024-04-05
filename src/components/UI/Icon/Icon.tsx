import type React from "react"
import type { SVGProps } from "react"
import { content } from "../../../assets/icons/index"
import type { IAvailableIcons } from "../../../assets/icons/index"

export interface IIconProps {
  svgProps?: SVGProps<SVGSVGElement>
  icon: IAvailableIcons
  size?: number
  height?: number
  color?: string
  viewBox?: string
  className?: string
  text?: string
  classes?: string
}

export function Icon(props: IIconProps) {
  const {
    icon,
    size = 24,
    color,
    height,
    className,
    classes,
    svgProps = {},
    text,
    ...rest
  } = props

  const Component = content[icon] as React.FC<React.SVGProps<SVGSVGElement>>
  if (!Component) {
    return null
  }

  return (
    <div className={`flex flex-col items-center ${classes}`}>
      <Component
        viewBox="0 0 24 24"
        width={size}
        className={className}
        height={height || size}
        color={color}
        {...svgProps}
        {...rest}
      />
      {text && (
        <div className="mt-4px 2xl:mt-0px">
          <p className="text-14  text-black_2 leading-24 font-semibold uppercase">
            {text}
          </p>
        </div>
      )}
    </div>
  )
}
