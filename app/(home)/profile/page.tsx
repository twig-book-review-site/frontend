import React from 'react';
import Button from '@/app/components/elements/button';
import Subheader from '@/app/components/elements/subheader';

const Profile = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-end justify-between px-4 z-10 h-12'>
        <h1 className='font-batang text-xl'>내 프로필</h1>
      </div>

      <section className='px-10 py-8'>
        <div className=''>
          <div className='h-[112px] w-[112px] rounded-full bg-primary-200 flex justify-center items-center'>
            프로필 사진
          </div>
        </div>
        <section className='mt-8'>
          <h2 className='py-2 font-gothic text-xl'> 닉네임 </h2>
          <p className='py-4 ont-gothic max-w-[1030px] text-gray-600'>
            누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이
            스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다. 대법관은
            대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 국회는 정부의 동의없이 정부가 제출한
            지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 모든 국민은 법률이 정하는 바에 의하여
            공무담임권을 가진다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 대법원은
            법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과 사무처리에 관한 규칙을
            제정할 수 있다. 법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에
            제청하여 그 심판에 의하여 재판한다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타
            국가안위에 관한 중요정책을 국민투표에 붙일 수 있다. 저작자·발명가·과학기술자와 예술가의 권리는
            법률로써 보호한다. 국가는 평생교육을 진흥하여야 한다. 국교는 인정되지 아니하며, 종교와 정치는
            분리된다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적
            중립성은 준수된다. 환경권의 내용과 행사에 관하여는 법률로 정한다. 국회의원은 국회에서 직무상 행한
            발언과 표결에 관하여 국회외에서 책임을 지지 아니한다.
            <Button intent='primary' size='small'>
              수정
            </Button>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Profile;
