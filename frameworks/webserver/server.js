function serverConfig(app, server, config) {
    function startServer() {
        server.listen(config.port, function () {
            console.log("server running on : ", config.port);
        });
    }
    return {
        startServer
    }
}

module.exports = {
    serverConfig
}