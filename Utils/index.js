import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);
// const makeMockStore = (state = {}) => mockStore({
//   ...state,
// });

export default mockStore;
