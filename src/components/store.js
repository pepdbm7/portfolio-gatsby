import React, { createContext, useState } from "react"

export const StoreContext = createContext(null)

export default ({ children }) => {
  const [isTop, setIsTop] = useState(true)
  const [isHero, setIsHero] = useState(true)

  const store = {
    isTop: [isTop, setIsTop],
    isHero: [isHero, setIsHero],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
