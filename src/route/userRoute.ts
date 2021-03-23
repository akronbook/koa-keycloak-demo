import * as KoaRouter from "koa-router";
import { GetUser } from "../middleware/user";
import {keycloak} from "../config/keycloak-config";

export const UserRouter: KoaRouter = new KoaRouter({prefix: "/test/user"});  
UserRouter.get("/", keycloak.protect('user'), GetUser);