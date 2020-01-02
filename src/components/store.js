import React, { createContext, useState } from "react"

export const StoreContext = createContext(null)

export default ({ children }) => {
  const [isTop, setIsTop] = useState(true)

  const store = {
    isTop: [isTop, setIsTop],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
