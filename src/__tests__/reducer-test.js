import authentication from '../redux/reducers/AuthentificationReducer';
import house from '../redux/reducers/HouseReducer';
import registration from '../redux/reducers/RegistrationReducer';

describe('AuthentificationReducer', () => {
  describe('Sign Up Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(registration(undefined, {})).toEqual({});
    });

    it('should return an object when request action is passed to it', () => {
      expect(registration([], { type: 'USERS_REGISTER_REQUEST', user: { name: 'test@me.com' } })).toEqual({ registering: true });
    });

    it('should return an empty object when success action is passed to it', () => {
      expect(registration([], { type: 'USERS_REGISTER_SUCCESS', user: { name: 'test@me.com' } })).toEqual({ });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(registration([], { type: 'USERS_REGISTER_FAILURE', user: { name: 'test@me.com' } })).toEqual({});
    });
  });

  describe('Login Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(authentication(undefined, {})).toEqual({});
    });

    it('should return an object when request action is passed to it', () => {
      expect(authentication([], { type: 'USERS_LOGIN_REQUEST', user: { name: 'test@me.com' } })).toEqual({ loggingIn: true, user: { name: 'test@me.com' } });
    });

    it('should return an object when success action is passed to it', () => {
      expect(authentication([], { type: 'USERS_LOGIN_SUCCESS', user: { name: 'test@me.com' } })).toEqual({ loggedIn: true, user: { name: 'test@me.com' } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(authentication([], { type: 'USERS_LOGIN_FAILURE', user: { name: 'test@me.com' } })).toEqual({});
    });
  });
});

describe('House Reducer', () => {
  describe('Get All Houses Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(house(undefined, {})).toEqual({});
    });

    it('should return an object (loading) when request action is passed to it', () => {
      expect(house([], { type: 'USERS_GETALLHOUSES_REQUEST', house: { } })).toEqual({ loading: true });
    });

    it('should return an object when success action is passed to it', () => {
      expect(house([], { type: 'USERS_GETALLHOUSES_SUCCESS', house: { } })).toEqual({ houses: { } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(house([], { type: 'USERS_GETALLHOUSES_FAILURE', house: { } })).toEqual({});
    });
  });
});
