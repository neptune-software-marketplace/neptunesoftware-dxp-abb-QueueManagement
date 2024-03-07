try {

    result.data = {
        status: await entities.queue_status.find(),
        queue: await entities.queue_type.find(),
        master: await entities.queue_master.find({
            select: ["id", "name", "note", "createdAt", "status", "queue", "identifier", "rating"],
            order: { createdAt: "ASC" },
            cache: false
        }),
    }

    complete();

} catch (e) {

    result.data = {
        status: "Error",
        description: e
    };

    complete();
}

