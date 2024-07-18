{/* <input>
placeholder={this};

 */}
// </input>

let cont=(req,res)=>{
    let cook= return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )

    res.send("hello controller called")
    .cookie("hello",cook);
    ;
}

module.exports=cont;