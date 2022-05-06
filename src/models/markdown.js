'use strict'
const { 
    Model
} =require ('sequelize');
module.exports = (sequelize, DataTypes) =>{
    class Markdown extends Model{
        static associate(models){

        }
    };

    Markdown.init({ 
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        doctorId:DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
    },{
        sequelize,
        modeName: 'Markdown',
    });
    return Markdown;
};