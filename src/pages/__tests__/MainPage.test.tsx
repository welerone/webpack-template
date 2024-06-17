import { render } from '@testing-library/react';
import { MainPage } from '../MainPage';

describe('MainPage', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<MainPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
