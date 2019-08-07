const base = field =>(req,res,key)=>{
    if(req[field] && req[field][key]) return false;
    res.status(400).send({
        success:false,
        massage:`math error:missing key '${key}'`
    })
    return true
}
module.exports = {
    body:base('body'),
    query:base('query')
}