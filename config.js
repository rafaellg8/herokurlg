var config = {}

config.host = process.env.HOST || "https://rafaellg8db.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "GeruNMDiTiCz5IJlv+i3vVKiX5T4lXerHCF/UxYIYYewqQHwy6PNXig+V7DwZvDjgUCfVhmmjLuCaSQHG0gglw==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});
