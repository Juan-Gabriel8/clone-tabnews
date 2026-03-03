import Trash from "../assets/Trash.svg";

function Home() {
  const users = [
    {
      id: "123423",
      name: "Juan Gabriel",
      age: 23,
      email: "juan.teste@email.com",
    },
    {
      id: "98745398",
      name: "Camila Cardoso",
      age: 22,
      email: "camila.teste@email.com",
    },
    {
      id: "98745398asd",
      name: "Kalleb Cardoso",
      age: 2,
      email: "kalleb.teste@email.com",
    },
  ];

  return (
    <div>
      <title>Tab news</title>
      <form>
        <h1>Pagina inicial do tab news!</h1>
        <input name="Nome" placeholder="Nome" type="text" />
        <input name="Idade" placeholder="Idade" type="number" />
        <input name="Email" placeholder="Email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} alt="Lixeira" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
