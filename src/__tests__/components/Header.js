import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Header from '../../components/Header';
import store from '../../redux/reducers';

describe('Header component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Header user={{ name: 'test' }} />
        </MemoryRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
