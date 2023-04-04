const ImageModel = require("../Model/imageSchemas");

const getImage = async (req, res) => {
  try {
    const data = await ImageModel.find();
    res.status(200).json({
      status: "Success",
      data: data,
    });
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
};

const postImage = async (req, res) => {
  const { filename } = req.file;
  const saveImage = new ImageModel({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    date: new Date().toLocaleDateString(),
    likes: parseInt(Math.random() * 100),
    photo: filename,
  });
  try {
    await saveImage.save();
    res.status(201).send("Data uploaded successfully");
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
};

const deleteImage = async (req, res) => {
  try {
    const data = await ImageModel.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
};

module.exports = { deleteImage, getImage, postImage };