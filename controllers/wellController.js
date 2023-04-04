const MeltEvaDB = require("../models/meltEvaDBModel");
const MeltRoxDB = require("../models/meltRoxDBModel");

const getTemplate = async (req, res) => {
  try {
    const { chipname, dye } = req.params;
    let data;
    if (dye === "EVA") {
      data = await MeltEvaDB.db
        .collection(chipname)
        .find(
          {},
          {
            projection: {
              _id: 1,
              cx: 1,
              cy: 1,
              y: 1,
              radius: 1,
              // show: 1,
              // label: 1,
            },
          }
        )
        .sort({ _id: 1 })
        .hint({ _id: 1 })
        .toArray();
    } else if (dye === "ROX") {
      const collection = MeltRoxDB.db.collection(chipname);
      data = collection.find({}).toArray();
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getTemplate,
};
