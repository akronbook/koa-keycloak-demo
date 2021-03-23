import { IConfig } from "./IConfig";

const defaultPort: number = 3000;
class ConfigManager {
    public static GetConfig(): IConfig {
        switch (process.env.NODE_ENV) {
            case 'development':
                return {
                    Port: defaultPort,
                };
            case 'windows':
                return {
                    Port: defaultPort
                };
            default: //PRODUCTION in Heroku environments
                return {
                    Port: (process.env.PORT as any) | defaultPort
                };
        }
    }
}

export const config: IConfig = ConfigManager.GetConfig();