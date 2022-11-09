const USER = [];

export const UserRepository = () => {
    const find = (data = {}) => {
        return USER || 0;
    };
    const findOne = (data = {}) => {
        return USER[0] || 0;
    };

    const create = (data) => {
        USER.push(data);
    };
    const remove = () => {};
    const update = () => {};

    return Object.freeze({
        find,
        findOne,
        create,
        remove,
        update,
    });
};
