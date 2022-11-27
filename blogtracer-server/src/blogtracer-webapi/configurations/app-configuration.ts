import dotenv from 'dotenv';

class AppConfiguration {
    public port: number;
    public jwtSecret: string;
    
    constructor() {
        dotenv.config();

        this.defineEnvProps();
    }
    
    /** Description: Defines environment properties. */
    private defineEnvProps = () => {
        this.port = parseInt(process.env.PORT) || 3000;
        this.jwtSecret = process.env.JWT_SECRET;
    }
}

const appConfig = new AppConfiguration()
export default appConfig;