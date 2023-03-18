/// <reference types="cypress" />


import locators from '../support/commands'
import loc from '../support/locators'



describe('Pesquisa de Artigos - Blog', () => {
    beforeEach(() => {
        cy.home()
    })

    it('Pesquisa por palavras-chave', () => {
        cy.get(loc.PESQUISA.MENU).click()
        cy.get(loc.PESQUISA.PESQUISAR).should('be.visible')
        .type('imposto{enter}')
        cy.get(loc.PESQUISA.RESULTADO)
        .should('contain', 'imposto')
        cy.get(loc.POST.IMPOSTO).click()
        cy.get(loc.TAG.SEUS_INVESTIMENTOS)
        .should('contain', 'investimentos')
    })

    it('Pesquisa por categorias', () => {
        cy.get(loc.PESQUISA.CATEGORIA).click()
        .should('be.visible')
        cy.get(loc.PESQUISA.RESULTADO)
        .should('contain', 'Categoria')
        cy.get(loc.POST.FINANÇAS).click()
        .should('be.visible')
      cy.get(loc.TAG.SUAS_FINANCAS)
      .should('contain', 'finanças')
        

    }) 
    
    it('Pesquisa sem retorno', () => {
        cy.get(loc.PESQUISA.MENU).click()
        cy.get(loc.PESQUISA.PESQUISAR).should('be.visible')
        .type('Cypress.io{enter}')
        cy.get(loc.PESQUISA.SEM_RESULTADO)
        .should('contain', 'Nenhum resultado')

    })

    it('Alterando a Pesquisa', () => {
        cy.get(loc.PESQUISA.MENU).click()
        cy.get(loc.PESQUISA.PESQUISAR).should('be.visible')
        .type('Cypress.io{enter}')
        cy.get(loc.PESQUISA.SEM_RESULTADO)
        .should('contain', 'Nenhum resultado')
        cy.get(loc.PESQUISA.NOVA_PESQUISA).clear()
        .type('agi{enter}')
        cy.get(loc.PESQUISA.RESULTADO)
        .should('contain', 'agi')

    })

})