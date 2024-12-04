// Window Concept:

// Think of the window as a moving frame that captures a specific time period.
// As time progresses, the window "slides" forward, including new requests and excluding old ones.
// Request Management:

// Focus on managing the timestamps of requests.
// Use the current time to determine the start of the window and filter out old requests.
// Rate Limiting:

// The goal is to limit the number of requests within a specific time frame.
// Ensure that the number of requests does not exceed the max limit within the window.















class SlidingWindow {
    constructor(windowsizeinsec, marequest) {
        this.maxrequest = marequest;
        this.windowsizeinsec = windowsizeinsec;
        this.window = [];


    }
    startWindow() {
        const now = Date.now();
        const windowrange = now - this.windowsizeinsec;

        this.window = this.window.filter(request => request > windowrange);

        if (this.window.length < this.maxrequest) {
            this.window.push(now);
            return true;

        } else {
            return false;
        }


    }

}

const w = new SlidingWindow(6000, 10);

function makeRequest() {
    if (w.startWindow()) {
        console.log('Request processed');
    } else {
        console.log('Request dropped');
    }
}

setInterval(makeRequest, 500);