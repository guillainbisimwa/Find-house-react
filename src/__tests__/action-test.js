import moxios from 'moxios';
import mockStore from '../../Utils';

const expectedRegisterState = {
  message: 'Account created successfully',
  auth_token: '*************',
  id: '1',
};

const registerObject = {
  name: 'test',
  email: 'test@me.com',
  password: '12345',
  password_confirmation: '12345',
};

const signUpApiUrl = {
  method: 'POST',
  url: 'https://find-your-house-backend.herokuapp.com/auth/login',
  params: {},
  headers: {},
  data: {
    email: 'test@me.com',
    password: '12345',
  },
};

const success = () => ({
  type: 'USERS_REGISTER_SUCCESS',
  user: expectedRegisterState,
});

const fetchData = async () => dispatch => fetch(('https://find-your-house-backend.herokuapp.com/signup', {
  data: registerObject,
  method: 'POST',
  headers: { 'content-type': 'application/json' },
}))
  .then(() => dispatch(success()));

describe('sign up', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const store = mockStore(expectedRegisterState);

  it('Store is updated correctly', async () => {
    moxios.wait(() => {
      moxios.stubOnce('POST', signUpApiUrl, {
        status: 200,
        response: expectedRegisterState,
      });
    });

    return store.dispatch(fetchData).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedRegisterState));
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchData)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchData)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});
