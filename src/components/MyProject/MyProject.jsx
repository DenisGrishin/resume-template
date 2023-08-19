import { PiLinkSimpleDuotone } from 'react-icons/pi';
import TitleBlock from './../common/TitleBlock';

const MyProject = (props) => {
  return (
    <>
      <TitleBlock title="Мои проекты" />
      <div>
        <ul>
          <ListProject myProject={props.myProject} />
        </ul>
      </div>
    </>
  );
};
export default MyProject;

const ListProject = (props) => {
  return props.myProject.map((p, i) => {
    return (
      <li
        key={i}
        className="[&:not(:last-child)]:border-b-[1px] mb-2 border-dashed border-[grey]] pb-2"
      >
        <h4 className="text-md text-[darkBlue]">{p.title}</h4>
        <a
          href={p.link}
          className="flex items-center gap-x-2 smallMobile:text-sm"
        >
          <PiLinkSimpleDuotone /> <span>{p.link}</span>
        </a>
      </li>
    );
  });
};
