Cypress.on('uncaught:exception', (err) => {
  // Suppress only known hydration mismatches or React minified errors
  if (
    err.message.includes('Minified React error #418') ||
    err.message.includes('Minified React error #423') ||
    err.message.includes('Hydration failed')
  ) {
    return false; // prevent Cypress from failing the test
  }

  // Let all other errors fail the test
  return true;
});
