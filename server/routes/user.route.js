import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  deleteUser,
  getUserListings,
  updateUser,
  getUser
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get('/:id',verifyToken,getUser)

export default router;
