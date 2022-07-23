import * as React from "react"
import { InputContext } from "../context"

export function Input(): JSX.Element {
  const { setNameValue } = React.useContext(InputContext)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(e.target.value)
  }

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" onChange={handleChange} />
    </form>
  )
}
