export function dispatchEventMock(event) {
}

export function addEventListener(event, callback) {
}

global.dispatchEvent = dispatchEventMock;
global.addEventListener = addEventListener;
