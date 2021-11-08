import { Header } from '../components/organisation/Header';
import { PageTitle } from '../components/molcules/PageTitle';

export const Works = () => {
  return (
    <div>
      <Header />
      <main className='w-4/5 mx-auto mt-28'>
        <PageTitle title=' WORKS' subTitle='実績' />
      </main>
    </div>
  );
};

export default Works;
