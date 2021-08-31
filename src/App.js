import React from 'react'
import { Redirect, Route ,Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Will from './Will'
import Admin from './Admin'
import  GroupRules from './GroupRules'
import Contact from './Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/আমাদেরউদ্দেশ্য" component={Will} />
        <Route exact path="/এডমিনপ্যানেল" component={Admin} />
        <Route exact path="/নিয়মকানুন" component={GroupRules}/>
        <Route exact path="/যোগাযোগ" component={Contact} />
        <Redirect to="/"> </Redirect>
      </Switch>
    </>
  )
}
