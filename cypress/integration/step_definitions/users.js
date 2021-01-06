import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Users from '../../services/users.service'
import factory from '../../fixtures/factory';

//GET ----------------------------------------------------------------------------------
When(`buscar pelos usuários cadastrados`, () => {
  Users.get_users().then(res => {
    cy.wrap({ res }).as('response')
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
  })
})

Then(`deverá retornar {string} com status {int}`, (schema, status) => {
  cy.get('@response').then(when => {
    expect(when.res.status).to.eq(status)
  })
})

Then(`deverá retornar uma lista que não seja vazia`, () => {
  cy.get('@response').then(when => {
    expect(when.res.body).to.be.not.null;
  })
})

//GET ----------------------------------------------------------------------------------
When(`buscar por um usuário com o ID {string}`, id => {
  Users.get_userId(id).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res, expectedId: id }).as('response')
  })
})

Then(`deverá retornar {string} com status {int}`, (schema, status) => {
  cy.get('@response').then(when => {
    cy.validateSchema(when.res.body, `${schema}/${status}`)
    expect(when.res.status).to.eq(status)
  })
})

Then(`deverá retornar o usuário buscado`, () => {
  cy.get('@response').then(when => {
    expect(when.res.body.id).to.eq(when.expectedId)
  })
})

//POST ----------------------------------------------------------------------------------
When(`criar um novo usuário com {string} e {string} e {string} e {string} e {string} e {string} e {string} e {string}`, (createdAt, name, phone, city, zipcode, email, country, address) => {
  Users.post_users({createdAt, name, phone, city, zipcode, email, country, address}).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res, expectedCreatedAt: createdAt, expectedName: name, expectedPhone: phone, expectedCity: city, expectedZipcode: zipcode, expectedEmail: email, expectedCountry: country, expectedAddress: address }).as('response')
  })
})

Then(`deverá retornar {string} com status {int}`, (schema, status) => {
  cy.get('@response').then(when => {
    cy.validateSchema(when.res.body, `${schema}/${status}`)
    expect(when.res.status).to.eq(status)
  })
})

Then(`deverá retornar o nome do usuário criado`, () => {
  cy.get('@response').then(when => {
    expect(when.res.body.name).to.eq(when.expectedName)
  })
})

//POST FAKER ---------------------------------------------------------------------------
When(`criar um novo usuário com o faker`, () => {
  Users.post_users_faker().then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res }).as('response')
  })
})

Then(`deverá retornar {string} com status {int}`, (schema, status) => {
  cy.get('@response').then(when => {
    cy.validateSchema(when.res.body, `${schema}/${status}`)
    expect(when.res.status).to.eq(status)
  })
})

//PUT ----------------------------------------------------------------------------------
When(`atualizar os dados de um usuário {string} com {string} e {string} e {string} e {string} e {string} e {string} e {string} e {string}`, (id, createdAt, name, phone, city, zipcode, email, country, address) => {
  Users.put_users(id, {createdAt, name, phone, city, zipcode, email, country, address}).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res, expectedCreatedAt: createdAt, expectedName: name, expectedPhone: phone, expectedCity: city, expectedZipcode: zipcode, expectedEmail: email, expectedCountry: country, expectedAddress: address }).as('response')
  })
})

Then(`deverá retornar o nome do usuário atualizado`, () => {
  cy.get('@response').then(when => {
    expect(when.res.body.name).to.eq(when.expectedName)
  })
})

//PUT FAKER ----------------------------------------------------------------------------------
When(`atualizar um usuário ID {int} com o faker`, (id) => {
  Users.put_users_faker(id).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res }).as('response')
  })
})

Then(`deverá retornar {string} com status {int}`, (schema, status) => {
  cy.get('@response').then(when => {
    cy.validateSchema(when.res.body, `${schema}/${status}`)
    expect(when.res.status).to.eq(status)
  })
})

//DELETE ----------------------------------------------------------------------------------
When(`buscar por um usuário com o ID {int}`, id => {
  Users.delete_users(id).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res, expectedId: id }).as('response')
  })
})

Then(`deverá retornar {string} com status {int}`, (status) => {
  cy.get('@response').then(when => {
    expect(when.res.status).to.eq(status)
  })
})