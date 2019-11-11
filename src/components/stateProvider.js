import React, { useState, useEffect } from "react"

const MyContext = React.createContext({})

const Testi = ({ children }) => {
  const [lastPage, setLastPage] = useState("")
  // listen to the browser history
  useEffect(() => {
    window.onpopstate = function() {
      console.log("pena")
    }
  })
  return (
    <MyContext.Provider value={{ lastPage, setLastPage }}>
      {children}
    </MyContext.Provider>
  )
}

export default Testi

export { MyContext }
