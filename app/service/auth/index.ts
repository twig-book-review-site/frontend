import config from '@/app/config'

type LoginResponse = {
    access: {
        token: string,
        expiresIn: number,
    }
    refresh: {
        token: string,
        expiresIn: number,
    }
    nickname: string;
}

const url = config.API_URL!;

const checkToken = async (token: string, type: string) => {
    console.log('checkToken function in service', token, type);
    const checkTokenResponse = await fetch(`${url}/check-token?token=${token}&type=${type}`);
    return await checkTokenResponse.json();
}

const login = async (accessToken: string, authServer: string): Promise<LoginResponse> => {
    const loginResponse = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            accessToken,
            authServer,
        }),
    });
    return await loginResponse.json();
}

const reissue = async () => {
    console.log('reissue');
}

const getAccessTokenFromKakao = async (code: string) => {
    const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/api/auth/callback&code=${code}`;
    return await fetch(tokenUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    }).then((res) => res.json());
}

export default {
    checkToken,
    login,
    reissue,
    getAccessTokenFromKakao,
}