const jwt = require('jsonwebtoken');

module.exports = {
    createToken(id) {
        return jwt.sign({ id }, 'savio', { expiresIn: '1d' });
    },

    verifyToken(token) {
        return jwt.verify(token, 'savio');
    },
};
