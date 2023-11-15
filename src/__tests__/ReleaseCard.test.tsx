import { render, screen } from '@testing-library/react';
import { Release } from '../types';
import ReleaseCard from '../components/ReleaseCard';

const release: Release = {
  id: 1,
  title: 'Sample Release',
  cover_image: 'sample-image.jpg',
  year: '2022',
  genre: ['Rock', 'Indie'],
  style: ['Alternative'],
};

describe('Release Card component', () => {
  test('Ensure that the card component renders the relevant card data', () => {
    render(<ReleaseCard release={release} />);

    const titleElement = screen.getByText(release.title);
    expect(titleElement).toBeInTheDocument();

    const imageElement = screen.getByAltText(release.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', release.cover_image);

    const yearElement = screen.getByText(`Year: ${release.year}`);
    expect(yearElement).toBeInTheDocument();

    const genresElement = screen.getByText(
      `Genres: ${release.genre.join(', ')}`
    );
    expect(genresElement).toBeInTheDocument();

    const stylesElement = screen.getByText(
      `Style: ${release.style.join(', ')}`
    );
    expect(stylesElement).toBeInTheDocument();
  });
});
