const registerController= async (req,res) => {
    const{name,email,password}=req.body;

    const existuser=await User.findOne({email})

    if(existuser){
        return res
        .status(200)
        .send({message:"user already exists", success:"false"})
    }

    const newuser=await user.save(req.body)

    if(newuser){
        return res.status(400).send({message:"new user created", success:"true"})
    }
}