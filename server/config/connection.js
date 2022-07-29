const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://djpdim:Djanthi141185@cluster0.g5ijwcb.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
})

module.exports = mongoose.connection
