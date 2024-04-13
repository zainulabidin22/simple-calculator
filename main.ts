#! usr/bin/env node

import inquirer from "inquirer";

const user = await inquirer.prompt([
  {
    message: "Enter First Number: ",
    type: "number",
    name: "first",
  },
  {
    message: "Enter Second Number: ",
    type: "number",
    name: "second",
  },
  {
    message: "Enter any off the Operator ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication"],
  },
]);

if (user.operator === "Addition") console.log(user.first + user.second);
else if (user.operator === "Subtraction") console.log(user.first - user.second);
else if (user.operator === "Multiplication") console.log(user.first * user.second);
else if (user.operator === "Division") console.log(user.first / user.second);

else {
  console.log("You enter Unknown Operator");
}
