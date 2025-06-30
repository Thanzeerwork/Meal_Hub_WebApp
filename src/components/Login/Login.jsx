import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText';

const Login = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showRegister, setRegister] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showRegisterModel,setshowRegisterModel] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const username = showRegister ? form.username.value : "";

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (showRegister) {
      const existing = users.find(user => user.email === email);
      if (existing) {
        alert("User already exists with this email!");
        return;
      }
      users.push({ email, password, username });
      localStorage.setItem("users", JSON.stringify(users));
      // alert("Registration successful!");
      setshowRegisterModel(true);
      setRegister(false);
    } else {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        setShowSuccessModal(true);
        return;
        // You can add a redirect or session flag here
      } else {
        alert("Invalid email or password.");
      }
    }

    form.reset();
  };


  return (
    <div className="w-full min-h-min bg-black flex relative">
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            <p className="mt-4 text-white text-lg">Loading...</p>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <dialog open className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="modal-box bg-black text-white p-6 rounded-md shadow-xl">
            <h3 className="font-bold text-lg">Login Successful!</h3>
            <p className="py-4">Welcome,🎉</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowSuccessModal(false)}>Close</button>
            </div>
          </div>
        </dialog>
      )}
      {showRegisterModel && (
        <dialog open className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="modal-box bg-black text-white p-6 rounded-md shadow-xl">
            <h3 className="font-bold text-lg">Register Successful!</h3>
            <p className="py-4">Welcome,🎉</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setshowRegisterModel(false)}>Close</button>
            </div>
          </div>
        </dialog>
      )}


      {/* Left - Login Form */}
      <div
        className={`w-full md:w-1/2 p-10 pt-0 mt-0 flex flex-col justify-center text-white bg-black/80 z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* <SplitText
          text={showRegister?'Register':'Login'}
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
        /> */}
        <h1 className='text-4xl font-semibold text-center'>{showRegister ? 'Register' : 'Login'}</h1>
        <p className="text-lg mt-4 text-white text-center">
          Enter your email and password to log in. Enjoy your food!
        </p>
        <form className="space-y-3 h-full w-full" onSubmit={handleSubmit}>
          {showRegister
            ? <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                name='username'
                className="input  w-full px-4 py-2 bg-transparent border border-white rounded"
                type="text"
                required
                placeholder="John Doe"
              />
              <div className="validator-hint text-sm text-white/70">
                Enter valid email address
              </div>
            </div> : ''}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name='email'
              className="input validator w-full px-4 py-2 bg-transparent border border-white rounded"
              type="email"
              required
              placeholder="mail@site.com"
            />
            <div className="validator-hint text-sm text-white/70">
              Enter valid email address
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              name='password'
              type="password"
              className="input validator w-full px-4 py-2 bg-transparent border border-white rounded"
              required
              placeholder="Password"
              minLength="6"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <p className="validator-hint text-sm text-white/70">
              Must be more than 8 characters, including:
              <br />• At least one number
              <br />• At least one lowercase letter
              <br />• At least one uppercase letter
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            {showRegister ? 'Register' : 'Login'}
          </button>
          <h6 className="text-center text-white">
            {showRegister ? 'Already have an account? ' : "Don't have an account? "}

            <span className="underline decoration-sky-500 text-blue-500 cursor-pointer" onClick={() => {
              setRegister(prev => prev === false ? true : false)
              console.log("register button clicked")
            }}>
              {showRegister ? 'Login' : 'Register'}
            </span>
          </h6>
          <h6 className="text-center text-white">OR</h6>
          <button className="btn bg-[#1A77F2] text-white w-full flex items-center gap-2 justify-center py-2 rounded-md">
            <svg aria-label="Facebook logo" width="16" height="16" viewBox="0 0 32 32" fill="white">
              <path d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z" />
            </svg>
            Login with Facebook
          </button>
          <button className="btn bg-white text-black w-full flex items-center gap-2 justify-center py-2 rounded-md">
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

      {/* Right - Spline Scene */}
      <div className="hidden md:block w-full md:w-1/2 h-screen">
        <Spline
          scene="https://prod.spline.design/5prJ3AeVHleKcU55/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export default Login;
