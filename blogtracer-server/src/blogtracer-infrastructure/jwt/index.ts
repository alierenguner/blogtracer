import fs from 'fs';
import _jwt from 'jsonwebtoken';
import appConfig from '@web-api/configurations/app-configuration';
import IJWTSignInput from './interfaces/ijwt-sign-input';
import TokenPayload from './types/token-payload';

class JWT {
    /** Description: Returns the json web token. */
    public sign = (input: IJWTSignInput): Promise<string> => {
        return new Promise(async (resolve, reject) => {
            const payload: TokenPayload = {
                id: input.id,
                username: input.username,
                ipAddress: input.ipAddress,
                role: input.role
            }
    
            // token signin' options
            var options: _jwt.SignOptions = {
                issuer: 'Blogtracer Dev',
                subject: input.email,
                audience: 'localhost',
                expiresIn:  "12h",
                algorithm:  "RS256"
            };
    
            const secret = await this.getSecret();
    
            _jwt.sign(payload, secret, options, (error, token) => {
                if (error) {
                    reject(error);
                }
    
                resolve(token);
            }) 
        })

    }

    /** Description: Verifies the json web token. */
    public verify = async (token: string) => {
        const secret = await this.getSecret();
        const isVerified = _jwt.verify(token, secret);
            
        return isVerified;
    }

    /** Description: Decodes the json web token. */
    public decode = (token: string) => {
        const payload = _jwt.decode(token);
        return payload;
    }

    /** Description: Returns the secret key of json web token. */
    private getSecret = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            const fileName = appConfig.jwtSecret;

            fs.readFile(fileName, 'utf8', function (err, data) {
                if (err)
                    reject(err);

                resolve(data);
            });
        })
    }
}

const jwt = new JWT();
export default jwt;