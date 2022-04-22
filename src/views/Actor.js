export default function Actor(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="ceb-item-style-2">
          <img src={props.imagen} alt="" />
          <div className="ceb-infor">
            <h2>
              <a href="celebritysingle.html">{props.nombre}</a>
            </h2>
            <span>{props.nacionalidad}</span>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
