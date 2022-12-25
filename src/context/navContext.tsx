import {
  createContext, useContext, useReducer, Dispatch,
} from 'react'
import type {
  NavbarState, NavbarAction, NavbarProviderProps,
} from '~/types/navbar'

const initialState: NavbarState = {
  sidebarToggle: true,
  breadcrumbItems: [],
}

const NavbarContext = createContext<NavbarState>(initialState)

const NavbarDispatchContext = createContext<Dispatch<NavbarAction> | null>(null)

export function useNavbar() {
  return useContext(NavbarContext)
}

export function useNavbarDispatch() {
  return useContext(NavbarDispatchContext)
}

function NavbarReducer(state: NavbarState, action: NavbarAction) {
  switch (action.type) {
    case 'UPDATE_SIDEBAR_TOGGLE': {
      return {
        ...state,
        sidebarToggle: action.sidebarToggle,
      }
    }
    case 'UPDATE_BREADCRUMB_ITEMS': {
      return {
        ...state,
        breadcrumbItems: action.breadcrumbItems,
      }
    }
    default: {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}

export async function asyncUpdate(dispatch: Dispatch<NavbarAction>, sidebarToggle: boolean) {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    dispatch({ type: 'UPDATE_SIDEBAR_TOGGLE', sidebarToggle })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('err', err)
  }
}

export function NavbarProvider({ children }: NavbarProviderProps) {
  const [state, dispatch] = useReducer(
    NavbarReducer,
    initialState,
  )

  return (
    <NavbarContext.Provider value={state}>
      <NavbarDispatchContext.Provider value={dispatch}>
        {children}
      </NavbarDispatchContext.Provider>
    </NavbarContext.Provider>
  )
}
