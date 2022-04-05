const config = {
    port: process.env.PORT,
    rabbitMQ: {
        server: process.env.RABBITMQ_SERVER
    },
}

module.exports = {
    config
}