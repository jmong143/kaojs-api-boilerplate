'use strict'

const Router = require('koa-trie-router')
const router = new Router()

const { fetchIndex, createIndex, updateIndex, deleteIndex } = require('./functions/index');

router.get('/', fetchIndex);
router.post('/', createIndex);
router.put('/:id', updateIndex);
router.delete('/:id', deleteIndex);


module.exports = router.middleware()