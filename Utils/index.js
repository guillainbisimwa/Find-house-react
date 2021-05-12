import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);
const makeMockStore = (state = {}) => mockStore({
  ...state,
});

export default makeMockStore;
