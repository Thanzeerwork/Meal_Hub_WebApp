import React from 'react'
 import './Header.css'
import headerimage from '../../assets/frontend_assets/header_img.png'


const Header = () => {
  return (
//     <div
//   className="hero  bg-transparent header"
// >
//   <div className="hero-overlay bg-transparent "></div>
//   <div className="hero-content text-neutral-content text-start w-full">
//     <div className="">
//       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//       <p className="mb-5">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis quasi, iste aut recusandae molestiae a magnam eligendi in eaque sint nihil ipsum doloremque dolorum cumque consequatur quibusdam! Cupiditate dolores quos sint aperiam aut distinctio reprehenderit totam tenetur illo exercitationem, sit, illum porro nam corporis hic pariatur dolorum officiis quisquam?
//       </p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>
<div className="hero bg-transparent ">
  <div className="hero-content flex-col lg:flex-row-reverse hero-content-padding">
    <img
      src={headerimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Galaxy Meals</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi Lorem ipsum dolor sit, amet consectetur adipisicing elit. A adipisci unde quia doloribus eius ducimus. Dolores corporis accusantium molestiae molestias eaque fugiat voluptatibus, nulla at, pariatur enim optio architecto ex! Sint incidunt vitae fugiat. Officia dolorum maiores fugit veniam ad..
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

  )
}

export default Header