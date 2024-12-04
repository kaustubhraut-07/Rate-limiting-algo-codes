

// LeakyBucket Class:

// capacity: The maximum number of requests the bucket can hold.
// queue: An array to store the requests.
// leakRate: The number of requests processed (leaked) per leak interval.
// leakInterval: The time interval (in milliseconds) at which requests are processed.
// startLeak Method:

// This method uses setInterval to periodically process (leak) requests from the queue.
// It removes the oldest requests from the queue up to the leak rate.
// addRequest Method:

// This method adds a new request to the queue if there is space.
// If the queue is full, the request is dropped.
// Example Usage:

// An instance of LeakyBucket is created with a capacity of 10 requests, leaking 1 request every 1000 milliseconds.
// The makeRequest function simulates making a request every 500 milliseconds, adding it to the queue if there is space.
// By using a queue, the Leaky Bucket algorithm ensures that requests are processed in an orderly and controlled manner,
//  helping to manage traffic and prevent system overload.
class LeakyBucket {


    constructor(capacity, leakrate, leakInterval) {
        this.capacity = capacity;
        this.leakrate = leakrate;
        this.queue = []
        this.leakInterval = leakInterval

        this.startLeak();

    }
    startLeak() {
        setInterval(() => {
            for (let i = 0; i < this.leakrate; i++) {
                if (this.queue.length > 0) {
                    this.queue.shift();
                }




            }

        }, this.leakInterval);
    }
    consume(request) {
        if (this.queue.length < this.capacity) {
            this.queue.push(request);

            return true;

        }
        else {
            return false
        }
    }
}

const b = new LeakyBucket(10, 1, 1000);


function makeRequest() {
    const request = { id: Math.random(), timestamp: Date.now() };
    if (b.consume(request)) {
        console.log('Request processed');
    } else {
        console.log('Request dropped');
    }
}

setInterval(makeRequest, 500);