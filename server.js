const express = require("express");
const db = require("./db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");

// all possible questions
function startup() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "currentAction",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update An Employee Role",
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      //set up cases to do each of the things
      switch (response.currentAction) {
        case "View All Departments":
          console.log("view all dpt");
          viewAllDepartments();
          break;
        case "View All Roles":
          console.log("view all roles");
          break;
        case "View All Departments":
          console.log("view all employees");
          break;
        case "Add A Department":
          console.log("add dpt");
          break;
        case "Add A Role":
          console.log("Add role");
          break;
        case "Add An Employee":
          console.log("add employee");
          break;
        case "Update An Employee Role":
          console.log("update employee");
      }
    });
}

function viewAllDepartments() {
  //build the sql query
  sql = `SELECT * FROM department`;
  db.query(`SELECT * FROM department`, function (err, results, fields) {
    //console.log(results);
    console.table(results); //<== this is what we are interested in
    //console.log(fields);
  });
}
startup();
