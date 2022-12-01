import DuplicateEntryException from "@core-shared/global-exceptions/duplicate-entry-exception";

class AuthenticationExceptionHandler {
    handleException = (error: any) => {
        if (error?.original?.code === 'ER_DUP_ENTRY') {
            throw new DuplicateEntryException('Username', error?.fields?.username);
        }
    }
}

const authenticationExceptionHandler = new AuthenticationExceptionHandler();
export default authenticationExceptionHandler;