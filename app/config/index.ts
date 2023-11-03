export default {
    LOCAL_API: process.env.NEXT_LOCAL_API_URL,
    API_URL: process.env.NEXT_API_URL,
    KAKAO_LOGIN_URL: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/api/auth/callback`,
}