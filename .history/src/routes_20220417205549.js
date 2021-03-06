import { BrowserRouter, Switch, Route } from "react-router-dom"

import Erro from "./pages/404"
import Home from "./pages/Home"
import Header from "./components/Header"
import Filme from "./pages/Filme"
import Favoritos from './pages/favoritos'

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route path="*" component={Erro}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;