import { Navigate } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

export default function Protected({ children }: Props) {
  const currentUser = true

  if (!currentUser) return <Navigate to="/login" />
  return children
}