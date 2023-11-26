import { fireEvent, render, screen } from '@testing-library/react';
import ReleaseCard from '../components/ReleaseCard';
import { Release } from '../types';
import { mockTransformedReleases } from '@/__mocks__/mockData';
import { ClassAttributes, ImgHTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import updateQueryParams from '@/utils/updateQueryParams';

const release: Release = mockTransformedReleases[0];

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    replace: jest.fn(),
    route: '/',
    pathname: '/',
    query: { q: 'test', page: '1', per_page: '6' },
    asPath: '',
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
  ) => <img {...props} />,
}));

jest.mock('../utils/updateQueryParams', () => jest.fn());

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

  test('Validate that clicking on a card opens a detailed card component', () => {
    render(<ReleaseCard release={release} />);
    const router = useRouter();

    const card = screen.getAllByTestId('card');

    fireEvent.click(card[0]);

    expect(updateQueryParams).toHaveBeenCalledTimes(1);
    expect(updateQueryParams).toHaveBeenCalledWith(router, {
      id: '8100827',
    });
  });
});
