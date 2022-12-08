import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop({
  children
}: {
  children: JSX.Element
}): JSX.Element {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default ScrollToTop
