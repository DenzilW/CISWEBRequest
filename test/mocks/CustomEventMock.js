class CustomEvent {
    constructor(event, parameter) {
        this.event = event;
        this.parameter = parameter;
    }
}

global.CustomEvent = CustomEvent;