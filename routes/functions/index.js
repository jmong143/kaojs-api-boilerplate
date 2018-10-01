var bodyParser = require('koa-bodyparser');
var Index = require('../../models/index');

const getIndex = async (ctx, next) => {
    try{
        await Index.find({}, (err, data) => {
            if(err) throw err;
              ctx.type = 'json'
              ctx.body = {"data": data}
        });
    }catch(err){
        return next(err);
    }
}

const postIndex = async (ctx, next) => {
    let request = ctx.request.body;
    const index = new Index(request);
    try {
        const saveResult = await index.save();
        ctx.type = 'json'
        ctx.body = saveResult
    } catch(err) {
        return next(err);
    }
}

const putIndex = async (ctx, next) => {
    let id = `${ctx.params.id}`;
    let request = ctx.request.body;
    try{
        const updateProcess = await Index.findByIdAndUpdate(id, {$set: request}, { new: true });
        ctx.type = 'json'
        ctx.body = updateProcess
    }catch(err){
        return next(err);
    }
}

const deleteIndex = async (ctx, next) => {
    let id = `${ctx.params.id}`;
    try{
        let deleteProcess = await Index.findByIdAndRemove(id);
        ctx.type = 'json'
        ctx.body = deleteProcess
    }catch(err){
        return next(err);
    }
}

module.exports.fetchIndex = getIndex;
module.exports.createIndex = postIndex;
module.exports.updateIndex = putIndex;
module.exports.deleteIndex = deleteIndex;