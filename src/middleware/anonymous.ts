import * as Koa from "koa";

export async function GetAnonymous(ctx: Koa.Context, next: () => Promise<any>): Promise<any> {
    ctx.body = {
        type: 'anonymous'
    };
    
    await next();
}