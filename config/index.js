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
    upload:{
        path:"./upload/"
    },
    admin:{
        name:"admin",
        pwd:"admin"
    },
    port:8989
}