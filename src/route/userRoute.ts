import * as KoaRouter from "koa-router";
import { GetUser } from "../middleware/user";

export const UserRouter: KoaRouter = new KoaRouter({prefix: "/test/user"});  
UserRouter.get("/", GetUser);