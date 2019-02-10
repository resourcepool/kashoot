const OPEN_CONNECTION = 'OPEN_CONNECTION';
const CONNECT_TO_DEVICE = 'CONNECT_TO_DEVICE';
const DEVICE_CONNECTED = 'DEVICE_CONNECTED';

/**
 * Action creator dispatched when a serial connection should be open
 * @return {Object} A poll messages action
 */
function openSerialConnection() {
    return {
        type: OPEN_CONNECTION,
    };
}

/**
 * Action creator dispatched when we should connect to a remote device
 * @return {Object} A poll messages action
 */
function connectToDevice(device, index) {
    return {
        type: CONNECT_TO_DEVICE,
        data: { device: device, index: index }
    };
}


/**
 * Action creator dispatched when a new device is found
 * @param dev {TODO}
 * @returns {{data: {}, type: string}}
 */
function deviceAvailable(dev) {
    return {
        type: DEVICE_AVAILABLE,
        data: dev,
    };
}

module.exports = {
    OPEN_CONNECTION,
    CONNECT_TO_DEVICE,
    DEVICE_CONNECTED,
    openSerialConnection,
    deviceAvailable,
    connectToDevice
};