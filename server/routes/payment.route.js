import express from "express";
const router = express.Router();
import {
  SendStripeApi,
  paymentHandler,
} from "../controllers/payment.controller.js";

import { verifyToken } from "../utils/verifyUser.js";

router.post("/payment/process", verifyToken, paymentHandler);

router.post("/stripeapi", verifyToken, SendStripeApi);


export default router;
