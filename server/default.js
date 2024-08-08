import { products } from './constants.js';
import Product from './model/modle.product.js';

const defaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log('Default data inserted successfully!');
  } catch (error) {
    console.log('Error while inserting default data: ', error.message);
  }
};

export default defaultData;
