import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';


function TeacherForm() {
  const scheduleItems = [
    { week_day: 0, from: '8:00 AM', to: '4:00 PM'},
    { week_day: 2, from: '10:00 AM', to: '6:00 PM'},
  ]
  function addNewScheduleItem(){
    console.log('teste')
  }
  return (
    <div id="page-teacher-form" className= "container">
      <PageHeader title="Que incrivel que você quer dar aulas."
      description="O primeiro passo é preencer esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="Whatsapp"/>
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
          name="subject" 
          label="Matéria"
          options={[
            {value:'Artes', label:'Artes'},
            {value:'Biologia', label:'Biologia'},
            {value:'Ciências', label:'Ciências'},
            {value:'Educação física', label:'Educação física'},
            {value:'Física', label:'Física'},
            {value:'Geografia', label:'Geografia'},
            {value:'Matemática', label:'Matemática'},
            {value:'Português', label:'Português'},
            {value:'Química', label:'Química'},
          ]}
          />
          
          
          <Input name="cost" label="Custo da sua hora por aula"/>
        </fieldset>

        <fieldset>
          <legend>Horários disponiveis
          <button type="button" onClick={addNewScheduleItem} >
            + Novo Horário
          </button>
          </legend>
          
          {scheduleItems.map(scheduleItem => {
            return(
              <div className="schedule-item">
                <Select 
                  name="week_day" 
                  label="Dia da semana"
                  options={[
                    {value:'0', label:'Domingo'},
                    {value:'1', label:'Segunda-feira'},
                    {value:'2', label:'Terça-feira'},
                    {value:'3', label:'Quarta-feira'},
                    {value:'4', label:'Quinta-feira'},
                    {value:'5', label:'Sexta-feira'},
                    {value:'6', label:'Sábado'},           
                  ]}
                />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
            );          
          })}
      </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
   </div>
  )
}

export default TeacherForm;