const form1  = `<html>
<head>
  <title>General Form</title>
</head>
<body>
  <form action="https://www.google.com" method="GET">
    <label>Field 1</label>
    <input type="text" />
    <input type="submit" value="Sub"/>
  </form>
</body>
</html>
`;

const form2 = `<html>
<head>
  <title>General Form</title>
</head>
<body>
<iframe src="https://www.w3schools.com/"></iframe>
</body>
</html>

`


const form3 = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .text-success {
      color: greenyellow;
      text-shadow: 1px green solid;
    }
  </style>
</head>

<body style="display: flex; flex-direction: 'column'; justify-content: 'center'">
  <div>
    <h1 class="text-success">Welcome To Gnome</h1>
    <p >Custom lawn care for
      healthier soil, greener grass,
      and a safer playground</p>
  </div>

  <a href="http://localhost:3000/">Submit your feedback</a>
</body>

</html>`

export {form1, form2, form3};
