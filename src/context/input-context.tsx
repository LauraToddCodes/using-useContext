import * as React from "react"

export type InputValues = {
  nameValue: string
  setNameValue: React.Dispatch<React.SetStateAction<string>>
}

export const InputContext = React.createContext<InputValues>({
  nameValue: "",
  setNameValue: () => console.info("Name not yet initialised"),
})
