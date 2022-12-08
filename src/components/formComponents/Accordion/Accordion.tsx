import { useEffect, useRef, useState } from 'react'

import {
  AccordionButtonFontSizes,
  AccordionDetailBackgroundColors
} from '../../../types'

export interface AccordionData {
  buttonFontSize?: AccordionButtonFontSizes
  detailBackgroundColor?: AccordionDetailBackgroundColors
  details?: string | JSX.Element
  id: string
  summary: string | JSX.Element
  variantClassName?: string
}

export interface AccordionProps {
  data: AccordionData[]
}

function AccordionSegment({
  buttonFontSize = AccordionButtonFontSizes.large,
  detailBackgroundColor = AccordionDetailBackgroundColors.white,
  details,
  id,
  summary,
  variantClassName
}: AccordionData) {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)
  const panelNode = useRef<HTMLDivElement | null>(null)

  const expandPanel = () => {
    const element = panelNode.current
    if (element) {
      element.style.display = 'block'
    }
  }

  const collapsePanel = () => {
    const element = panelNode.current
    if (element) {
      element.style.display = 'none'
    }
  }

  useEffect(() => {
    if (isPanelOpen) expandPanel()
    else collapsePanel()
  }, [isPanelOpen])

  if (!details) return null

  function handleTogglePanel() {
    setIsPanelOpen(!isPanelOpen)
  }

  const buildClasses = (): string => {
    let className = 'accordion'
    if (isPanelOpen) className += ' active'
    if (variantClassName) className += ` ${variantClassName}`
    return className
  }

  const buildButtonClasses = (): string => {
    let className = 'accordion-button'

    if (buttonFontSize === 'small') {
      className += ' accordion-button-font-size-small'
    }

    if (detailBackgroundColor === 'blue') {
      className += ' accordion-button-blue'
    }

    return className
  }

  const buildPanelClasses = (): string => {
    let className = 'accordion-panel'

    if (detailBackgroundColor === 'blue') {
      className += ' accordion-panel-blue'
    }

    return className
  }

  return (
    <div id={id} className={buildClasses()}>
      <button
        className={buildButtonClasses()}
        onClick={handleTogglePanel}
        type='button'
      >
        {summary}
      </button>
      <div className={buildPanelClasses()} ref={panelNode}>
        {details}
      </div>
    </div>
  )
}

export default function Accordion({ data }: AccordionProps): JSX.Element {
  return (
    <div>
      {data.map((d: AccordionData) => (
        <AccordionSegment key={d.id} {...d} />
      ))}
    </div>
  )
}
