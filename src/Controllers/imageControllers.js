let imageModel=require("../Model/imageSchemas")
let Model= require("../Model/imageSchemas")
let getImage = async (req, res) => {
    try {
        let data = await imageModel.find();
        res.status(201).json({
            status: "Success",
            data: data
        });
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            message: e.message,
        });
    }
}

let postImage=(req, res) => {
    const { filename } = req.file;
    const saveImage =  Model({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        date: new Date().toLocaleDateString(),
        likes: parseInt(Math.random() * 100),
        photo: filename
    });
    saveImage
      .save()
      res.send("data uploaded succefully")
  }

let deleteImage= async (req, res) => {
    try {
      let data = await imageModel.deleteOne({ _id: req.params.id });
      res.send(data);
    } catch (e) {
      res.status(404).json({
        status: "Failed",
        message: e.message,
      });
    }
  }

  module.exports={deleteImage,getImage,postImage }