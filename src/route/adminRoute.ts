import * as KoaRouter from "koa-router";
import { GetAdmin } from "../middleware/admin";

export const AdminRouter: KoaRouter = new KoaRouter({prefix: "/test/admin"});  
AdminRouter.get("/", GetAdmin);