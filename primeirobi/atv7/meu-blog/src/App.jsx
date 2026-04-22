import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Article from './Article.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import './style.css';
function App() {
  const postData = {
    titulo: "DominATE Experience Stray Kids!",
    data: "06 de abril de 2025",
    autor: "Sara",
    conteudo: [
      "Esse dia oficialmente entrou para a história como o dia em que meus tímpanos quase explodiram (da melhor forma possível). Ir num show do Stray Kids é tipo levar um soco de energia logo na primeira música; o grave do som bate no peito e você esquece até como respira.",
      "A melhor parte, sem dúvida, foi o caos caótico (e maravilhoso) das interações. Ver os meninos tentando falar português faz a gente se sentir parte de uma família gigante."
    ],
    imagem: "https://tse3.mm.bing.net/th/id/OIP.6gDCfjm3d-bS15c5gSoH0gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  };

  const relacionados = [
    { id: 1, titulo: "Tudo que eu comi na Liberdade!" },
    { id: 2, titulo: "Conhecendo a loja de conveniência 'CU'." },
    { id: 3, titulo: "Quanto gastei na minha viagem para São Paulo!?" }
  ];

  return (
    <div className="App">
      <Header />
      <Navigation />
      <main style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Article {...postData} />
        <Sidebar posts={relacionados} />
      </main>
      <Footer copyright="2025 - Meu Blog de Viagens" />
    </div>
  );
}

export default App;