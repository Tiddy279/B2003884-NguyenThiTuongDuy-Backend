const ContactService = require('../services/contact.service')
const MONGODB = require('../utils/mongodb.utils')

class ContactController {
    async createcontact(req, res) {
        const contactService = new ContactService(MONGODB.client)
        await contactService.create(req.body)
        res.status(201).end()
    }
    async getallcontact(req, res) {
        const contactService = new ContactService(MONGODB.client)

        res.send(await contactService.getAll())
    }
    async deleteallcontact(req, res) {
        const contactService = new ContactService(MONGODB.client)
        await contactService.deleteall()
        res.end()
    }
    async getfavoritecontact(req, res) {
        const contactService = new ContactService(MONGODB.client)
        res.send(await contactService.getfavoritecontact())
    }
    async putupdatecontact(req, res) {
        const contactService = new ContactService(MONGODB.client)
        await contactService.putupdatecontact(req.params.id, req.body)
        res.end()
    }
    async getacontact(req, res) {
        const contactService = new ContactService(MONGODB.client)
        res.send(await contactService.getacontact(req.params.id))
    }
    async deletecontact(req, res) {
        const contactService = new ContactService(MONGODB.client)
        await contactService.deletecontact(req.params.id)
        res.end()
    }
}
module.exports = new ContactController()