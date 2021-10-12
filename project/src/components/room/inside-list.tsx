type thingsProps = {
  things: string
}

function InsideList ({things}:thingsProps): JSX.Element{
  return(
    <li className="property__inside-item">
      {things}
    </li>
  );
}

export default InsideList;
