// Function to calculate mortgage payments
function calculateMortgageLoan(principal, annualInterestRate, loanTermYears) {
    // Convert annual interest rate to monthly rate
    const monthlyInterestRate = (annualInterestRate / 100) / 12;

    // Convert loan term from years to months
    const loanTermMonths = loanTermYears * 12;

    // Calculate monthly payment using the formula
    // P = (r * PV) / (1 - (1 + r)^(-n))
    const numerator = monthlyInterestRate * principal;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths);
    const monthlyPayment = numerator / denominator;

    return monthlyPayment;
}

// Input values
const loanPrincipal = 200000; // Loan amount in dollars
const interestRate = 5.0;     // Annual interest rate (in percentage)
const loanTerm = 30;          // Loan term in years

// Calculate the monthly mortgage payment
const monthlyPayment = calculateMortgageLoan(loanPrincipal, interestRate, loanTerm);

// Display the result
console.log(`Loan Amount: $${loanPrincipal}`);
console.log(`Interest Rate: ${interestRate}%`);
console.log(`Loan Term: ${loanTerm} years`);
console.log(`Monthly Payment: $${monthlyPayment.toFixed(2)}`);
