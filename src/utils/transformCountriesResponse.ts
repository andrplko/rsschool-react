import { CountriesResponse, CountriesData } from '../types';

const transformCountriesResponse = (
  response: CountriesResponse
): CountriesData => {
  return response.map((country) => country.name);
};

export default transformCountriesResponse;
