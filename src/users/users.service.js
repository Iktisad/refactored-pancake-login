import LocalStrategy from 'passport-local';

export default (UserRepository) => {
    const createUserWithLocalStrategy = async ({ body }) => {
        const { password } = body;

        const salt = bcrypt.genSaltSync(10); //generate salt
        const hash = bcrypt.hashSync(password, salt); //generate hash
        body.password = hash;

        let data = await UserRepository.create(body);

        return data;
    };

    const loginWithLocalStrategy = async()=>{

        if (!username || !password)
        throw UnauthorizedException("Invalid Credentials");
        
        const user = await repository.findOne({ username });
        
        const localStrategy = new LocalStrategy(function verify(username, password, cb) {
            const { username, password } = body;
            
            if (!user) throw UnauthorizedException("Invalid Username.");
            const passwordMatch = bcrypt.compareSync(password, user.password); // true
        
            if (!passwordMatch) throw new Error("Invalid Password.");
            
        // return issueJWT(user);
            return cb(null, user);
        });
    };

    const createUserWithGoogleStrategy = async () => {};

    return Object.freeze({
        createUserWithLocalStrategy,
        loginWithLocalStrategy,
    });
};
