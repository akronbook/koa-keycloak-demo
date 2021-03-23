import * as KoaRouter from "koa-router";
import { GetAnonymous } from "../middleware/anonymous";

export const AnonymousRouter: KoaRouter = new KoaRouter({prefix: "/test/anonymous"});  
AnonymousRouter.get("/", GetAnonymous);