
export default (UserRepository) => {
    const createUserWithLocalStrategy = async ({ body }) => {
        const { password } = body;

        const salt = bcrypt.genSaltSync(10); //generate salt
        const hash = bcrypt.hashSync(password, salt); //generate hash
        body.password = hash;

        let data = await UserRepository.create(body);

        return data;
    };

    const getUser = async()=>{
        
        
    };

    const createUserWithGoogleStrategy = async () => {};

    return Object.freeze({
        createUserWithLocalStrategy,
        getUser,
    });
};
