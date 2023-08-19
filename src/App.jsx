import './App.css';
import MyProject from './components/MyProject/MyProject';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Profile from './components/Profile/Porfile';
import TopUserInfo from './components/TopUserInfo/TopUserInfo';
import dataRuseme from './state/dataRuseme';

const App = () => {
  return (
    <div className="my-0 mx-auto max-w-[768px] px-8 py-3 smallMobile:px-2">
      <TopUserInfo userInfo={dataRuseme.userInfo} />
      <Profile profile={dataRuseme.profile} />
      <Experience experience={dataRuseme.experience} />
      <Skills skills={dataRuseme.skills} />
      <MyProject myProject={dataRuseme.myProject} />
    </div>
  );
};
export default App;
