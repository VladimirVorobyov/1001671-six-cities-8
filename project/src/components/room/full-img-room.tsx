type FullImgProps = {
  img : string;
}

function FullImgRoom ({img}:FullImgProps): JSX.Element{
  return(
    <div className="property__image-wrapper">
      <img className="property__image" src={img} alt="studio"/>
    </div>
  );
}

export default FullImgRoom;
