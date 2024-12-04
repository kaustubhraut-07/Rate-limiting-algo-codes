// Steps to Implement:
// Initialize the Bucket:

// Set the initial number of tokens to the capacity.
// Record the current time as the last refill time.
// Refill Mechanism:

// Use a timer (e.g., setInterval) to periodically refill the bucket.
// Calculate the elapsed time since the last refill.
// Determine the number of tokens to add based on the elapsed time and refill rate.
// Ensure the bucket does not exceed its capacity.
// Consume Tokens:

// Check if there are enough tokens available before consuming.
// Decrease the number of tokens by the amount consumed.
// Return a boolean or status indicating whether the consumption was successful.


class Bucket{
    constructor(capacity, refillRate, refillInterval) {
        this.capacity = capacity;
        this.tokens = capacity;
        this.refillRate = refillRate;
        this.refillInterval = refillInterval;
        this.lastRefillTime = Date.now();
    
        
        this.startRefill();
    }
    startRefill() {
        setInterval(() => {
            const now = Date.now();
            const  elapsed = now - this.lastRefillTime;
            const tokensToadd = Math.min(elapsed / this.refillInterval) * this.refillRate;
            this.tokens = Math.min(this.capacity, this.tokens + tokensToadd);
        
            
            this.lastRefillTime = Date.now();

        }, this.refillInterval);
    }
    consume(tokensToConsume) {
        if(tokensToConsume < this.tokens){
            this.tokens -= tokensToConsume;
            console.log("token consumed");
            return true;

        }else{
            console.log("token not consumed");
            return false;
        }
    }
}
const b =   new Bucket(10, 1, 1000);
function callConntinue(){

    if(b.consume(1)){
        console.log("token consumed");
    }
        else{
            console.log("token not consumed");
        }

}

setInterval(callConntinue, 500);