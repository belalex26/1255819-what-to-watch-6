const mockFilms = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    previewImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    backgroundImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: true
  },
  {
    id: 2,
    name: `Stand By Me`,
    posterImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    previewImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    backgroundImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Rob Reiner's adaptation of Stephen King's novella The Body is a stirring, touching adventure film which knows the real world is exciting and scary enough just as it is. It's also a coming-of-age movie which celebrates the intensity of childhood friendship, while gently mourning the transience of such bonds. Which is why, unlike its central character, it'll never get old.`,
    rating: 7,
    scoresCount: 180,
    director: `Rob Reiner`,
    starring: [`River Phoenix`, `Wil Wheaton`, `Corey Feldman`, `Jerry O'Connell`],
    runTime: 89,
    genre: `Drama`,
    released: 1986,
    isFavorite: true
  },
  {
    id: 3,
    name: `Amelie`,
    posterImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    previewImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    backgroundImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Despite being caught in her imaginative world, Amelie, a young waitress, decides to help people find happiness. Her quest to spread joy leads her on a journey where she finds true love.`,
    rating: 9,
    scoresCount: 355,
    director: `Jean-Pierre Jeunet`,
    starring: [`Audrey Tautou`, `Mathieu Kassovitz`, `Jamel Debbouze`],
    runTime: 120,
    genre: `Drama`,
    released: 2001,
    isFavorite: true
  },
];

const mockFilm = {
  id: 6,
  name: `The Exorcist`,
  posterImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
  previewImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
  backgroundImage: `https://i.picsum.photos/id/604/248/152.jpg?hmac=Yu4rnPqlL8pPa8b7cdPSosfFApQXtQmy56BW52elqto`,
  backgroundColor: `#ffffff`,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `An actress notices dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest begins to doubt his faith while dealing with his mother's sickness.`,
  rating: 8.8,
  scoresCount: 174,
  director: `William Friedkin`,
  starring: [`Linda Blair`, `Ellen Burstyn`, `Jason Miller`, `Max von Sydow`],
  runTime: 128,
  genre: `Thriller`,
  released: 1973,
  isFavorite: true
};

const mockReviews = [
  {
    id: 1,
    user: {
      id: 17,
      name: `Emely`
    },
    rating: 9.8,
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2021-01-27T13:18:14.644Z`
  },
  {
    id: 2,
    user: {
      id: 13,
      name: `Zak`
    },
    rating: 8.4,
    comment: `This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction.\nI was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.`,
    date: `2021-01-27T13:18:14.644Z`
  },
  {
    id: 3,
    user: {
      id: 17,
      name: `Emely`
    },
    rating: 5.7,
    comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
    date: `2021-02-06T13:18:14.644Z`
  }
];

export {mockFilms, mockFilm, mockReviews};
