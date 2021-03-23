import * as Koa from "koa";

export async function GetAdmin(ctx: Koa.Context, next: () => Promise<any>): Promise<any> {
    ctx.body = {
        type: 'admin'
    };
    
    await next();
}