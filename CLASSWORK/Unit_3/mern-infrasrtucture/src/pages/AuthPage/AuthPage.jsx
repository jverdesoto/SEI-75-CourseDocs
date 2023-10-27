
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
   
    return (
       <main>
         <h1>Auth Page, welcome</h1>
         <SignUpForm setUser={ setUser }/>
        <LoginForm/>
        </main>
    )
}