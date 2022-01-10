import React, { useRef } from "react";
import Menupart from "../../component/menupart";
import Ideaspart from "../../component/ideaspart";
import Phonepart from "../../component/phonepart";
import Controlpart from "../../component/controlpart";
import Projectspart from "../../component/myprojectspart";
import Devtech from "../../component/devtechgnologypart";
import Contact from "../../component/contactpart";
const Homepage = () => {
  const myPortfolio = useRef<HTMLDivElement>(null);
  const myService = useRef<HTMLDivElement>(null);
  const myAwards = useRef<HTMLDivElement>(null);
  const myProjecty = useRef<HTMLDivElement>(null);
  const myContacty = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Menupart
        {...{ myPortfolio, myService, myAwards, myProjecty, myContacty }}
      />
      <Ideaspart
        {...{ myPortfolio, myService, myAwards, myProjecty, myContacty }}
      />
      <Phonepart
        {...{ myPortfolio, myService, myAwards, myProjecty, myContacty }}
      />
      <Controlpart
        {...{ myPortfolio, myService, myAwards, myProjecty, myContacty }}
      />
      <Projectspart
        {...{ myPortfolio, myService, myAwards, myProjecty, myContacty }}
      />
      <Devtech />
      <Contact
        {...{ myPortfolio, myService, myAwards, myProjecty, myContacty }}
      />
    </div>
  );
};
export default Homepage;
