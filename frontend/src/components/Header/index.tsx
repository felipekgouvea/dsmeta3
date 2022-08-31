import logomarca from '../../assets/img/logo.svg';

import "../Header/style.css";


const Header = () => {
  return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={logomarca} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
            </p>
        </div>
    </header>
  )

}

export default Header;