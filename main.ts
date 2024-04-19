#! /usr/bin/env node
import { lookupService } from "dns/promises";
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
    name : "sentence",
    message : "Enter a sentence",
    type : "input",
    } 
]);

let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log("- Sentence words:");
console.log(words);
console.log(words.length);
console.log("=".repeat(60));




