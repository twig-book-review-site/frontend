import {NextRequest, NextResponse} from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams
  const code = searchParams.get('code')

  if (code){
    try {
        // 카카오 토큰 받기
        const { data } = await fetch("https://kauth.kakao.com/oauth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                client_id: `p7l5SOlDcXe7THZnK31YfI7hxuxcP6g4`,
                redirect_uri: "http://localhost:3000/api/auth/callback",
                code,
            }),
        }).then((res) => res.json())
        const {access_token, refresh_token} = data;

        // 사용자 정보 조회하기(이메일이랑 프로필 이미지 검색)
        const { data } = await fetch("https://kapi.kakao.com/v2/user/me", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then((res) => res.json());
        const email = data.kakao_account.email;
        const profileImage = data.properties.profile_image;
        console.log(email, profileImage);
    }
    catch(error) {
        console.log(error);
    }
  } else {
    return NextResponse.redirect('/api/auth/kakao')
  }
}