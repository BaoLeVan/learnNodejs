const AccountModel = require("../model/Account")


const accountController = {
    registerAccount: async (req,res) => {
        try {
            const userAccount = req.body.username;
            const modelAccount = await AccountModel.findOne({username: userAccount});
            if(modelAccount === null){
                const account = new AccountModel(req.body);
                const register = await account.save();
                res.status(200).json(register);
            }
            res.status(500).json("Tài khoảng hiện tại đã có")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    loginAccount : async (req,res) => {
        try {
            const userAccount = req.body.username;
            const password = req.body.password;
            const account = await AccountModel.findOne({username: userAccount});
            if(account.password === password ){
                res.status(200).json("Đăng nhập thành công")
            }else{
                res.status(500).json("Đăng nhập sai tài khoản hoặc mật khẩu")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = accountController