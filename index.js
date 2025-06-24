const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const express = require("express");
const input = require("input");
require("dotenv").config();

const app = express();
app.use(express.json());

const apiId = Number(process.env.API_ID);
const apiHash = process.env.API_HASH;
const botToken = process.env.BOT_TOKEN;

const clients = {};

app.post("/send_code", async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: "Phone number is required" });

  const client = new TelegramClient(new StringSession(""), apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => phone,
    password: async () => await input.text("Enter 2FA password: "),
    phoneCode: async () => await input.text("Enter OTP code: "),
    onError: (err) => console.error(err),
  });

  await client.sendMessage("me", { message: "✅ Login berhasil via TrueLogin!" });

  res.json({ status: "success", message: "Login berhasil, cek Telegram Anda." });
});

app.get("/", (req, res) => {
  res.send("✅ TrueLogin backend aktif dan siap digunakan.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server berjalan di port", PORT);
});