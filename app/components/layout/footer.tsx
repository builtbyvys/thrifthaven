const Footer = () => {
  return (
    <footer className='z-10 py-10 text-stone-400'>
      <div className='container'>
        <p className='mt-4 text-sm text-stone-500'>
          &copy; {new Date().getFullYear()} Thrifthaven
        </p>
        <div className='text-sm text-stone-400'>
          Developed by{' '}
          <a
            className='text-sky-600'
            href='https://github.com/builtbyvys'
            rel='noreferrer'
            target='_blank'
          >
            builtbyvys
          </a>{' '}
          using{' '}
          <a
            className='text-sky-600'
            href='https://www.swell.is/'
            rel='noreferrer'
            target='_blank'
          >
            Swell
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
