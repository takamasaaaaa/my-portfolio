import { PageTitle } from '../components/molcules/PageTitle';
import { SectionTitle } from '../components/molcules/SectionTitle';
import { Header } from '../components/organisation/Header';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';

export const Profile = () => {
  return (
    <div>
      <Header />
      <main className='w-4/5 mx-auto mt-28'>
        <PageTitle title='PROFILE' subTitle='プロフィール' />
        <div className='flex items-center justify-center mb-32'>
          <div className='flex items-center justify-center w-2/5'>
            <div className='w-80 h-80 transition-all duration-700 bg-profile-img hover:bg-profile-img-hover bg-cover bg-center rounded-full'></div>
          </div>
          <div className='w-3/5 pl-8'>
            <h2 className='text-xl font-bold'>TAKAMASA KAWANO / 川野 孝誠</h2>
            <p className='pt-2 pb-8'>Web Developer</p>
            <p className='py-2'>生年月日：2001年7月6日</p>
            <p className='py-2'>出身&emsp;&emsp;：愛媛県新居浜市</p>
            <p className='py-2'>居住地&emsp;：埼玉県川越市</p>
            <p className='py-2'>所属&emsp;&emsp;：早稲田大学商学部在籍中</p>
            <p className='py-2'>研究対象：ビジネスモデル / 競争戦略</p>
            <div className='flex items-center justify-around w-2/6 my-4'>
              <div className='w-10 h-10 bg-gray-200 hover:bg-black rounded-full transition-all duration-200'>
                <Link href='https://www.instagram.com/_takamasaa_/' passHref>
                  <a className='flex items-center justify-center w-full h-full text-3xl hover:text-white'>
                    <AiOutlineInstagram />
                  </a>
                </Link>
              </div>
              <div className='w-10 h-10 bg-gray-200 hover:bg-black rounded-full transition-all duration-200'>
                <Link href='https://www.facebook.com/profile.php?id=100025269067004' passHref>
                  <a className='flex items-center justify-center w-full h-full text-3xl hover:text-white'>
                    <RiFacebookFill />
                  </a>
                </Link>
              </div>
              <div className='w-10 h-10 bg-gray-200 hover:bg-black rounded-full transition-all duration-200'>
                <Link href='https://twitter.com/seagull_0706' passHref>
                  <a className='flex items-center justify-center w-full h-full text-3xl hover:text-white'>
                    <AiOutlineTwitter />
                  </a>
                </Link>
              </div>
              <div className='w-10 h-10 bg-gray-200 hover:bg-black rounded-full transition-all duration-200'>
                <Link href='https://github.com/takamasaaaaa' passHref>
                  <a className='flex items-center justify-center w-full h-full text-3xl hover:text-white'>
                    <AiFillGithub />
                  </a>
                </Link>
              </div>
              {/* <div className='w-10 h-10 bg-green-700 rounded-full'></div> */}
            </div>
          </div>
        </div>
        <SectionTitle title='WHAT I LOVE' />
      </main>
    </div>
  );
};

export default Profile;
