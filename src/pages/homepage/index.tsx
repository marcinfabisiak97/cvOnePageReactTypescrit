import React, { useRef } from "react";
import Menupart from "../../component/menupart";
import Ideaspart from "../../component/ideaspart";
import Phonepart from "../../component/phonepart";
import Controlpart from "../../component/controlpart";
import Projectspart from "../../component/myprojectspart";
import Devtech from "../../component/devtechgnologypart";
import Exp from "../../component/experiencepart";
const Homepage = () => {
  const myPortfolio = useRef<HTMLDivElement>(null);
  const myService = useRef<HTMLDivElement>(null);
  const myPhone = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Menupart {...{ myPortfolio, myService, myPhone }} />
      <Ideaspart {...{ myPortfolio, myService, myPhone }} />
      <Phonepart {...{ myPortfolio, myService, myPhone }} />
      <Controlpart />
      <Projectspart />
      <Devtech />
      <Exp />
    </div>
  );
};
export default Homepage;
