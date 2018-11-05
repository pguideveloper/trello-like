import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Home from './containers/Home'
import cfg from './store'
import './index.scss'

const store = cfg.configStore()

ReactDom.render(
    <div>
        <header id="header">
            <nav id="navbar-center" className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-targer="nav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="" className="navbar-brand">
                            Trello Like
                        </a>
                        <div className="navbar-collapse collapse" id="navbar">
                            <ul className="nav navbar-nav">
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main id="main" className="cointainer-fluid">
            <Provider store={store}>
                <ConnectedRouter history={ cfg.history }>
                    <Route exact path="/" component={ Home }></Route>
                </ConnectedRouter>
            </Provider>
        </main> 
    </div>,
    document.getElementById('root')
) 