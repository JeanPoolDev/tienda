const Guitarra = ({ guitarras }) => {
  return ( 
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img 
          className="img-fluid" 
          src={`/img/${guitarras.image}.jpg`} 
          alt={guitarras.name} />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">
          {guitarras.name}
        </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
        <p className="fw-black text-primary fs-3">
          ${guitarras.price}
        </p>
        <button 
          type="button"
          className="btn btn-dark w-100">
            Agregar al Carrito
        </button>
      </div>
    </div>
   );
}
 
export default Guitarra;