import Spline from '@splinetool/react-spline';
import React from 'react';
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText';
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText';
import Particles from '../../blocks/Backgrounds/Particles/Particles';

const Login = () => {
  return (
    <div className="relative w-full  overflow-hidden">
      {/* Background Particles */}
      {/* <div className="absolute inset-0 z-0  bg-black">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}

      {/* Foreground Content */}
      <div className="relative z-10 w-full  flex flex-col md:flex-row items-center bg-black/50 pointer-events-none">

        {/* Left side - Login Form */}
        <div className=" p-10 w-full md:w-1/2  flex flex-col justify-center pointer-events-auto">
          
          <div>
            <SplitText
              text="Welcome To"
              className="text-4xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <p className="text-lg text-white">
              Enter your email and password to log in. Enjoy your food!
            </p>
          </div>
          <form className="space-y-4 mt-10">

            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                className="input validator w-full px-4 py-2 bg-transparent"
                type="email"
                required
                placeholder="mail@site.com"
              />
              <div className="validator-hint text-sm text-white/70">
                Enter valid email address
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Password</label>
              <input
                type="password"
                className="input validator w-full px-4 py-2 bg-transparent"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
              <p className="validator-hint text-sm text-white/70">
                Must be more than 8 characters, including
                <br />• At least one number
                <br />• At least one lowercase letter
                <br />• At least one uppercase letter
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
            <h6 className="text-center text-white">Don't have an account? <span className='underline decoration-sky-500' >Register</span></h6>
            <h6 className="text-center text-white">OR</h6>
            <button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-full flex items-center gap-2 justify-center py-2 rounded-md">
              <svg aria-label="Facebook logo" width="16" height="16" viewBox="0 0 32 32" fill="white">
                <path d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z" />
              </svg>
              Login with Facebook
            </button>
            <button className="btn bg-white text-black border-[#e5e5e5] w-full flex items-center gap-2 justify-center py-2 rounded-md">
              <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
                <g>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                </g>
              </svg>
              Login with Google
            </button>
          </form>
        </div>

        {/* Right Side - Spline Scene */}
        <div className="hidden md:block w-full md:w-1/2 h-160 pointer-events-none">
          <Spline scene="https://prod.spline.design/5prJ3AeVHleKcU55/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Login;
