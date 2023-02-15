class ContactController {
    createcontact(req, res) {
        res.send('Post /api/contact')
    }
    getallcontact(req, res) {
        res.send('Get /api/contacts')
    }
    deleteallcontact(req, res) {
        res.send('Delete /api/contacts')
    }
    getfavoritecontact(req, res) {
        res.send('Get /api/contacts/favorite')
    }
    putupdatecontact(req, res) {
        res.send('Get /api/contacts/' + req.params.id)
    }
    deletecontact(req, req) {
        res.send('Get /api/contacts/' + req.params.id)
    }
}
module.exports = new ContactController()