const { ObjectId } = require('mongodb')

class ContactService {
    /**
     * 
     * @param {import('mongodb').MongoClient} client 
     */
    constructor(client) {
        this.contact = client.db().collection("contact")
    }

    async create(payload) {
        return await this.contact.insertOne(this.extract(payload))
    }

    async getAll() {
        return await this.contact.find({}).toArray()
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

        Object.keys(contact).forEach((key) => {
            if (!contact[key]) {
                delete contact[key]
            }
        })
        return contact
    }

}

module.exports = ContactService