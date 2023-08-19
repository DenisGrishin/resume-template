import TitleBlock from './../common/TitleBlock';

const Profile = (props) => {
  return (
    <div>
      <TitleBlock title="Профиль" />
      <div>
        <ListParagraph paragraph={props.profile.PARAGRAPH} />
      </div>
    </div>
  );
};
export default Profile;

const ListParagraph = (props) => {
  return props.paragraph.map((p, i) => (
    <p key={i} className=" mb-[5px] text-[14px]">
      {p.text}
    </p>
  ));
};
