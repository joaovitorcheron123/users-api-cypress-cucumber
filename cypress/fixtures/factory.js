const faker = require('faker');
faker.locale = 'pt_BR';

export default class factory {
  faker() {
  const usersFaker = {
    createdAt: faker.date.recent(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    email: faker.internet.email(),
    country: 'Brasil',
    address: faker.address.streetAddress(),
  };
  return usersFaker;
  }
}