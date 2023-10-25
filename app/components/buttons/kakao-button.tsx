'use client'
export default function KakaoButton() {
    return (
        <form method="post" action="/api/auth/kakao">
            <button type="submit" className='flex items-center justify-center h-12 bg-kakao rounded-full shadow-md gap-1 py-4 px-5 w-80 cursor-pointer'>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9434 2C5.97236 2 1.94336 5.185 1.94336 9.115C2.01214 10.4238 2.44951 11.6866 3.20502 12.7576C3.96054 13.8286 5.00341 14.6642 6.21336 15.168C6.02536 15.868 5.53136 17.714 5.43236 18.109C5.31036 18.599 5.61236 18.592 5.80936 18.46C5.96436 18.36 8.27536 16.786 9.27336 16.107C9.82659 16.1889 10.3851 16.23 10.9444 16.23C15.9154 16.23 19.9444 13.044 19.9444 9.115C19.9444 5.186 15.9154 2 10.9444 2" fill="#391B1B"/>
                </svg>
                <span className='font-semibold'>카카오로 시작하기</span>
            </button>
        </form>
    );
}
