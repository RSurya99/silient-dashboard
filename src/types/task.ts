import { ReactNode } from 'react'

export type Task = {
  id: number,
  text: string,
  done: boolean
}

export interface TaskAction {
  type: string,
  [key: string]: any
}

export interface TaskProviderProps {
  children: ReactNode
}

export interface TaskProps {
  task: Task
}

export type State = {
  sidebarToggle: boolean
}
