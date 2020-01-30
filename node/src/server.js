const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const asyncFunc = async () => {
  const db = await mongoose.connect("mongodb://mongo-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: "adminner",
    pass: "KdklsfjE23423ASDFds4",
    dbName: 'testDB'
  });

  const testSchema = new Schema({
    text: String
  });

  const testModel = mongoose.model("TextCollection", testSchema);

  const testToDb = new testModel({ text: "asdfasdf" });

  testToDb.save();
};

asyncFunc();
