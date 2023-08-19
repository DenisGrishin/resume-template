import { ImLocation } from 'react-icons/im';
const ItemExperience = (props) => {
  return (
    <div key={props.indx}>
      <div className="text-[darkBlue] font-medium">{props.item.title}</div>
      <div className="text-[hsl(39,100%,50%)] font-medium">
        {props.item.nameOrganizaion}
      </div>
      <div className="flex items-center gap-x-[5px] smallMobile:text-sm">
        <ImLocation />
        <a className="text-[grey] " href={props.item.link}>
          {props.item.link}
        </a>
      </div>
    </div>
  );
};
export default ItemExperience;
