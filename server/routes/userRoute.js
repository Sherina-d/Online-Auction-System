// routes.js
import express from "express";
import { create, login, getAllUsers } from "../controller/userController.js";
import jsontoken from "../JWT/jsontoken.js";

const router = express.Router();

router.post("/signup", create);
router.post("/login", login);
router.get("/users", jsontoken, getAllUsers); // Example of a protected route
//router.get("/user/:id", getUserById);
//router.put("/update/user/:id", update);
//router.delete("/delete/user/:id", deleteUser);

export default router;
