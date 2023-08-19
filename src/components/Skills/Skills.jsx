import TitleBlock from './../common/TitleBlock';

const Skills = (props) => {
  return (
    <div>
      <TitleBlock title="ТЕХНИЧЕСКИЕ НАВЫКИ" />
      <div className="flex flex-wrap gap-3">
        {props.skills.map((s, i) => {
          return (
            <div key={i} className="p-1  border-2 border-[#a9a9a9]">
              {s.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
