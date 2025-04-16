import React from 'react'
import styles from './Tooltip.module.css'
import { useTooltip } from './useTooltip'

interface TooltipProps {
  title: string
  description: string
  className?: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: React.FC<TooltipProps> = ({ 
  title, 
  description, 
  className, 
  children,
  position = 'bottom'
}) => {
  const { isVisible, showTooltip, hideTooltip, tooltipRef } = useTooltip()

  return (
    <div 
      className={styles.wrapper}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={showTooltip}
    >
      {children}
      <div 
        ref={tooltipRef}
        className={`${styles.tooltip} ${styles[position]} ${isVisible ? styles.visible : ''} ${className || ''}`}
      >
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.arrow} />
      </div>
    </div>
  )
}

export default Tooltip
