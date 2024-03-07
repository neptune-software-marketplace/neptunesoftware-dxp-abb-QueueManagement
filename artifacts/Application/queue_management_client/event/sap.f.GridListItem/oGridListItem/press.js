const context = oEvent.oSource.getBindingContext("Master");
Queue.queue = context.getObject();
modeloPageUser.setData({});
oApp.to(oPageUser);