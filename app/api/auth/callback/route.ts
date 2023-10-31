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
        const userInfo = await authService.login(code, 'kakao')
        cookies().set('accessToken', userInfo.accessToken.token, { secure: true })
        cookies().set('refreshToken', userInfo.refreshToken.token, { secure: true })
        return NextResponse.redirect('/');
    } catch (e) {
        return NextResponse.rewrite(new URL('/login', req.url));
    }
}