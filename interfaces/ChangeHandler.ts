export interface ChangeHandlerEvent {
  name: string
  value: string
}

type ChangeHandler = (ev: ChangeHandlerEvent) => void

export default ChangeHandler
