/**
 * This file should be temporary
 * See https://github.com/angular/angular-cli/pull/5194
 */
/* tslint:disable */

declare var process;
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModuleNgFactory } from './ngfactory/app/server-app.module.ngfactory';
import { ngExpressEngine } from './modules/ng-express-engine/express-engine';
import { ROUTES } from './routes';
import { enableProdMode } from '@angular/core';
import * as bodyParser from 'body-parser';



enableProdMode();
const app = express();

app.engine('html', ngExpressEngine({
  aot: true,
  bootstrap: ServerAppModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', '.');

const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use('/', express.static('.', { index: false }));

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
    console.log("test123");
    console.time(`GET: ${req.originalUrl}`);
    var check = 0;
    for (var route in ROUTES) {
        console.log(ROUTES[route]);
        console.log(req.originalUrl);
        if (req.originalUrl === '/' + ROUTES[route]) {
            check = 1;
        }
    }
    if (check === 0){
        res.status(404);
    }
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
