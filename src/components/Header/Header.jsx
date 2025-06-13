
import './Header.css'
import headerimage from '../../assets/frontend_assets/header_img.png'
import StarBorder from '../../blocks/Animations/StarBorder/StarBorder'


const Header = () => {
  return (

    <div className="hero bg-transparent " id=''>
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
          <StarBorder
                    as="button"
                    className="custom-class text-4xl  "
                    color="white"
                    speed="3s"
                    
                >
                    Get Started
                </StarBorder>
          
        </div>
      </div>
    </div>

  )
}

export default Header