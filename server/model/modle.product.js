import mongoose from 'mongoose';

const productShema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  url: String,
  detialUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model('Product', productShema);

export default Product;
