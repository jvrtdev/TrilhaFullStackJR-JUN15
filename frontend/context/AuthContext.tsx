import React, { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";

export interface User {
  id: number
  email: string
  password: string
  role: 'standard' | 'admin'
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  loading?: boolean
}

interface AuthAction {
  type: "LOGIN" | "LOGOUT" | "SET_LOADING"
  payload?: {
    user?: User
    token?: string
    loading?: boolean
  }
}

interface AuthContextType {
  state: AuthState
  dispatch: Dispatch<AuthAction>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const initialState: AuthState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  token: null
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch(action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload?.token ?? "")

      const base64Url = action.payload?.token?.split(".")[1] ?? ""
      const parsedToken = JSON.parse(atob(base64Url))

      localStorage.setItem("user", JSON.stringify(parsedToken))

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload?.user ?? null,
        token: action.payload?.token ?? null,
        loading: false,
      }
    case "LOGOUT":
      localStorage.removeItem("token")
      localStorage.removeItem("user")

      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        loading: false,
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload?.loading ?? false,
      }
    
    default:
      return state
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (token && user) {
    dispatch({
    type: "LOGIN",
    payload: {
        user: JSON.parse(user),
        token,
      },
    })

    return
  }
  dispatch({ type: "SET_LOADING", payload: { loading: false }})
  }, [])

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if(context === undefined){
    throw new Error("useAuth must be used within an authprovider")
  }

  return context
}