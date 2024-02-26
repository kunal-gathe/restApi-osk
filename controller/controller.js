import Product from "../models/product.models.js";

export const getAllProduct = async (req, res)=>{
    const userData = await Product.find({}).skip()
    res.status(200).json({userData})
}
export const getAllProductTesting = async (req, res)=>{
    const {company,name,sort, select} = req.query;
    let queryObject ={}
    let apiData = Product.find(queryObject);

    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex: name, $options: "i"};
    }
    if(sort){
        let sortFix = sort.replace("," , " ")
        apiData = apiData.sort(sortFix)
    }
    if(select){
        let selectFix = select.replace("," , " ")
        apiData = apiData.select(selectFix)
    }

    let page = Number(req.query.page) || 3;
    let limit = Number(req.query.limit) || 1;
    console.log(page, limit);
    let skip = (page -1) * limit;

    apiData = apiData.skip(skip).limit(limit)

    const userData = await apiData;
    res.status(200).json({userData})
}

