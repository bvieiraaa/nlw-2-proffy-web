import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import'./styles.css'

function TeacherItem(){
return(
  <article className="teacher-item">
        <header>
          <img src="https://pbs.twimg.com/profile_images/1275473344348000262/_AVrvsFS_400x400.jpg" alt="Bruno Vieira"/>
          <div>
            <strong>Bruno Vieira</strong>
            <span>Aim Lab</span>
          </div>
        </header>
        <p>
          Entusiasta das melhores tecnologias de mirinha neném.
          <br /><br />
          Apaixonado por FPS e por mudar a vida das pessoas através da mirinha chiclete. Mais de 5 anos de experiência.
        </p>
        <footer>
          <p>
            Preço/hora
            <strong> R$100,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em Contato
          </button>
        </footer>
      </article>
)
}

export default TeacherItem;