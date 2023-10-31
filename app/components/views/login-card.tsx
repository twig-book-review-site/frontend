import KakaoButton from "@/app/components/buttons/kakao-button";

export default function LoginCard() {
    return (
        <div className='flex flex-col items-center justify-center w-full max-w-md p-4 space-y-4 py-14 px-10 gap-y-10'>
            <div className='flex flex-col gap-4 items-center'>
                <span className='text-3xl font-bold'>시작하기</span>
                <span className='text-lg'>읽고, 발견하고, 연결해보기</span>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <KakaoButton />
            </div>
        </div>
    );
}