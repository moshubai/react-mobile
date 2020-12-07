import './styles'
import React, { Suspense, lazy } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { LocaleProvider } from 'antd-mobile'
import Loadable from 'components/loadable'
import store from 'store'
import { Provider } from 'mobx-react'
import Home from 'pages/Home'
import PageLayout from 'layout'
import Base from './routes'
import zhCN from 'antd-mobile/lib/locale-provider/en_US'
const Login = lazy(() => import('./routes/Login/index'))
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Provider {...store}>
          <LocaleProvider locale={zhCN}>
            <HashRouter>
              <Suspense fallback={Loadable}>
                <Switch>
                  <Route path='/login' component={Login} />
                  <Route path='/' component={({ match }) => (
                    <PageLayout>
                      <Route exact path={match.url} component={Home} />
                      {Base}
                    </PageLayout>
                  )} />
                </Switch>
              </Suspense>
            </HashRouter>
          </LocaleProvider >
        </Provider>
      </React.Fragment>
    )
  }
}
export default App
