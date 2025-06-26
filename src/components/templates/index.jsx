// src/components/TemplatesSection/TemplatesSection.jsx
import "../index.scss";
import { templates } from "../../context/data";

export const TemplatesSection = ({ active, setActive }) => {
  return (
    <section id="templates" className={"temp-wrapper"}>
      <h2>Choose a Template</h2>
      <div className={"w100 df fw aic jcc gap-20"}>
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className={`card ${tpl.className} ${active === tpl.id ? "active" : ""}`}
            style={{ backgroundImage: `url(${tpl.bg})` }}
            onClick={() => setActive(tpl.id)}
          >
            <h3>UNEMPLOYMENT CLUB</h3>
            <img className="avatar" src={tpl.avatar} alt={tpl.name} />
            <div className="info">
              <div className="group">
                <div className="label">Name</div>
                <div className="name">{tpl.name}</div>
              </div>
              <div className="group">
                <div className="label">Previous Job</div>
                <div className="job">{tpl.previousJob}</div>
              </div>
              <div className="group">
                <div className="label">Unemployment Period</div>
                <div className="duration">{tpl.unemploymentPeriod}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
