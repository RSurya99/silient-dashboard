import { ReactNode } from 'react'

export interface User {
  name: string,
  image: string
}

export type Navbar = {
  id: number,
  text: string,
  done: boolean
}

export interface NavbarAction {
  type: string,
  [key: string]: any
}

export interface NavbarProviderProps {
  children: ReactNode
}

export interface TaskProps {
  task: Navbar
}

export type NavbarState = {
  sidebarToggle: boolean
}
