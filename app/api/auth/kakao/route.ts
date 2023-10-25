import {NextRequest, NextResponse} from "next/server";
import {redirect} from "next/navigation";
export function POST(req: NextRequest) {
    // const CLIENTCODE = 'p7l5SOlDcXe7THZnK31YfI7hxuxcP6g4';
    const REST_API_KEY = '51adc43e4bd2610e032b6999686634c7';
    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=http://localhost:3000/api/auth/callback`;
    redirect(url);
}