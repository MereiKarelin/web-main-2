'use client';
import Link from 'next/link';

import { _FeedLayout } from '@/_pages/Feeds/_FeedLayout';
import { GetTrendingPosts } from '@/features/Post/GetTrendingPosts/GetTrendingPosts';
import FlameIcon from '@/shared/assets/icons/FlameIcon';
import YandexAdsBar from '@/widgets/YandexAdsBar/YandexAdsBar';
import { IObject } from '@daybrush/utils';

type PropTypes = {
  header: IObject<string>;
};

const TrendingPage = ({ header }: PropTypes) => {
  const LeftSidebar = () => {
    return (
      <div className="w-[300px] max-[1154px]:hidden sticky top-[80px] h-[600px] rounded-3xl">
        <YandexAdsBar yandexId={'yandex_rtb_R-A-6580598-2'} blockId={'R-A-6580598-2'} />
      </div>
    );
  };

  const MainContent = () => {
    return (
      <div>
        <div className="flex gap-3 p-2 bg-white rounded items-center font-semibold w-[514px] max-[514px]:w-full self-center cursor-pointer justify-between">
          <div className="flex gap-3 items-center">
            <div className="flex gap-3">
              <FlameIcon className="w-6 h-6" strokeWidth="2" />
              <span>Популярная лента</span>
            </div>
          </div>
          <Link href={'/feed'} className="text-sm text-gray-500 hover:bg-gray-100 p-2 rounded-full">
            Моя лента
          </Link>
        </div>
        <GetTrendingPosts />
      </div>
    );
  };

  const RightSidebar = () => {
    return (
      <div className="w-[300px] max-[1154px]:hidden sticky top-[80px] h-[600px] rounded-3xl">
        <YandexAdsBar yandexId={'yandex_rtb_R-A-6580598-1'} blockId={'R-A-6580598-1'} />
      </div>
    );
  };

  return (
    <_FeedLayout
      leftBar={<LeftSidebar />}
      mainContent={<MainContent />}
      rightBar={<RightSidebar />}
      header={header}
    />
  );
};

export default TrendingPage;
