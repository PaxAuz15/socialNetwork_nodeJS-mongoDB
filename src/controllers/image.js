const path = require('path');
const {randomNumber} = require('../helpers/libs');
const fs = require('fs-extra');

const {Image} = require('../models');

const ctrl = {};

ctrl.index = (req, res) => {

};

ctrl.create = (req, res) => {
    
    const saveImage = async() => {
        const imgUrl = randomNumber();

        const images = await Image.find({filename: imgUrl});
        if (images.length > 0){
            saveImage();
        } else{
            console.log(imgUrl);
            const imageTempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`)
            //const targetPath = path.resolve('src/public/upload/'+imgUrl+' '+ ext)


            if(ext === '.png' || ext === '.jpg' || ext === '.jepg' || ext === '.gif'){
                await fs.rename(imageTempPath, targetPath);
                const newImg = new Image({
                    tittle: req.body.tittle,
                    filename: imgUrl + ext,
                    description: req.body.description
                });
                const imageSaved = await newImg.save();
                //res.redirect('/images');
                //console.log(newImg)
                res.send('works!');
            } else{
                await fs.unlink(imageTempPath);
                res.status(500).json({error: 'Only Images are allowed'});
            }

        }

        
    };

    saveImage();
    
    
};

ctrl.like = (req, res) => {
    
};

ctrl.comment = (req, res) => {
    
};

ctrl.remove = (req, res) => {
    
};

module.exports = ctrl;

