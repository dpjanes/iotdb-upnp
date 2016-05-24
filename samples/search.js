/*
 *  Search for stuff using UPnP
 */

const iotdb = require("iotdb");
const _ = iotdb._;

const upnp = require('iotdb-upnp');

const cp = upnp.control_point();
cp.on("device", function (native) {
    console.log("+ device", native);
});
cp.search();
