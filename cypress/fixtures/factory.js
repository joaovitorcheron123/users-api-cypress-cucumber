const faker = require('faker');
faker.locale = 'pt_BR';

export default class factory {
  
  faker() {
    const createdAt = faker.date.recent();
    const name = faker.name.findName();
    const phone = faker.phone.phoneNumber();
    const city = faker.address.city();
    const zipcode = faker.address.zipCode();
    const email = faker.internet.email(name);
    const country = 'Brasil';
    const address = faker.address.streetAddress();
    
    const usersFaker = {
      createdAt,
      name,
      phone,
      city,
      zipcode,
      email,
      country,
      address
    };

    return usersFaker;
  }
}
