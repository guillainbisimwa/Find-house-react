import moxios from 'moxios';
import mockStore from '../../Utils';

const expectedRegisterState = {
  message: 'Account created successfully',
  auth_token: '*************',
  id: '1',
};

const expectedLoginState = {
  auth_token: '*************',
  id: '1',
};

const registerObject = {
  name: 'test',
  email: 'test@me.com',
  password: '12345',
  password_confirmation: '12345',
};

const loginObject = {
  email: 'test@me.com',
  password: '12345',
};

const signInApiUrl = {
  method: 'POST',
  url: 'https://find-your-house-backend.herokuapp.com/auth/login',
  params: {},
  headers: {},
  data: loginObject,
};

const signUpApiUrl = {
  method: 'POST',
  url: 'https://find-your-house-backend.herokuapp.com/signup',
  params: {},
  headers: {},
  data: registerObject,
};

const successRegister = () => ({
  type: 'USERS_REGISTER_SUCCESS',
  user: expectedRegisterState,
});

const successLogin = () => ({
  type: 'USERS_REGISTER_SUCCESS',
  user: expectedRegisterState,
});

const fetchDataRegister = async () => dispatch => fetch(('https://find-your-house-backend.herokuapp.com/signup', {
  data: registerObject,
  method: 'POST',
  headers: { 'content-type': 'application/json' },
}))
  .then(() => dispatch(successRegister()));

const fetchDataLogin = async () => dispatch => fetch(('https://find-your-house-backend.herokuapp.com/auth/login', {
  data: registerObject,
  method: 'POST',
  headers: { 'content-type': 'application/json' },
}))
  .then(() => dispatch(successLogin()));

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

    return store.dispatch(fetchDataRegister).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedRegisterState));
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchDataRegister)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataRegister)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});

describe('login', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const store = mockStore(expectedLoginState);

  it('Store is updated correctly', async () => {
    moxios.wait(() => {
      moxios.stubOnce('POST', signInApiUrl, {
        status: 200,
        response: expectedLoginState,
      });
    });

    return store.dispatch(fetchDataLogin).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedLoginState));
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchDataLogin)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataLogin)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});