"use strict";

import path from "path";
import express, { Router } from "express";

const router = Router();

/* Expose Client Outputs Directory */
router.use("/outputs", express.static(path.join(__dirname + "/../../client/outputs")));

/* All other paths will be served by the frontend. Import any routers before this. */
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../../client/index.html"));
});

export default router;