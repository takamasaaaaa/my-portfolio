import { Header } from '../components/organisation/Header';
import { PageTitle } from '../components/molcules/PageTitle';

export const Contact = () => {
  return (
    <div>
      <Header />
      <main className='w-4/5 mx-auto mt-28'>
        <PageTitle title='CONTACT' subTitle='問い合わせ' />
      </main>
    </div>
  );
};

export default Contact;
