describe('Hero Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');  // React uygulamasının doğru portta çalıştığını doğrula
  });

  it('Mobil menü açılır ve linkler görünür', () => {
    cy.get('button').find('svg').click();
  
    cy.contains('skills').should('be.visible');
    cy.contains('projects').should('be.visible');
    cy.contains('Hire Me').should('be.visible');  // hireMe yerine butonun metni kullanılıyor
  });
  

  it('Form hataları kontrol edilir', () => {
    // "Hire Me" butonuna tıkla
    cy.contains('Hire Me').click();

    // Boş formu gönder
    cy.get('form').submit();

    // Hata mesajlarını kontrol et
    cy.contains('Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Message is required').should('be.visible');
  });

  it('Form başarıyla doldurulur ve gönderilir', () => {
    // "Hire Me" butonuna tıkla
    cy.contains('Hire Me').click();

    // Formu doldur
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('textarea[name="message"]').type('Hello, I am interested in working with you.');

    // API isteğini engelle ve başarılı yanıt döndür
    cy.intercept('POST', 'https://reqres.in/api/workintech', {
      statusCode: 200,
      body: { success: true },
    });

    // Formu gönder
    cy.get('form').submit();

    // Başarı mesajını doğrula
    cy.contains('Message sent successfully!').should('be.visible');
  });
});
