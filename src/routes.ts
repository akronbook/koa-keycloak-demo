import * as KoaRouter from "koa-router";
import { AnonymousRouter } from "./route/anonymousRoute";
export const AppRouter: KoaRouter = new KoaRouter();

AppRouter.use(AnonymousRouter.routes(), AnonymousRouter.allowedMethods());