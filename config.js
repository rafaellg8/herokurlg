var config = {}

config.host = process.env.HOST || "https://rafaellg8db.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "GeruNMDiTiCz5IJlv+i3vVKiX5T4lXerHCF/UxYIYYewqQHwy6PNXig+V7DwZvDjgUCfVhmmjLuCaSQHG0gglw==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
