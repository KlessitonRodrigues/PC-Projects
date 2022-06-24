import { Router } from "express";

const homeRouter = Router();

homeRouter.get("/", (req, res) => {
    res.send("Everything Ok");
});

export default homeRouter;
