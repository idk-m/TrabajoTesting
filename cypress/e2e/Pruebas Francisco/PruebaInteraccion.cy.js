describe('Navega hacia la página', () => {
    it('Nave hacia la pagina', () => {
      cy.visit('http://zero.webappsecurity.com/')
      
    })
  })


  describe('Prueba de menus y botones', () => {
    beforeEach(() => {
      // Antes de cada prueba, visita la página web
      cy.visit('http://zero.webappsecurity.com/')
    })
  
    it('debería redirigir a la página correcta al hacer clic en un elemento del menú', () => {
      // Encuentra el elemento del menú que deseas probar y haz clic en él
      cy.get('#onlineBankingMenu').click()
      cy.url().should('eq', 'http://zero.webappsecurity.com/online-banking.html')
      cy.visit('http://zero.webappsecurity.com/')

      cy.get('#feedback').click()
      cy.url().should('eq', 'http://zero.webappsecurity.com/feedback.html')
      cy.visit('http://zero.webappsecurity.com/')

      cy.get('#homeMenu').click()
      cy.url().should('eq', 'http://zero.webappsecurity.com/index.html')
      cy.visit('http://zero.webappsecurity.com/')
      
    
    })
  })




  
  describe('Prueba de interectuar con formulario', () => {
    beforeEach(() => {
      // Antes de cada prueba, visita la página web
      cy.visit('http://zero.webappsecurity.com/')
    })
  
    it('debería rellenar formulario y redirigir a pagina.', () => {
      // Encuentra el  boton Signin
      cy.get('#signin_button').click()
      cy.get('#user_login') 
      .type("username");

      cy.get('#user_password') 
      .type("password");
      cy.get('.btn').click();
    })
  })
  
  