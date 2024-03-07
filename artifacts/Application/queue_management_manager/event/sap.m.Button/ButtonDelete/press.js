var data = modelDialog.getData();

var options = {
    data: {id: data.id}
};

apidelete_from_queue(options);

Dialog.close();
sap.m.MessageToast.show("Archived!", {
    duration: 3000,                  // default
    width: "15em",                   // default
    my: "center center",             // default
    at: "center center",             // default
    of: document,                    // default
    offset: "0 0",                   // default
    collision: "fit fit",            // default
    onClose: null,                   // default
    autoClose: true,                 // default
    animationTimingFunction: "ease", // default
    animationDuration: 1000          // default
});
