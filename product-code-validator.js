// Validates product codes of the format: # + 4 uppercase letters + 3 digits
// e.g. #ABCD123 is valid, #abc1234 is invalid

function validateProductCode(code) {
  const pattern = /^#[A-Z]{4}[0-9]{3}$/;
  return pattern.test(code)
    ? "Product code verified successfully"
    : "Product code is not valid";
}

// Sample calls
console.log(validateProductCode("#ABCD123")); // Product code verified successfully
console.log(validateProductCode("#abc1234")); // Product code is not valid

// Export for use in other modules (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = validateProductCode;
}
