import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from 'components/Footer';

describe('<Footer/>', () => {
  it('shows name of authors', () => {
    render(<Footer />)
    expect(screen.getByTestId('author_names')).toBeInTheDocument()
  });
})
