import * as KoaRouter from "koa-router";
import { GetAllUser } from "../middleware/all-user";

export const AllUserRouter: KoaRouter = new KoaRouter({prefix: "/test/all-user"});  
AllUserRouter.get("/", GetAllUser);