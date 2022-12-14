const { check } = require('express-validator')
const validatorMiddelware = require('../middlewares/validatorMiddleware')
const CategoryModel=require('../models/categorymodel')

exports.createProductValidation = [
    check('title')
        .isLength({ min: 3 })
        .withMessage('it is to short')
        .notEmpty()
        .withMessage('product required'),
    check('describtion')
        .notEmpty()
        .withMessage('product describtion required')
        .isLength({ max: 2000 })
        .withMessage('it is to long'),
    check('price')
        .notEmpty()
        .withMessage('product price required')
        .isNumeric()
        .withMessage('price must be number')
        .isLength({ max: 30 })
        .withMessage('to long price'),
    check('quantity')
        .notEmpty()
        .withMessage('product quantity required')
        .isNumeric()
        .withMessage('quantity must be number'),
    check('sold')
        .optional()
        .isNumeric()
        .withMessage('must be number'),
    check('category')
        .notEmpty()
        .withMessage('product must be belonges to category')
        .isMongoId()
        .withMessage('invaled id formate')
        .custom((categoryId)=>CategoryModel.findById(categoryId).then((category) => {
           if(!category){
            return Promise.reject(new Error(`no category for this Id : ${categoryId}`));
           }
        })),
    validatorMiddelware,
];
exports.getProductValidator = [
    check('id')
        .isMongoId()
        .withMessage("Invaild product Id"),
    validatorMiddelware
];
exports.updateProductValidator = [
    check('id')
        .isMongoId()
        .withMessage("Invaild product Id"),
    validatorMiddelware
];
exports.deleteProductValidator =[
    check('id')
        .isMongoId()
        .withMessage("Invaild product Id"),
    validatorMiddelware
];
