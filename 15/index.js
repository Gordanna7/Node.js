const express = require("express");
const auth = require("./handlers/auth");
const db = reuqire("./pkg/db");

db.init();

const api = express();

api.use(express.json());

api.post("/api/v1/auth/sign-up", auth.signUp);
