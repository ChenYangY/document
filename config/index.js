module.exports = {
    db:{
        user:"tester",
        pass:"tester",
        port:"27017",
        name:"resume"
    },
    session: {
        secret: 'resume',
        key: 'nid',
        maxAge: 2592000000
    },
    port:8989
}