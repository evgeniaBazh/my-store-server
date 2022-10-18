import Product from "../models/Product.js";
import fileService from "../../fileService.js";

class ProductService {
  async create(product, img) {
    const fileName = fileService.saveFile(img);
    const createdProduct = await Product.create({ ...product, img: fileName });
    return createdProduct;
  }

  async getAll() {
    const products = await Product.find();
    return products;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Не указан id");
    }
    const product = await Product.findById(id);
    return product;
  }

  async update(product) {
    if (!product._id) {
      throw new Error("Не указан id");
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      product,
      { new: true },
    );
    return updatedProduct;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Не указан id");
    }
    const product = await Product.findByIdAndDelete(id);
    return product;
  }
}

export default new ProductService();
