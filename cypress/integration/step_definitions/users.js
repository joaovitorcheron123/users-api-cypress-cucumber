import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Users from '../../services/users.service'

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

//POST -----------------------------------------------------------------------------
When(`criar um novo usuário`, () => {
  Users.post_users().then(res => {
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

//PUT ------------------------------------------------------------------------------------
When(`atualizar um usuário com o ID {int}`, (id) => {
  Users.put_users(id).then(res => {
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