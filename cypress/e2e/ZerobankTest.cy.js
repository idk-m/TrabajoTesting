Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Dirige a la página', () => {
  it('Carga la pagina', () => {
    cy.visit('http://zero.webappsecurity.com/')
  })
});



describe("Prueba de Titulo", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html"); 
  });

  it("Debe tener el título correcto", () => {
    cy.title().should("eq", "Zero - Personal Banking - Loans - Credit Cards"); 
  });
  
});

describe("Prueba de Encabezado", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html"); 
  });

  it("Debe tener un encabezado o logo que identifique a 'Zero Web App Security'", () => {
    cy.get('.brand') 
      .should("contain.text", "Zero Bank"); 
  });
});


describe("Prueba de Contenido account activity", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html"); 
  });

  it("CHECKING ACCOUNT ACTIVITY: Debe tener el texto correcto", () => {
    cy.get('#online_banking_features > :nth-child(2) > div > p') 
      .should("contain.text", "Use Zero to view the most up-to-date listings of your deposits, withdrawals, interest payments, and a number of other useful transactions.");
  });

});

describe("Prueba de Contenido Money map ", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html"); 
  });

  it("MY MONEY MAP: Debe tener el texto correcto", () => {
    
    cy.get('#online_banking_features > :nth-child(4) > div > p') 
      .should("contain.text", "Use Zero to set up and monitor your personalized money map. A money map is an easy-to-use online tool that helps you manage your finances efficiently. With Money Map, you can create a budget, sort your finances into spending and savings categories,  check the interest your accounts are earning, and gain new understanding of your patterns with the help of Zero’s clear charts and graphs.");
  });
});

describe("Prueba de Carga de Imágenes", () => {
  beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com/index.html"); 
  });

  it("Debería cargar correctamente todas las imágenes en la página", () => {
    
    cy.get('.active > img') 
      .should("be.visible") 
      .each((image) => {
        
        cy.request(image.prop("src")).should((response) => {
          expect(response.status).to.equal(200); 
        });
      });
  });
});


describe("Prueba de Campos Obligatorios en Formularios", () => {
  beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com/login.html"); 
  });

  it("No debería permitir enviar el formulario vacío", () => {
    
    cy.get('.btn') 
      .click();

    
    cy.get('.alert').should('be.visible'); 
  });

  it("Debería permitir enviar el formulario con campos obligatorios completos", () => {
    
    cy.get('#user_login') 
      .type("username");

      cy.get('#user_password') 
      .type("password");

    

    
     
     cy.get('.btn').click();

  });
});

