export default (UserService) => {
    const signup = async (req, res, next) => {
        try {
            // using system registration
            console.log("create user using local registration");
            const user = await UserService.createUserWithLocalStrategy(req);
            // using google registration
            console.log("create user using openid-connect");

            res.status(200).json({
                message: "User Registered!",
                status: "success",
                user,
            });
        } catch (error) {
            res.status(400).json({
                messsage: "Bad Request, user cannot be registered",
                status: "failed",
            });
        }
    };
    const getUser = (req, res, next) => console.log("get user");
    const getAllUser = (req, res, next) => console.log("get all user");

    return Object.freeze({
        signup,
        getAllUser,
        getUser,
    });
};
