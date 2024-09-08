module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/tests/**/*.test.ts'],
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
};
