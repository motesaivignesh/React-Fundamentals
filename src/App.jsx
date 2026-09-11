import Student from './Student.jsx'
function App() {
  return( 
    <>
    <Student name="Vignesh" age={20} isStudent={true}/>
    <Student name="Bubby" age={19} isStudent={true}/>
    <Student name="puppy" age={24} isStudent={false}/>
    </>
  );
}
export default App
