import * as KoaRouter from "koa-router";
import { AnonymousRouter } from "./route/anonymousRoute";
import { UserRouter } from "./route/userRoute";
import { AdminRouter } from "./route/adminRoute";
import { AllUserRouter } from "./route/allRoute";
export const AppRouter: KoaRouter = new KoaRouter();

AppRouter.use(AnonymousRouter.routes(), AnonymousRouter.allowedMethods());
AppRouter.use(UserRouter.routes(), UserRouter.allowedMethods());
AppRouter.use(AdminRouter.routes(), AdminRouter.allowedMethods());
AppRouter.use(AllUserRouter.routes(), AllUserRouter.allowedMethods());