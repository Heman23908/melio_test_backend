const mongoose = require("mongoose");

const melt_eva_db_uri =
  "mongodb+srv://" +
  process.env.DBUSERNAME +
  ":" +
  process.env.PASSWORD +
  "@meliolabs.c34ylqx.mongodb.net/melt_eva_db?retryWrites=true&w=majority";

const meltEvaDbConnection = async () => {
  try {
    const connection = await mongoose.connect(melt_eva_db_uri);

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = meltEvaDbConnection;
