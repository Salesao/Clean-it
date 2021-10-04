import { useDispatch } from "react-redux";
import { Element } from "react-scroll";
import { changePageCarusel } from "../../../../../redux/carusel/carusel";
import ContainerNavigation from "./ContainerNavigation";
import { navCarusel } from './navCarusel';

export default function NavigationCarusel({ page }) {
  const dispatch = useDispatch();

  return (
    <ContainerNavigation>
      <Element name="services" />
      <div className="container">
        <ul className="py-5 d-flex justify-content-between">
          {navCarusel.map(nav => {
            return <li key={nav.idNav}
            className={`${page === nav.idNav?'active':''}`}
            onClick={() => dispatch(changePageCarusel({page: nav.idNav}))}>
              {nav.title}
            </li>
          })}
        </ul>
      </div>
      <div></div>
    </ContainerNavigation>
  );
}

