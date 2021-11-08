import { Header } from '../components/organisation/Header';
import { PageTitle } from '../components/molcules/PageTitle';

export const Skills = () => {
  return (
    <div>
      <Header />
      <main className='w-4/5 mx-auto mt-28'>
        <PageTitle title='SKILLS' subTitle='スキル' />
      </main>
    </div>
  );
};

export default Skills;
