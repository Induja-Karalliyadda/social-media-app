import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title">Login to Facebook</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
              <p className="mt-3">Don't have an account? <a href="#">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
