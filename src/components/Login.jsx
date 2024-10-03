import React from 'react';
import useAuth from '../hooks/useAuth'

const Login = () => {

  return (
    <section className="h-full w-full bg-primary text-center flex flex-col items-center justify-center text-text">
      <h3 className='text-3xl my-3 uppercase'>Lamha</h3>
      <button onClick={useAuth} className="px-4 py-2 my-3 mx-auto bg-secondary border-accent transition-colors delay-200 hover:bg-accent border-2 rounded-full ">
        Login with Spotify
      </button>
    </section>
  );
};

export default Login;
