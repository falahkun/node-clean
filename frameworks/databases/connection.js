function connection(mongoose, config, options) {
    function connect() {
        mongoose.connect(config.mongo.url)
    }
}