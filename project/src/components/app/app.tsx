import Main from '../main/main';

type AppScreenProps = {
  counter: number;
}

function App({counter}:AppScreenProps): JSX.Element {
  return(
    <Main counter={counter}/>
  );
}

export default App;
