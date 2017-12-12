import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../style/style.css'

ReactDOM.render(
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
  , document.getElementById('root'))
