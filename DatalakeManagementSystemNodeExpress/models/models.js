var mongoose = require("mongoose");
mongoose.connect('mongodb://dlms_webapp:webapp@ds013971.mlab.com:13971/webappdb');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
	console.log("Mongo Connection succeeded.");
});
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

var User = mongoose.model("User", userSchema);

var docSchema = new Schema({
	id: { type: String, required: true, index: { unique: true }},
	username: {type: String, required: true},
    path: { type: String, required: true },
    permission: { type: String, required: true }
});

var Doc = mongoose.model("Doc", docSchema);


module.exports = {
	    User: User,
	    Doc: Doc
	};