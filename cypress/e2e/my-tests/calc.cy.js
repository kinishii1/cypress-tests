/// <reference types="cypress" />

describe('Calculadora Operaçoes', () => {
  it('successfully loads', () => {
    cy.visit('./index.html') 
  })
  it('Soma corretamente valores', () => {
    cy.visit('./index.html');
    const sum = ':nth-child(8)'
    const num7 = '#keypad > :nth-child(1)'
    const num1 = ':nth-child(9)'

    cy.get(num7).click();
    cy.get(sum).click();
    cy.get(num1).click();
    cy.get('#screen').click();
    cy.get('#equals').click();

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', '8,00'); 
    });
  });
  it('Subtrai corretamente os valores', ()=>{
    cy.visit('./index.html');
    const sub = ':nth-child(12)'
    const num7 = '#keypad > :nth-child(1)'
    const num1 = ':nth-child(9)'

    cy.get(num7).click();
    cy.get(sub).click(); 
    cy.get(num1).click();
    cy.get('#equals').click();

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', '6,00'); 
    });
  })
  it('Multiplica corretamente os valores', ()=>{
    cy.visit('./index.html');
    const multi = ':nth-child(16)'
    const num7 = '#keypad > :nth-child(1)'
    const num1 = ':nth-child(9)'
    cy.get(num7).click();
    cy.get(multi).click(); 
    cy.get(num1).click();
    cy.get('#equals').click();

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', '7,00'); 
    });
  })
  it('Divide corretamente os valores', ()=>{
    cy.visit('./index.html');
    const div = ':nth-child(15)'
    const num7 = '#keypad > :nth-child(1)'
    const num1 = ':nth-child(9)'
    cy.get(num7).click();
    cy.get(div).click(); 
    cy.get(num1).click();
    cy.get('#equals').click();

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', '7,00'); 
    });
  })
})
describe('Verifica se botões funcionam', ()=> {
  it('verifica se del funciona', () => {
    cy.visit('./index.html');
    const del = '#del'
    const num5 = '#keypad > :nth-child(6)'
    const num7 = '#keypad > :nth-child(1)'

    cy.get(num5).click();
    cy.get(num7).click();

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', '57'); 
    });

    cy.get(del).click();

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', '5'); 
    });
  })
  it('verifica se reset funciona', ()=>{
    cy.visit('./index.html');
    const reset = '#reset'
    const num5 = '#keypad > :nth-child(6)'
    const num7 = '#keypad > :nth-child(1)'

    cy.get(num5).click()
    cy.get(num7).click()

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', '57'); 
    });

    cy.get(reset).click();

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', ''); 
    });
  })
  it('verifica se . funciona', ()=>{
    cy.visit('./index.html');
    const dot = ':nth-child(13)'
    const num5 = '#keypad > :nth-child(6)'
    const num7 = '#keypad > :nth-child(1)'

    cy.get(num5).click()
    cy.get(dot).click()
    cy.get(num7).click()

    cy.get('#screen').invoke('text').then((text) => {
      const cleanedText = text.trim();
      const value = cleanedText.replace(/\n/g, '');
      cy.wrap(value).should('eq', '5,7'); 
    });
  })
})
