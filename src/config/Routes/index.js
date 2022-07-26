import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import { Home, Login, Register } from '../../pages'


const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>

            {/* penulisan path dan penaman switch berbeda dengan 
            versi-react-route-dom sebelumnya, jadi mengalami migrasi 
            dan perbedaan dalam penulisan */}
            
        </Switch>
    </Router>
  )
}

export default Routes