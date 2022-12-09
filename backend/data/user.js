const bcrypt = require("bcryptjs");
const users = [
  {
    name: "admin",
    email: "iamadmin@gmail.com",
    password: bcrypt.hashSync("11111", 10),
    isAdmin: true,
  },
  {
    name: "yun ya",
    email: "yunya@gmail.com",
    password: bcrypt.hashSync("11111", 10),
  },
  {
    name: "angle priya",
    email: "priyaangle@gmail.com",
    password: bcrypt.hashSync("11111", 10),
  },
];

module.exports = users;
