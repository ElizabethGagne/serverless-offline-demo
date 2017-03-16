'use strict';

const kcl = require('kinesis-client-library');

kcl.AbstractConsumer.extend({

    // create places to hold some data about the consumer
    initialize: function (done) {
        done()
    },

    processRecords: function (records, done) {
        var record;
        for (var i = 0 ; i < records.length ; ++i) {
            record = records[i];
            console.log("Record received: " + record.Data.toString("utf-8"));
        }

        done(null, true);
    },

    shutdown: function(shutdownInput, done) {
        done();
    }
});
