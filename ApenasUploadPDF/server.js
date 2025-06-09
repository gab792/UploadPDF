import express from 'express';
import chalk from 'chalk';

import "./bootstrap/app.js"
import routes from "./routes/routes.js";
import "./config/sequelize_relations.js";

const app = express();
app.use("/", routes);

const webPort = process.env.PORT || 3000;
const nodePort = process.env.NODE_PORT || webPort;

console.log(chalk.blue(`Container: ${process.env.IS_CONTAINER}`));

app.listen(nodePort, () => {
    console.log(chalk.green(`Servidor: http://localhost:${webPort}`));
    console.log(chalk.yellow(`Apis Swagger: http://localhost:${webPort}/docs`));
});