import style from "./Style";
import ScrollTrigger from "react-scroll-trigger";
import { aboutPageData } from "../../../seed";
import { Children } from "react";
import { Image, Placeholder } from "cloudinary-react";

export default function OurTeamAndClient({ t }) {
  const positionFixTrigger = () => {
    let client = document.querySelector("#client-team");
    client.style.position = "sticky";
    client.style.top = "150px";
    console.log("this works");
  };

  const triggerTeamEnter = () => {
    let teamIndex = document.querySelector("#team-index");
    teamIndex.classList.add("active1");
    console.log("teams");
  };
  // const triggerTeamClose = () => {
  //   let teamIndex = document.querySelector("#team-index");
  //   teamIndex.classList.remove("active1");
  // };
  const triggerClientEnter = () => {
    let teamIndex = document.querySelector("#team-index");
    teamIndex.classList.remove("active1");
    let clientIndex = document.querySelector("#client-index");
    clientIndex.classList.add("active1");
  };
  const triggerClientClose = () => {
    let clientIndex = document.querySelector("#client-index");
    clientIndex.classList.remove("active1");
    let teamIndex = document.querySelector("#team-index");

    if (teamIndex.classList.contains("active1")) {
      return;
    } else teamIndex.classList.add("active1");
  };
  return (
    <style.Div_ourTeam_container>
      <ScrollTrigger throttleScroll={1000} onEnter={positionFixTrigger} onExit={positionFixTrigger}>
        <style.Div_sticky>
          <style.Ul_list id="client-team">
            <p>{t("teamAndClient.title")}</p>
            <li id="team-index">
              <span className="code">A / 001</span>
              <span className="title">{t("teamAndClient.team")}</span>
            </li>
            <li id="client-index">
              <span className="code">A / 002</span>
              <span className="title">{t("teamAndClient.clients")}</span>
            </li>
          </style.Ul_list>
          <style.Div_content_wrapper>
            <ScrollTrigger throttleScroll={1000} onEnter={triggerTeamEnter}>
              <style.Div_team_wrapper>
                <ul>
                  {Children.toArray(
                    aboutPageData.ourTeam.map((member) => (
                      <li>
                        <style.Div_member>
                          <Image publicId={member.img} cloud_name="nexprover" width="auto" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
                            <Placeholder type="blur"></Placeholder>
                          </Image>
                          <div className="title-wrapper">
                            <p>{member.title}</p>
                            <span>{member.post}</span>
                          </div>
                        </style.Div_member>
                      </li>
                    ))
                  )}
                </ul>
              </style.Div_team_wrapper>
            </ScrollTrigger>
            <ScrollTrigger throttleScroll={1000} onEnter={triggerClientEnter} onExit={triggerClientClose}>
              <style.Div_client_wrapper>
                <h2>{t("teamAndClient.clientsTitle")}</h2>
                <ul>
                  {Children.toArray(
                    aboutPageData.ourClient.map((client) => (
                      <li>
                        <Image publicId={client.img} cloud_name="nexprover" width="auto" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
                          <Placeholder type="blur"></Placeholder>
                        </Image>
                      </li>
                    ))
                  )}
                </ul>
              </style.Div_client_wrapper>
            </ScrollTrigger>
          </style.Div_content_wrapper>
        </style.Div_sticky>
      </ScrollTrigger>
    </style.Div_ourTeam_container>
  );
}
