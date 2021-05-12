import authentication from '../redux/reducers/AuthentificationReducer';

describe('AuthentificationReducer', () => {
  describe('Authentification Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(authentication(undefined, {})).toEqual({});
    });

    it('should return an object request when action is passed to it', () => {
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
