import Router from "express";
import { simpleGet } from "./controllers/get.js";
import { simplePost } from "./controllers/post.js";
import { simpleSum } from "./controllers/sum.js";

const router = Router();

const GET_ENDPOINT = "/simpleGet";
router.get(GET_ENDPOINT, simpleGet);
const POST_ENDPOINT = "/simplePost";
router.post(POST_ENDPOINT, simplePost);
const SUM_ENDPOINT = "/simpleSum";
router.get(SUM_ENDPOINT, simpleSum);

export { router, GET_ENDPOINT, POST_ENDPOINT, SUM_ENDPOINT };
