class Logger {
    public info = (message: any) => {
        console.log(message);
    }

    public success(message: any) {
        console.log("\x1b[32m" + message + "\x1b[0m" );
    }

    public error = (message: any) => {
        console.error( "\u001b[1;31m " + message + "\u001b[0m" );
    }

    public debug = (message: any) => {
        console.debug( "\u001b[1;1;33m " + message + "\u001b[0m" );
    }
}

const logger = new Logger();
export default logger;
