import { Schema, model } from 'mongoose';

const ModuloSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    icono: {
        type: String,
        //required: true
    },
    href: {
        type: String,
        //required: true,
        //unique: true
    },
    orden: {
        type: String,
        //required: true
    }
});

ModuloSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = this._id;
    return object;
  }

export default model('Modulo', ModuloSchema);