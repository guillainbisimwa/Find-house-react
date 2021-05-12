import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Main from '../../components/Main';
import store from '../../redux/reducers';

describe('Main component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Main userLogged={{ name: 'test' }} houses={{ name: 'test' }} myFavorites={['test']} />
        ,
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
