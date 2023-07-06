import * as commonTypes from '../../common-types/types';
export class MoviesApi {
  url = 'https://movies-tv-shows-database.p.rapidapi.com/';
  options = {
    method: 'GET',
    headers: {
      Type: '',
      'X-RapidAPI-Key': process.env.MOVIE_API_KEY,
      'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com',
    },
  };
  data: object | undefined;
  constructor(method: commonTypes.body['method'], payload) {
    switch (method) {
      case 'byTitle':
        this.options.headers.Type = 'get-movies-by-title';
        this.data = this.apiCall(this.url + '?title=' + payload, this.options);
        break;
      case 'byMovieId':
        this.options.headers.Type = 'get-movie-details';
        this.data = this.apiCall(
          this.url + '?movieid=' + payload,
          this.options,
        );
        break;
      default:
        break;
    }
  }
  async apiCall(url: string, options: typeof this.options) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
