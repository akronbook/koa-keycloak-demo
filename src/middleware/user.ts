import * as Koa from "koa";

export async function GetUser(ctx: Koa.Context, next: () => Promise<any>): Promise<any> {
    ctx.body = {
        type: 'user'
    };
    
    await next();
}