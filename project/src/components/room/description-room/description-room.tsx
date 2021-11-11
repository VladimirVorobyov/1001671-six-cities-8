type DescriptionProps = {
  title : string;
}

function DescriptionRoom ({title}:DescriptionProps): JSX.Element{
  return(
    <p className="property__text">
      {title}
    </p>
  );
}

export default DescriptionRoom;
