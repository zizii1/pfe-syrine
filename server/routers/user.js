const express = require("express");
const user = require("../controllers/user");
const router = express.Router();

router.route("/add").post(user.add_users);

router.route("/addMany").post(user.add_many_users);

router.route("/findOne").get(user.find_one_users);

router.route("/findMany").get(user.add_many_users);

router.route("/updateOne/:_id").put(user.update_one_users);

router.route("/deleteOne/:_id").delete(user.delete_one_users);

router.route("/findAll").get(user.find_all_users);

module.exports = router;
