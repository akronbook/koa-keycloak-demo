import * as KoaRouter from "koa-router";
import { GetAdmin } from "../middleware/admin";
import {keycloak} from "../config/keycloak-config";

export const AdminRouter: KoaRouter = new KoaRouter({prefix: "/test/admin"});  
AdminRouter.get("/", keycloak.protect('admin'), GetAdmin);