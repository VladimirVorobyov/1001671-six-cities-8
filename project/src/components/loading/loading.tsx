import './loading.css';

export default function Loading (): JSX.Element{
  return (
    <div id="page-preloader" style={{background: 'red'}}>
      <span className="spinner"></span>
    </div>
  );}
