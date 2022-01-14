const data = require('../dummyData')



module.exports = {
    get: (req, res) => {
        
        res.status('500').send('hello')
    },
    
    login: (req, res) => {
        console.log('바디는', req.body)
        const { userId, pwd } = req.body
        if(userId && pwd){
            if(userId === 'test' && pwd === 'password'){
                res.json({
                    name: '테스트유저1',
                    email: 'test@test.com',
                    phone: '010-1234-5678'
                })
            } else {
                res.json('bad request')
            }
        }

        },

    auth: (req, res) => {
        res.send('ok')
            //res.json(data)
    },
};
