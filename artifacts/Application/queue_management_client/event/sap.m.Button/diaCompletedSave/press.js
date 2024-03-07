var options = {
    data: {
        process: "rateOrder",
        data: {
            identifier: Queue.identifier,
            rating: inRating.getValue(),
        },
    },
};

//apiAPI_eventHandler(options);
triggerEventServer({
    process: "rateOrder",
    data: {
        identifier: Queue.identifier,
        rating: inRating.getValue(),
    },
});
diaCompleted.close();
