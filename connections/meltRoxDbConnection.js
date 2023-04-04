const { connection } = require("mongoose");

const meltRoxDbConnection = async () => {
  try {
    const meltRoxDbConnection = await connection.useDb("melt_rox_db");
    console.log(`MongoDB connected: meltRoxDb`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = meltRoxDbConnection;
