import "./style.css";

function Location() {
  return (
    <section id="section-location" className="box-default">
      <h2 className="h2-default">Localização</h2>
      <h3>O evento sera realizado na:</h3>
      <div>
        <ul>
          <li className="p-default">Cidade: xxxxxxxxx</li>
          <li className="p-default">Rua: xxxxxxxxxxx</li>
          <li className="p-default">Bairro: xxxxxxxxxxxxxx</li>
          <li className="p-default">Referencia: xxxxxxxxx perto do xxxxxx</li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3744942934436!2d-40.27135422401789!3d-19.824101181540613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7ea80a57199cb%3A0xafaa88031571c172!2sOriundi%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1718229551905!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
