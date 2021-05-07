import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

//hook custom - solo se pueden hacer cuando estas trabajando con funcion componente, no funciona con clases.
function useSearchBadges(badges){
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setfilteredBadges] = React.useState(badges)

  React.useMemo(()=> {
    const result = badges.filter(badge =>
      {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
      });
      setfilteredBadges(result)
  },[badges, query]);

  return {query, setQuery,filteredBadges};
}

function BadgesList(props) {
  const badges = props.badges;

  const {query, setQuery, filteredBadges} = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="form-group">
        <label>Filtro de badges</label>
        <input type="text" className="form-control"
        value={query} onChange={(e) => {setQuery(e.target.value)}}
        />
      </div>
      <div>
        <h3>No se encuentran datos</h3>
        {/* <Link className="btn btn-primary" to='/badges/new'>Crear</Link> */}
      </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filtro de badges</label>
        <input type="text" className="form-control"
        value={query} onChange={(e) => {setQuery(e.target.value)}}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="badgeList">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <div className="badgeList__item">
                  <div className="badgeList__item--izquierda">
                    {/* <img
                      className="badgeList__avatar"
                      src={badge.avatarUrl}
                      // src={badge.image}
                      alt="avatar"
                    /> */}
                    <Gravatar
                      className="badgeList__avatar"
                      email={badge.email}
                      alt="Avatar"
                    />
                  </div>
                  <div className="badgeList__item--derecha">
                    <div className="badgeList__titulos">
                      {badge.firstName} {badge.lastName} {/* {badge.name} */}
                    </div>
                    <div className="badgeList__subtitulos">
                      ID:{" "}
                      <span className="badgeList__subtitulos--textos">
                        {badge.id}
                      </span>
                    </div>
                    <div className="badgeList__subtitulos">
                      Email:{" "}
                      <span className="badgeList__subtitulos--textos">
                        {/* {badge.species} */}
                        {badge.email}
                      </span>
                    </div>
                    <div className="badgeList__subtitulos">
                      Trabajo:{" "}
                      <span className="badgeList__subtitulos--textos">
                        {/* {badge.type} */}
                        {badge.jobTitle}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );

}

export default BadgesList;
