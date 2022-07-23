import * as React from "react"
import "./App.css"
import { Input, Result } from "./components"

import { InputContext } from "./context"
import { useInputProvider } from "./context/use-input-provider"

function App() {
  const nameValue = useInputProvider()

  return (
    <div className="inputForm">
      <InputContext.Provider value={nameValue}>
        <Input />
        <Result />
      </InputContext.Provider>
    </div>
  )
}

export default App
