interface calculateInterestProps {
  initialDeposit: number
  periodicalContributionAmout: number
  anualInterestRate: number
  duration: number
}

export function calculateInterest({initialDeposit, periodicalContributionAmout, anualInterestRate, duration}: calculateInterestProps) {
	return initialDeposit*(1+anualInterestRate/12)**(duration*12) + (periodicalContributionAmout*((1+(anualInterestRate/12))**(12*duration)-1))/(anualInterestRate/12)
}