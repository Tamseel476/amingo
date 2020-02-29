//if your  app is in production, check production env variables
if(process.env.NODE_ENV == "production"){
    module.exports = require('.keys_prod')
//otherwise if your app is running
} else {
    module.exports = require('./keys_work')
    
}