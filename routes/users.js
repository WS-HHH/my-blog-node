const router = require('koa-router')()
const Users = require('../controller/users.js');

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/list', async function (ctx, next) {
  ctx.body = await Users.getUsersList();
})

module.exports = router
