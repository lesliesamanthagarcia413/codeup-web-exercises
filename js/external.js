console.log("Hello from external JavaScript.");
alert("Welcome to my Website!");
let color = prompt("What is your favorite color?");
alert("Nice, " + color + " is my favorite color, too!");


let littleMermaidDays = parseInt(prompt("How many days do you want to rent The Little Mermaid?"));
let brotherBearDays = parseInt(prompt("How many days do you want to rent Brother Bear?"));
let herculesDays = parseInt(prompt("How many days do you want to rent Hercules?"));

alert ("You owe $" +(littleMermaidDays + brotherBearDays + herculesDays)*3 + " for rental charges ($3 per movie per day).");

let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let facebookHours = prompt("How many hours did you work for Facebook?");

const googleRate = 400;
const amazonRate = 380;
const facebookRate = 350;

let totalPay = googleRate*googleHours +
                amazonRate*amazonHours +
                facebookRate*facebookHours;
alert("You made $" + totalPay + " this week.");

let isClassOpen = confirm("Is there room in the class?");
let isScheduleOpen = confirm("Does this class work with your schedule?");
alert("You may register: " + (isClassOpen && isScheduleOpen));

let numberItemsPurchased = parseInt(prompt("How many items did you purchase?"));
let isOfferExpired = confirm("Press OK if the offer is not expired?");
let isPremiumMember = confirm("Press OK if you are a premium member?");
isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember);
alert("Offer applied: " + isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember));
