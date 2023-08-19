const TitleBlock = (props) => {
  return (
    <div className="border-b-4 border-[darkBlue] uppercase text-xl font-medium my-[10px] ">
      <h2 className="text-[darkBlue]">{props.title}:</h2>
    </div>
  );
};
export default TitleBlock;
