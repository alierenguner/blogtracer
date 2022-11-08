import jwt from 'jsonwebtoken';
import fs from 'fs';
import TokenPayloadDto from '@base/dtos/TokenPayloadDto';
import { IAuthorizationTokenInput } from '@base/dtos/AuthorizationDtos';

class AuthorizationHelper {
    public sign = async (input: IAuthorizationTokenInput): Promise<string> => {
        return new Promise(async (resolve, reject) => {
            // token payload
            const payload: TokenPayloadDto = {
                id: input.id,
                username: input.username,
                ipAddress: input.ipAddress,
                role: input.role,
            } 

            // token signin' options
            var signOptions: jwt.SignOptions = {
                issuer: 'Blogtracer Dev',
                subject: input.email,
                audience: 'localhost',
                expiresIn:  "12h",
                algorithm:  "RS256"
            };

            // secret
            const secret = await this.getSecret();
                
            jwt.sign(payload, secret, signOptions, function(error, token) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                
                resolve(token);
            });
        })
    }

    public verify = async (token: string) => {
        // secret
        const secret = await this.getSecret();
        const isVerified = jwt.verify(token, secret);
            
        return isVerified;
    }

    public decode = (token: string) => {
        const payload = jwt.decode(token);

        return payload;
    }

    private getSecret = async (): Promise<string> => {
        return new Promise((resolve, reject) => {
            const fileName = 'src\\app\\config\\.secret';

            fs.readFile(fileName, 'utf8', function (err, data) {
                if (err)
                    reject(err);

                resolve(data);
            });
        })
    }
}

const authorizationHelper = new AuthorizationHelper();
export default authorizationHelper;