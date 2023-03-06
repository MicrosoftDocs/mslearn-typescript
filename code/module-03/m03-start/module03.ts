/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
interface Loan {
  principal: number;
  interestRate: number; // Porcentagem da taxa de juros
}

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface conventionalLoan extends Loan {
  months: number;
}

/*  TODO: Declare the ConventionalLoan interface. */

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
  const { principal, interestRate } = loanTerms;
  // Calcula o pagamento mensal de um empréstimo apenas com juros
  let interest = interestRate / 1200;
  let payment = principal * interest;
  return "The interest only loan payment is " + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanTerms: conventionalLoan): string {
  const { principal, interestRate, months } = loanTerms;
  let interest = interestRate / 1200;
  let payment =
    (principal * interest) / (1 - Math.pow(1 / (1 + interest), months));
  return "The conventional loan payment is " + payment.toFixed(2);
}

const interestOnlyPayment = calculateInterestOnlyLoanPayment({
  principal: 30000,
  interestRate: 5,
});
const conventionalPayment = calculateConventionalLoanPayment({
  principal: 30000,
  interestRate: 5,
  months: 180,
});

console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
