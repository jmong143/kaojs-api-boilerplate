const getIndex = async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
        message: '11Birds home page'
    }
}

const postIndex = async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = ctx.req
}

const putIndex = async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
        method: `PUT`,
        message: `You passed this id - ${ctx.params.id}`
    }
}

const deleteIndex = async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
        method: `DELETE`,
        message: `You passed this id - ${ctx.params.id}`
    }
}

module.exports.fetchIndex = getIndex;
module.exports.createIndex = postIndex;
module.exports.updateIndex = putIndex;
module.exports.deleteIndex = deleteIndex;