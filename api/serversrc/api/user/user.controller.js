const User = require('./user.model');

exports.getUserList = async (req, res) => {
    try{
        const updateRes = await User.find({})
        res.json(updateRes)
    }catch (e) {
        res.status(422).send({
            done: false,
            error: "There is a failure in retrieving information for business",
            success: ""
        })
    }
};

exports.postUser = async (req, res) => {
    try{
        const newBusiness = new User({
            ...req.body
        })
        const business = await newBusiness.save()
        res.json(business)
    }catch (e) {
        res.status(422).send({
            done: false,
            error: "There is a failure in post information for business",
            success: ""
        })
    }
};

exports.editUser = async (req, res) => {
    const { businessId } = req.params
    try{
        await User.updateOne(
            {_id: businessId},
            {$set: {...req.body}});
        const resData = await User.find({_id: businessId})
        res.json(resData)
    }catch (e) {
        res.status(422).send({
            done: false,
            error: "There is a failure in update information for business",
            success: ""
        })
    }
};

exports.deleteUser = async (req, res) => {
    const { businessId } = req.params
    try{
        await User.findByIdAndRemove({_id: businessId}, (err, business) => {
            if(err) {
                res.json(err);
            } else {
                res.json('Successfully removed');
            }
        });
    }catch (e) {
        res.status(422).send({
            done: false,
            error: "There is a failure in delete information for business",
            success: ""
        })
    }
};

