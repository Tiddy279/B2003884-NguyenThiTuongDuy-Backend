const { ObjectId } = require('mongodb')

class ContactService {
    /**
     * 
     * @param {import('mongodb').MongoClient} client // để nhắc code
     */
    constructor(client) { // hàm khởi tạo 
        this.contact = client.db().collection("contact") // tạo bảng conttact trong DB
    }

    async create(payload) {
        return await this.contact.insertOne(this.extract(payload)) // thêm 1 dòng vào bảng conttact
    }

    async getAll() {
        return await this.contact.find({}).toArray() // Lấy tất cả liên hệ . toArary mới lấy đúng dữ liệu
    }
    async deleteall() {
        await this.contact.deleteMany({})
    }
    async getfavoritecontact() {
        return await this.contact.find({ favorite: true }).toArray()
    }
    async putupdatecontact(id, data) {
        await this.contact.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: this.extract(data) })
    }
    async getacontact(id) {
        return await this.contact.findOne({ _id: new ObjectId(id) })
    }
    async deletecontact(id) {
        return await this.contact.findOneAndDelete({ _id: new ObjectId(id) })
    }
    extract(payload) {
        const contact = {
            name: payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            favorite: payload.favorite
        }

        Object.keys(contact).forEach((key) => { // lặp qua các key dòng 35 -> 40
            if (!contact[key]) { // xóa key k có gtri
                delete contact[key]
            }
        })
        return contact
    }

}

module.exports = ContactService