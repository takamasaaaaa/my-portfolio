export const PageTitle = (props) => {
  const { title, subTitle } = props;

  return (
    <div className='py-14'>
      <hr className='w-24 border-solid border-black border-4' />
      <div className='flex items-baseline py-12'>
        <h1 className='w-1/4 text-6xl font-bold'>{title}</h1>
        <p className='pl-8 text-xl font-bold'>{subTitle}</p>
      </div>
    </div>
  );
};
