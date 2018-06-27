const faker = require('faker');
const fs = require('fs');

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

const getCsvLine = () => `${getRandomInt(1, 10000000)},${faker.internet.userName()},${randomDate()},${getRandomInt(1, 5)},${getRandomInt(1, 5)},${getRandomInt(1, 5)},${getRandomInt(1, 5)},${getRandomInt(1, 5)},${getRandomInt(1, 4)},${getRandomInt(0, 1)},${faker.lorem.sentences(getRandomInt(1, 7))}\n`;

const writeString = fs.createWriteStream('reviews.csv');

const writeCsv = (writer) => {
  writer.write('restaurant_id,username,date,overall_rating,food_rating,service_rating,ambience_rating,value_rating,noise_level,recommended,body\n');
  let i = 1;
  const write = () => {
    let ok = true;
    do {
      if (i % 1000000 === 0) {
        console.log(`${i} have been written`);
      }
      if (i === 50000000) {
        writer.write(getCsvLine());
        writer.end();
      } else {
        ok = writer.write(getCsvLine());
      }
      i += 1;
    } while (i <= 50000000 && ok);
    if (i <= 50000000) {
      writer.once('drain', write);
    }
  };
  write();
};

writeCsv(writeString);
