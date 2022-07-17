function generateCards(employees) {
    let cardArray = [];
        console.log(employees);
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].role === 'Manager') {
            cardArray.push( `
            <div class = "card, text-secondary, bg-primary">
                <div class = "card-header">
                    <h4>${employees[i].empName}</h4>
                    <span class="oi oi-bullhorn margin-right: 4rem"></span><span>${employees[i].role}</span>
                </div>
                <div class = "card-body">
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item">ID:${employees[i].manager.managerId}</li>
                        <li class = "list-group-item">Email<a href = "mailto:${employees[i].email}">${employees[i].email}</a></li>
                        <li class = "list-group-item">Office Number:${employees[i].manager.managerOffice}</li>
                    </ul>
                </div>
            </div>`)
        } else if (employees[i].role === 'Engineer') {
            cardArray.push( `<div class = "card, text-secondary, bg-primary">
            <div class = "card-header">
                <h4>${employees[i].empName}</h4>
                <span class="oi oi-wrench margin-right: 4rem""></span><span>${employees[i].role}</span>
            </div>
            <div class = "card-body">
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID:${employees[i].engineer.engineerId}</li>
                    <li class = "list-group-item">Email:<a href = "mailto:${employees[i].email}">${employees[i].email}</a></li>
                    <li class = "list-group-item">Github:<a href = "http://github.com/${employees[i].engineer.github}">${employees[i].engineer.github}</a></li>
                </ul>
            </div>
        </div>`)
        } else if (employees[i].role === 'Intern') {
            cardArray.push( `<div class = "card, text-secondary, bg-primary">
            <div class = "card-header">
                <h4>${employees[i].empName}</h4>
                <span class="oi oi-puzzle-piece margin-right: 4rem""></span><span>${employees[i].role}</span>
            </div>
            <div class = "card-body">
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID:${employees[i].intern.internId}</li>
                    <li class = "list-group-item">Email:<a href = "mailto:${employees[i].email}">${employees[i].email}</a></li>
                    <li class = "list-group-item">School:${employees[i].intern.intSchool}</li>
                </ul>
            </div>
        </div>`)
        }
    }
    console.log("I am a card", cardArray.join(''));
    return cardArray.join('');
}







function generateHTML(employees) {
    // generateCards(employees);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel = "stylesheet" href= "../dist/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <div class = "container">
            <div class = "row">
            <div class = "col">
                <header class = "header">
                <h1>Team Profile</h1>
            </header>
            </div>
        </div>
        <div class = "container">
            <div class= "row">
                <div class="col">
                ${generateCards(employees)}
                </div>
            </div>
        </div>
        </div>
    </body>
    </html>`
} 

module.exports = { generateHTML };