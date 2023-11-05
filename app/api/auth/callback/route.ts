import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { authService } from "@/app/service";
export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const code = searchParams.get('code') // code is accessToken
    if (!code) {
        return NextResponse.json({message: 'There is no code'}, {status: 400});
    }
    try {
        const tokenResponse = await authService.getAccessTokenFromKakao(code)
        const userInfo = await authService.login(tokenResponse.access_token, 'kakao')
        cookies().set({
            name: 'accessToken',
            value: userInfo.access.token,
            expires: new Date(Date.now() + userInfo.access.expiresIn * 1000)
        })
        cookies().set({
            name: 'refreshToken',
            value: userInfo.refresh.token,
            expires: new Date(Date.now() + userInfo.refresh.expiresIn * 1000)
        })
        return NextResponse.redirect(new URL('/bookshelf', req.url));
    } catch (e) {
        console.log(e)
        return NextResponse.redirect(new URL('/login', req.url));
    }
}