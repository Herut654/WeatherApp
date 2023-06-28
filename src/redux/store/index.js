import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const saveState = (state) => {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('favorites', serializedState)  
}

store.subscribe(() => {
    saveState(store.getState().favoritesArray)
})

export default store