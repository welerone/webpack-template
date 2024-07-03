import { render } from '@testing-library/react';
import { MainPage } from '../MainPage.tsx'; // It is not an error, it's ESM.

describe('MainPage', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<MainPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
