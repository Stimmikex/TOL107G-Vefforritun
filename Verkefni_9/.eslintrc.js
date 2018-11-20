module.exports = {
    extends: 'airbnb-base',
    plugins: [
 
    ],
    env: {
      browser: true
    },
    rules: {
        'no-console': ['error', {
            allow: ['info','varn','error'],
        }]
    }
  };