import "dotenv/config";

import express from "express";
import cors from "cors";
import morgan from "morgan";

import userRouter from "./users/routes.js";
import User from "./users/model.js";
// import Conversation from "./conversation/model.js";

const port = process.env.PORT || 8080;

const app = express();

const syncTables = async () => {
  // User.hasMany(Message, { foreignKey: "Conversation_id" });
  // Message.belongsTo(User, { foreignKey: "user_id" });

  // User.hasmany(Conversation, { foreignKey: "user_id" });
  // Conversation.hasMany(User, { foreignKey: "user_id" });

  // Conversation.hasMany(Message, { foreignKey: "Conversation_id" });
  // Message.belongsTo(Conversation, { foreignKey: "Conversation_id" });

  await User.sync();
  // await Conversation.sync();
};

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API Healthy" });
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  syncTables();
  console.log("DB Connected");
});

export default app;
