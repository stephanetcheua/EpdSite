/* tslint:disable */
import * as fs from "fs";
const window = {};

declare var process;
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import {platformServer, renderModuleFactory} from '@angular/platform-server';
import {ServerAppModule} from './app/server-app.module';
import {ngExpressEngine} from './modules/ng-express-engine/express-engine';
import {ROUTES} from './routes';
import {enableProdMode} from '@angular/core';
import * as bodyParser from 'body-parser';
import {Mailer} from "./app/class/mailer";

if(fs && process){
  fs.writeFileSync("errors.log","Error log created.\r\n","utf8");
  process.on('uncaughtException',(err: string) =>{
    fs.appendFileSync("errors.log",err +"\r\n","utf8");
  });

}

enableProdMode();
const app = express();
const mailer= new Mailer();

app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', '.');

const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });


// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/sendContact', jsonParser,(reg,res)=> {
  console.time('sendMail');
  console.log(reg);
  mailer.sendDev(<string>reg.body.subject, <string>reg.body.message, <string>reg.body.html);
 // mailer.send(<string>reg.body.subject, <string>reg.body.message, <string>reg.body.html,<string>reg.body.attachment,true);
  console.timeEnd('sendMail');
  res.status(200);
  res.send();
});


app.use('/', express.static('.', {index: false}));

ROUTES.forEach(route => {
    app.get(route, (req, res) => {
        console.time(`GET: ${req.originalUrl}`);
        res.render('index', {
            req: req,
            res: res
        });
        console.timeEnd(`GET: ${req.originalUrl}`);
    });
});


app.get("*", (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.status(404);
    res.render('index', {
        req: req,
        res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
});


let port = 8000;
if (process && process.env && process.env.PORT) {
    port = process.env.PORT;
}

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
