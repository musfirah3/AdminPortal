import React, { useState } from 'react'
import Admin from './Admin'
import Guest from './Guest'
import Users from './Users'
const ComponentByRole={
  'admin':Admin,
  'guest':Guest,
  'user':Users
}
const getUserRole=(params)=>ComponentByRole[params]||ComponentByRole['guest']

function App() {
  const [role,setRole]=useState('admin')
  const CurrentUser=getUserRole(role)
  return <CurrentUser/>
}

export default App