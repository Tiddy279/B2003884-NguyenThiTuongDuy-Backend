const MONGOdb = require("mongodb")
class MONGODB {
    static connect = async (uri) => { // gọi hàm không cần tạo đối tượng, uri là tham số chứa 
        //đường dẫn tới csdl ở config/index.js
        if (this.client) return this.client; // client là tt tự tạo nhưng phải có this
        //Ban đầu mặc định client chưa dc tạo thì chạy tiếp dòng 7 
        this.client = await MONGOdb.MongoClient.connect(uri);
        //Lấy MongoClient từ Mongodb gọi hàm connect rồi truyền đường dẫn tới csdl gán lại cho client
        return this.client;
    };
}
module.exports = MONGODB;
