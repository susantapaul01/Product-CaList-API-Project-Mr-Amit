import { CreateProductService } from "../service/ProductService.js";



export const CreateProduct = async (req, res) => {
    let result = await CreateProductService(req);
    return res.status(200).json(result);
};