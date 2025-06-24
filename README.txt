✅ TRUELOGIN TELEGRAM BOT (Render Version)

1. Buka https://render.com dan login
2. Klik "New Web Service" lalu pilih "Manual Deploy" atau sambungkan ke GitHub
3. Upload semua file ini:
   - index.js
   - package.json
   - .env (buat berdasarkan .env.example)
4. Isi ENV VARS:
   - API_ID
   - API_HASH
   - BOT_TOKEN
5. Build Command: npm install
6. Start Command: node index.js
7. Akses URL Render kamu → kirim nomor via POST ke /send_code

Contoh curl:
curl -X POST https://your-render-url/send_code -H "Content-Type: application/json" -d '{"phone": "+628xxxx"}'

🔐 Script ini menggunakan gramjs dan Express