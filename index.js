const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Your POST endpoint
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let concat_string = "";

  data.forEach((item) => {
    if (!isNaN(item)) {
      const num = parseInt(item);
      if (num % 2 === 0) {
        even_numbers.push(num);
      } else {
        odd_numbers.push(num);
      }
      sum += num;
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item.toUpperCase());
      concat_string += item;
    } else {
      special_characters.push(item);
    }
  });

  res.json({
    is_success: true,
    user_id: "abhilash_maity_22072004",
    email: "abhilash.maity2022@vitstudent.ac.in",
    roll_number: "22BEC0893",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum,
    concat_string,
  });
});

// Export app as Vercel serverless function
module.exports = app;