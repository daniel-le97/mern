import express from "express";
// import records from "./routes/record.mjs";


import { config } from "dotenv";
import { Startup } from "./utils/StartUp";
import { DbConnection } from "./db/DbConfig";

config()

const PORT = process.env.PORT || 5050
const app = express();

// app.use(cors());
// app.use(express.json());
if (process.env.NODE_ENV == 'dev') {
  // @ts-ignore
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
}

Startup.ConfigureGlobalMiddleware(app)
// Startup.ConfigureRoutes(app)

// app.use("/record", records);
app.get('/', (req,res) => res.send('hello world'))

// Connect to Atlas MongoDB
DbConnection.connect()
// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
