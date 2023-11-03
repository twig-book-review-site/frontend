import config from '@/app/config'

type LoginResponse = {
    accessToken: {
        token: string,
        expiresIn: number,
    }
    refreshToken: {
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
    `http://219.248.110.167:30800/login`

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
    console.log(loginResponse)
    return await loginResponse.json();
}

const reissue = async () => {
    console.log('reissue');
}

export default {
    checkToken,
    login,
    reissue,
}