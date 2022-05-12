/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const routes_1 = __importDefault(require('./utils/routes'));
const configExpress_1 = __importDefault(require('./config/express'));

dotenv_1.default.config();

const app = (0, express_1.default)();

configExpress_1.default(app);
routes_1.default(app);

const port = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Healthy Check Ambulances System');
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
