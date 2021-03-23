import * as Koa from "koa";

export async function GetAllUser(ctx: Koa.Context, next: () => Promise<any>): Promise<any> {
    ctx.body = {
        type: 'all-user'
    };
    
    await next();
}