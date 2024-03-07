const reqBody = req.body;
log.info(reqBody)
const item = await entities.queue_master.delete(reqBody.id);

complete()