const newYears = "1 Jan 2023"

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(seconds / 3600 / 24);

  console.log(days);
}

countDown();



// console.log(3600 / 24)
