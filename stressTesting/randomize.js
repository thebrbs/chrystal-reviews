const faker = require('faker');

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const randomDate = () => {
  const day = JSON.stringify(getRandomInt(1, 28));
  const month = () => {
    let monthNumber = getRandomInt(1, 12);
    if (monthNumber < 10) {
      monthNumber = `0${monthNumber}`;
    }
    return monthNumber;
  };
  const year = JSON.stringify(getRandomInt(2008, 2017));
  return [year, month(), day].join('-');
};

const generateRandomData = (userContext, events, done) => {
  const restaurantId = getRandomInt(1, 10000000);
  const username = faker.internet.userName();
  const date = randomDate();
  const overall = getRandomInt(1, 5);
  const food = getRandomInt(1, 5);
  const service = getRandomInt(1, 5);
  const ambience = getRandomInt(1, 5);
  const value = getRandomInt(1, 5);
  const noise = getRandomInt(1, 4);
  const recommended = 1;
  const body = faker.lorem.sentences(getRandomInt(1, 7));

  userContext.vars.restaurantId = restaurantId;
  userContext.vars.username = username;
  userContext.vars.date = date;
  userContext.vars.overall = overall;
  userContext.vars.food = food;
  userContext.vars.service = service;
  userContext.vars.ambience = ambience;
  userContext.vars.value = value;
  userContext.vars.noise = noise;
  userContext.vars.recommended = recommended;
  userContext.vars.body = body;
  return done();
};

module.exports = {
  generateRandomData,
};
