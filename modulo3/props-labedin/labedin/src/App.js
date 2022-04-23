import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="imagens/perfil.jpeg" 
          nome="Filipe Vidal" 
          descricao="Oi, eu sou o Filipe. Sou aluno da Labenu. Gosto de HTML, CSS, JavaScript."
        />
        
        <ImagemButton 
          imagem="imagens/mais.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="imagens/email.png"
          descricao="Email: vidaltexst@gmail.com"
        />

        <CardPequeno
          imagem="imagens/endereco.png"
          descricao="Endereço: Av.Brasil, 35- Amazonas, Itabira MG"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="imagens/Logo_Labenu.png" 
          nome="Labenu" 
          descricao="Estudande do curso 'WebFullStcak'" 
        />
        
        <CardGrande 
          imagem="imagens/logo-vale.png" 
          nome="Vale" 
          descricao="Soldador" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
