function daysToWithdraw(amount, dayLimit, weekLimit) {
  let days = 0;
  let totalWithdrawn = 0;
  let weekWithdrawn = 0;

  while (totalWithdrawn < amount) {
    const dailyWithdraw = Math.min(dayLimit, amount - totalWithdrawn);
    if (weekWithdrawn + dailyWithdraw > weekLimit) {
      days += 7 - (days % 7);
      weekWithdrawn = 0;
    } else {
      totalWithdrawn += dailyWithdraw;
      weekWithdrawn += dailyWithdraw;
      days++;
    }
  }

  return days;
}

const amount = 10000;
const dayLimit = 700;
const weekLimit = 3000;

console.log(daysToWithdraw(amount, dayLimit, weekLimit));
