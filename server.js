let express = require('express');
const res = require('express/lib/response');
let app = express();

let server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("App listening at http://%s:%s", host, port)
})

app.get('/greeting/:name', function (req, res) {
    res.send(`Hello there, ${req.params.name}`);
 })

app.get('/tip/:total/:tipPercentage',(req,res)=>{
    let total = req.params.total
    let percent = req.params.tipPercentage
    let answer = total * percent / 100
    res.send(`A ${percent}% on $${total} is $${answer}`)
   })


  let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get('/Magic/:question', (req, res) => {
    let answer = answers[Math.floor(Math.random()*answers.length)]
    res.send(`${req.params.question}?<hr/><h1>${answer}</h1>`)
})



