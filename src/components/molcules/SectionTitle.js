export const SectionTitle = (props) => {
  const { title } = props;

  return (
    <div className='text-center'>
      <h1 className='text-4xl'>{title}</h1>
      <hr className='w-24 mx-auto my-4 border-solid border-black border-4' />
    </div>
  );
};
