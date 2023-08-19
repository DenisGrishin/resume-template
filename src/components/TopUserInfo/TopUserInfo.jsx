import { AiTwotonePhone } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';

const TopUserInfo = (props) => {
  return (
    <div className="flex mb-5 mobile:justify-between gap-2">
      <div className="flex-[0_1_60%] mobile:flex-[0_1_80%]">
        <h1 className="text-4xl text-[darkBlue] mobile:text-3xl">
          {props.userInfo.USER_NAME}
        </h1>
        <h3 className="text-xl text-[orange]">{props.userInfo.JOB_TITLE}</h3>
        <div className="flex-wrap flex   text-[12px] font-bold text-[gray] gap-y-[5px] mobile:flex-col">
          <div className="flex items-center flex-[0_1_50%] text-{1} gap-x-[5px]">
            <AiTwotonePhone className="text-[orange] text-lg" />
            {props.userInfo.NUMBER_PHONE}
          </div>
          <div className="flex items-strat flex-[0_1_50%] gap-x-[5px]">
            <FaLocationDot className="text-[orange] text-lg" />
            {props.userInfo.LOCATION}
          </div>
          <div className="flex items-center flex-[0_1_50%] gap-x-[5px]">
            <MdAlternateEmail className="text-[orange] text-lg" />
            <a href={`mailto:${props.userInfo.MAIL}`}>{props.userInfo.MAIL}</a>
          </div>
        </div>
      </div>
      <div className="flex-[0_1_40%] flex justify-end mobile:flex-[0_1_20%]">
        <div
          style={{
            background: ` url(${props.userInfo.AVATAR})`,
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'top',
          }}
          className={`w-[100px] self-end  h-[100px] rounded-full  smallMobile:w-[80px] smallMobile:h-[80px] `}
        ></div>
      </div>
    </div>
  );
};
export default TopUserInfo;
