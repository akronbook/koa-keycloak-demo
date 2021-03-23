import * as KoaRouter from "koa-router";
import { GetAllUser } from "../middleware/all-user";
import {keycloak} from "../config/keycloak-config";

export const AllUserRouter: KoaRouter = new KoaRouter({prefix: "/test/all-user"});  
AllUserRouter.get("/", keycloak.protect(['user','admin']), GetAllUser);