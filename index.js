// Define a function that takes an email as an input
// Delay the task of sending the reminder by 5 seconds
// After the 5 seconds send a message that the reminder was sent
async function sendReminder(email) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Reminder sent to ${email}`);
}

sendReminder('elizabethmoraab@gmail.com');
sendReminder('josephwainaina@gmail.com');
sendReminder('matthewkuria@gmail.com');



// QUESTION TWO
// Start with a counter called attempt and set it to 0
// Begin to try to log in then increase the attempt by 1
// Wait 1 second before continuing and check if the attempt is equal to 3
// If yes show "Log in successful and stop"
// If attempt is less than 3 show "Log in failed try again"
// If it reaches 3 attempts and still failed show "Log in failed after 3 attempts"


async function tryLogin(){
  let attempt = 0;
  while (attempt<3){
    attempt++;
    console.log('Attempt ${attempt}')
    await new Promise (resolve =>setTimeout (resolve,1000));
    if(attempt ===3){
      console.log("Log in successful");
      return;
    }else{
      console.log("Log in failed, try again")
    }
  }
  console.log("Log in failed after 3 attempts")
}

tryLogin();

// QUESTION THREE
// Create a countdown timer from 5 to 0 , logging each number and says "Time's up! at the end."
// Decrement every second and clear the interval when counter reaches 0
// set a variable count to 5
// set up the interval
// check for the end condition


let count = 5;

const timer = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);


// QUESTION FOUR




// QUESTION FIVE
// Prepare a way to get the stocks price when given it's name(AAPL)
// Wait 2 seconds to stimulate a delay
// After wait, create a mesage that says ("Price for that symbol retrieved")
// Repeat for first stock
// Print the result after done then get the second stock's price
// Wait another 2 seconds again to create a message  then print the second result
function fetchPrice(symbol){
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(`Price for ${symbol}retrieved`)
    }, 2000);

    
  });

  

}


async function getPrices(){
  const price1= await
  fetchPrice("AAPL");
  console.log(price1);
  const price2 = await
  fetchPrice("GOOG");
  console.log(price2);
  
}

getPrices();


// QUSETION FIVE
// Create a function that will handle the loading process
// Make a represenation for the job that needs to be done and ensure there is a reminder to indicate when the job is finished
// Define the amount of time that will be used in milliseconds
// Wait for the job to be finished



async function loadPage() {
  console.log("Loading header...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Loading content...");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Loading footer...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Page fully loaded");
}

loadPage();




















