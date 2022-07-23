import * as React from "react"

import { InputValues } from "./input-context"

export function useInputProvider(): InputValues {
  const [nameValue, setNameValue] = React.useState("")

  return {
    nameValue,
    setNameValue,
  }
}
