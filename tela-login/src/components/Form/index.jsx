import './style.css'

export default function Form() {
    return (
        <div className='container'>
            <form>
                <h1>Login</h1>
                <input placeholder="Usuário" type="text" />
                <input placeholder="Senha" type="text" />
                <button>Enviar</button>
            </form>
        </div>
    );
}