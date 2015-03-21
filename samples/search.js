/*
 *  Search for stuff using UPnP
 */
var upnp = require('iotdb-upnp');
var cp = upnp.control_point();
cp.on("device", function (native) {
    console.log("+ device", native);
});
cp.search();
