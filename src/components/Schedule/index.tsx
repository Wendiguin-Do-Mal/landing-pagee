import "./style.css";

function Schedule() {
  return (
    <section id="section-schedule" className="box-default">
      <h2 className="h2-schedule">AnimeConnect - Cronograma do Evento</h2>

      <div>
        <div className="div-schedule">
          <h3 className="h3-schedule">
            Dia 1:Preparativos e Competições Iniciais
          </h3>
          <ul>
            <li className="p-schedule">
              {" "}
              9:00 - 10:00: Registro e Check-in de Cosplayers
            </li>
            <li className="p-schedule">
              {" "}
              10:00 - 11:00: Cerimônia de Abertura e Apresentação dos Juízes
            </li>
            <li className="p-schedule">
              {" "}
              11:15 - 12:30: Concurso de Cosplay Individual: Preliminares
            </li>
            <li className="p-schedule">
              {" "}
              12:30 - 14:00: Intervalo para o Almoço
            </li>
            <li className="p-schedule">
              {" "}
              14:00 - 15:30: Workshop de Maquiagem e Efeitos Especiais
            </li>
            <li className="p-schedule">
              16:00 - 17:30: Concurso de Cosplay em Grupo: Apresentações
              Iniciais
            </li>
            <li className="p-schedule">
              18:00 - 20:00: Sessão de Fotos e Meet & Greet com Cosplayers
              Convidados
            </li>
          </ul>
        </div>
        <div className="div-schedule">
          <h3 className="h3-schedule">
            Dia 2:Competições Finais e Atividades Interativas
          </h3>

          <ul>
            <li className="p-schedule">
              {" "}
              9:00 - 10:00: Palestra: Técnicas Avançadas de Construção de
              Cosplays{" "}
            </li>
            <li className="p-schedule">
              {" "}
              10:00 - 11:00: Oficina de Atuação e Performance em Cosplay{" "}
            </li>
            <li className="p-schedule">
              {" "}
              11:15 - 12:30: Intervalo para o Almoço{" "}
            </li>
            <li className="p-schedule">
              {" "}
              12:30 - 14:00: Competição de Cosplay Individual: Finais{" "}
            </li>
            <li className="p-schedule">
              {" "}
              14:00 - 15:30: Competição de Cosplay em Grupo: Apresentações
              Finais{" "}
            </li>
            <li className="p-schedule">
              16:00 - 17:30: Cerimônia de Premiação
            </li>
            <li className="p-schedule">
              18:00 - 20:00: Cosplay After Party - Celebração e Networking
            </li>
          </ul>
        </div>

        <div className="div-schedule">
          <h3 className="h3-schedule">Observações: </h3>
          <ul>
            <li className="p-schedule">
              {" "}
              O cronograma pode sofrer ajustes durante o evento. Fique atento
              aos anúncios e atualizações.{" "}
            </li>
            <li className="p-schedule">
              {" "}
              As competições são abertas a todos os cosplayers registrados, e os
              participantes podem se inscrever com antecedência ou no local.{" "}
            </li>
            <li className="p-schedule">
              {" "}
              O evento oferece oportunidades para os cosplayers aprimorarem suas
              habilidades, interagirem com outros entusiastas e celebrarem sua
              paixão pela cultura pop e pelo cosplay.{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
