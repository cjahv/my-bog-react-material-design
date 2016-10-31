/**
 * Created by jahv on 2016/10/26.
 */
import DataType from 'sequelize';
import Model from '../sequelize';

const Article = Model.define('Article', {

    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true,
    },

    title: DataType.STRING(255),

    content: DataType.TEXT,

    createDate: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    },

    modifyDate: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    },

    reading: {
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    traffic: {
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

}, {

    indexes: [
        { fields: ['title'] },
    ],

});

export default Article;
