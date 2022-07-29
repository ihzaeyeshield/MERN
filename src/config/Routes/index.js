import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import { MainApps, Login, Register, Createpost, Detailpost, Home } from '../../pages'


const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path='/' element={<MainApps />}>
            <Route path="/" element={<Home  />}/>
              <Route path="/createpost" element={<Createpost  />}/>
              <Route path="/detailpost" element={<Detailpost />}/>
            </Route>
            {/* Penulisan jalur path nested dengan outlet jadi sangat mudah  */}

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