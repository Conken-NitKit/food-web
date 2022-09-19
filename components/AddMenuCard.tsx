export const AddMenuCard = (): JSX.Element => {
    return (
        <div className="border border-primary-regular border-dashed rounded-[19px] 2xl:rounded-[23px] w-[237px] 2xl:w-[284px] h-[247px] 2xl:h-[297px]">
            <div className="flex mt-[38.3%] mx-auto border-[3px] border-primary-regular rounded-full w-[26px] 2xl:w-[32px] h-[26px] 2xl:h-[32px]">
                <div className="m-auto w-[60%] h-[15%] bg-thirdly-regular before:block before:rotate-90 before:w-[100%] before:h-[100%] before:content-[''] before:bg-thirdly-regular" />
            </div>
            <p className="mx-auto mt-[6.3%] text-[16px] 2xl:text-[19px] text-secondary-regular text-center">
                メニューを追加
            </p>
        </div>
    );
};
