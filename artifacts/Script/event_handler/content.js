const { In } = operators;

try {

    let EventRes = {
        process: payload.process,
        data: null
    };

    // delete payload.data.createdAt;
log.info(payload)
    switch (payload.process) {

        case "updateQueue":
        log.info(payload.data)
            const recUpdate = await entities.queue_master.save(payload.data);
            EventRes.data = await entities.queue_master.findOne({ id: recUpdate.id });
            break;

        case "leaveQueue":
            const recDelete = await entities.queue_master.findOne({ identifier: payload.data.identifier });
            await entities.queue_master.delete({ identifier: payload.data.identifier });
            EventRes.data = recDelete;
            break;

        case "rateOrder":
            let recRating = await entities.queue_master.findOne({ identifier: payload.data.identifier });
            recRating.rating = payload.data.rating;

            const recSaved = await entities.queue_master.save(recRating);
            EventRes.data = recSaved;
            break;

        default:
            log.error("SkyeQ: Process not handled", payload.process);
            break;
    }

    // Trigger Event for Clients
    await p9.events.publish("QueueClient", EventRes);

    complete();

} catch (e) {
    log.error("Queue Management: Error in processing", e);
    complete();
}
