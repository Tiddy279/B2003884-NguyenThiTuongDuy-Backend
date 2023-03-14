const config = {
    db: {
        uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactbook",
    }
}
module.exports = config // xuất ra để bên ngoài dùng dc
  // chứa cấu hình của ứng dụng