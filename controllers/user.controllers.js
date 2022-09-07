const { response, request } = require ('express')



const userGet = (req, res = response) => {
    
    //aqui se pueden establecer valores por defecto
    const { q, 
            nombre = 'No name', 
            apikey, 
            page = 1, 
            limit 
        } = req.query;
    res.json({
        
        msg: 'get API - controller',
        q,
        nombre, 
        apikey,
        page,
        limit
    })
}

const userPost = (req, res = response) => {
    
    const { nombre, e_mail } = req.body;
    res.json({
        
        msg: 'post API - controller',
        nombre,
        e_mail
    })
}


const userPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        
        msg: 'put API - controller',
        id
    })
}

const userDelete = (req, res = response) => {
    res.json({
        
        msg: 'delete API - controller'
    })
}

const userPatch = (req, res = response) => {
    res.json({
        
        msg: 'patch API - controller'
    })
}
module.exports = {
    userGet, 
    userPost, 
    userPut,
    userDelete, 
    userPatch
}