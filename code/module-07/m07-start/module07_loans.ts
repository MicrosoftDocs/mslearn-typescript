/*  TODO Update the interface declarations. */
interface Loan {
    principle: number,
    interestRate: number        //* Interest rate percentage (eg. 14 is 14%)
}
interface ConventionalLoan extends Loan {
    months: number      //* Total number of months
}