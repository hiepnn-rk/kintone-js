import { Connection, App } from '@kintone/kintone-js-sdk';

kintone.events.on("app.record.index.show", function (ev) {
    const app = new App();

    app.getApps().then(rsp => {
        console.log(rsp);
    }).catch(err => {
        console.log(err.get());
    });
});
