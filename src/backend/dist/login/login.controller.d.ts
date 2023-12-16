import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(credentials: LoginDto, res: any): Promise<void>;
}
