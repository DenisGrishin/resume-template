import TitleBlock from './../common/TitleBlock';
import ItemExperience from './ItemExperience/ItemExperience';
const Experience = (props) => {
  return (
    <div>
      <TitleBlock title="опыт" />
      <div>
        <ListExperience listWork={props.experience.listWork} />
      </div>
    </div>
  );
};
export default Experience;

const ListExperience = (props) => {
  return props.listWork.map((i, indx) => {
    return <ItemExperience item={i} indx={indx} />;
  });
};
