const ctrl = {};

ctrl.index = (req, res) => {

};

ctrl.create = (req, res) => {
    console.log(req.file);
    res.send('works!');
};

ctrl.like = (req, res) => {
    
};

ctrl.comment = (req, res) => {
    
};

ctrl.remove = (req, res) => {
    
};

module.exports = ctrl;

