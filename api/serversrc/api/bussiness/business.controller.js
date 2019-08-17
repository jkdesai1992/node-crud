const Business = require('./business.model');

exports.getBusinessList = async (req, res) => {
    try{
        const updateRes = await Business.find({})
        res.json(updateRes)
    }catch (e) {
        res.status(422).send({
            done: false,
            error: "There is a failure in retrieving information for business",
            success: ""
        })
    }
};

exports.postBusiness = async (req, res) => {
    try{
        const newBusiness = new Business({
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

exports.editBusiness = async (req, res) => {
    const { businessId } = req.params
    try{
        await Business.updateOne(
            {_id: businessId},
            {$set: {...req.body}});
        const resData = await Business.find({_id: businessId})
        res.json(resData)
    }catch (e) {
        res.status(422).send({
            done: false,
            error: "There is a failure in post information for business",
            success: ""
        })
    }
};

exports.deleteBusiness = async (req, res) => {
    const { businessId } = req.params
    try{
       await Business.findByIdAndRemove({_id: businessId}, (err, business) => {
            console.log("business",business)
            console.log("eeeeee",err)
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

