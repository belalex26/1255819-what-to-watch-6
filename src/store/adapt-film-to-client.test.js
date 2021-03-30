import {adaptFilmToClient} from './adapt-film-to-client';
import {mockFilm} from '../test-mocks';

it(`Function adaptFilmToClient works correctly`, () => {
  const film = {
    "id": 6,
    "name": `The Exorcist`,
    "poster_image": `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    "preview_image": `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    "background_image": `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    "background_color": `#ffffff`,
    "video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `An actress notices dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest begins to doubt his faith while dealing with his mother's sickness.`,
    "rating": 8.8,
    "scores_count": 174,
    "director": `William Friedkin`,
    "starring": [`Linda Blair`, `Ellen Burstyn`, `Jason Miller`, `Max von Sydow`],
    "run_time": 128,
    "genre": `Thriller`,
    "released": 1973,
    "is_favorite": true,
  };
  const expectedResult = mockFilm;

  expect(adaptFilmToClient(film)).toEqual(expectedResult);
});
