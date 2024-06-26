var checkDangNhap = (req,res,next) => {
    if(dangnhap){
    next();        
    }else{

    }
}

var checkAdmin = (req,res,next) => {

    
}

module.exports = {checkAdmin,checkDangNhap}

