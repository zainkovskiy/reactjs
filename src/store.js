import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { logger } from 'middlewares/logger';
import { bot } from 'middlewares/bot';
import { initReducer } from 'reducers';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export const store = createStore(initReducer(history),
    compose(
        applyMiddleware(logger, bot, routerMiddleware(history), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    ),
)

