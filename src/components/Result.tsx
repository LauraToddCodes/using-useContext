import * as React from "react"
import { InputContext } from "../context"

export function Result() {
  const { nameValue } = React.useContext(InputContext)
  return <div>{nameValue}</div>
}
