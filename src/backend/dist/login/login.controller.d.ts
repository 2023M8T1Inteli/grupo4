import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(credentials: {
        email: string;
        senha: string;
    }, res: any): Promise<void>;
}
