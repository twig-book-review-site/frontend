import {NextRequest, NextResponse} from "next/server";
import {redirect} from "next/navigation";
import config from "@/app/config";
export function POST(req: NextRequest) {
    redirect(config.KAKAO_LOGIN_URL);
}