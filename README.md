# Testando com Cypress

No desafio de hoje, você deve ir além do que aprendeu sobre Jest e se aventurar nos testes com o [Cypress](https://docs.cypress.io/guides/overview/why-cypress).

Você pode utilizar os arquivos disponibilizados para testar a aplicação fornecida, ou pode utilizar algum projeto pessoal que já fez.

## Conhecendo o Cypress

- [Instalação](https://docs.cypress.io/guides/getting-started/installing-cypress) no projeto
- [Primeiras configurações](https://docs.cypress.io/guides/getting-started/opening-the-app) para deixar o ambiente pronto para iniciar os testes
- [Documentação](https://docs.cypress.io/api/table-of-contents) sobre as ferramentas disponíveis

:memo: _Lembrem-se que podemos traduzir as páginas caso a documentação em Inglês seja um obstáculo, não deixe isso impedir seu aprendizado!_

## Por onde começar os testes?

Agora que já instalou o **Cypress** no seu projeto e fez as primeiras configurações, pode ler sobre [como escrever seu primeiro teste](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#Write-a-real-test).

**Passo a passo:**

1 - Entenda os comportamentos da página

2 - Busque simular um dos comportamentos possível no Cypress
<details>
  <summary>Exemplo</summary><br />
  <p>Digamos que nosso site tem um formulário com um <code>input</code> para preencherem o e-mail, um comportamento esperado é que ao digitar no <code>input</code> de fato apareça o valor preenchido. Sendo assim, podemos querer testar se o campo de texto de fato está permitindo que a pessoa usuária preencha seu e-mail nele. Um possível passo a passo para realizar essa asserção é visto abaixo:</p>

  <ul>
    <li>Acessar o site</li>
    <li>Capturar o input correto e digitar nele</li>
    <li>Voltar no input e verificar se o valor foi atualizado</li>
  </ul>
</details>

3 - Realize um teste que faça uma asserção após esse comportamento
<details>
  <summary>Exemplo</summary><br />
  <p>Tendo em vista o exemplo anterior de um comportamento possível em nosso site, abaixo mostramos como realizar uma asserção para verificar esse comportamento.</p>

  ```js
  describe('Meu primeiro teste', () => {
    it('Verifica se o input de E-mail está funcionando', () => {
      cy.visit('https://example.cypress.io/formulario');
  
      // Vai até determinado input e digita nele
      cy.get('.input-email').type('fake@email.com');
  
      //  Verifica se o valor no input foi atualizado
      cy.get('.input-email').should('have.value', 'fake@email.com');
    });
  });
  ```
</details>

_Obs.: Arquivos disponibilizados são fruto do desafio [Calculator app](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29) do site Frontend Mentor._
