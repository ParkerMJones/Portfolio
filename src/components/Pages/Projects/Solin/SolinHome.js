import cinco from "../../../../assets/images/Cinco.jpg";
import OldDashboardLibrary from "../../../../assets/images/OldDashboardLibrary.jpg";
import NewDashboardLibrary from "../../../../assets/images/NewDashboardLibrary.jpg";
import * as S from "../ProjectsStyles";
import { Link } from "react-router-dom";
import backArrow from "../../../../assets/chevronLeftDark.svg";

export default function FreesoundHome() {
  return (
    <>
      <BackArrow />
      <S.Container>
        <S.Header>Solin Fitness</S.Header>
        <S.SubHeader>The Home of Social Fitness</S.SubHeader>
        <S.FlexContainer style={{ padding: 0 }}>
          <S.Description>
            Site:{" "}
            <S.SiteLink href="https://www.solin.stream/" target="_blank">
              solin.stream
            </S.SiteLink>
          </S.Description>
        </S.FlexContainer>
        <S.Description>
          Fitness creators use Solin to create and sell online programs. Our
          software handles landing pages, payment collection, live
          streaming/video delivery, community feeds, and account management for
          creators.
        </S.Description>
        <img
          src={cinco}
          alt="Fitness Creator Cinco"
          style={{ width: "80%", borderRadius: 10 }}
        ></img>
        <S.SubHeader>My Contributions</S.SubHeader>
        <S.Description>
          {" "}
          As a front-end developer at Solin, I helped build core features of the
          platform. My main contributions dealt with the creator dashboard, an
          application built for creators to manage their content. The
          application is written with Typescript, and is built using React via
          NextJs, Node and Express for the API, and PostgreSQL for the database.
          First, I handled responsivity issues on the dashboard, making sure
          that creators could access their tools via a mobile device, which
          nearly 40% do. I became familiar with the Stripe API while adding
          error handling to purchases. I fixed bugs on the consumer side of the
          application, involving cases like form submission errors, UI bugs,
          user preferences, and cross-browser disagreements. I made changes to
          the API where needed, while following strict codebase standards and
          git workflows. I built features from scratch for the dashboard
          redesign, referring to detailed plans from Figma that accounted for
          all device types. Pulling from a shared set of components, styling
          with styled-components and the Chakra UI library, and re-using code
          wherever possible has resulted in a streamlined and consistent
          application that creators can enjoy using.
        </S.Description>
        <S.SubHeader>Before vs. After</S.SubHeader>
        <S.FlexContainer>
          <S.VerticalImage
            src={OldDashboardLibrary}
            alt="Dashboard Before"
          ></S.VerticalImage>
          <S.VerticalImage
            src={NewDashboardLibrary}
            alt="Dashboard After"
          ></S.VerticalImage>
        </S.FlexContainer>
        <S.SubHeader>Challenges</S.SubHeader>
        <S.Description>
          {" "}
          One of my assigned tasks involved handling the error states of credit
          card purchases at various points in the application. After reading the
          Stripe documentation and browsing the API, I added the Stripe logic to
          our error middleware, and wrote custom error messages depending on the
          point of purchase, with the reason for decline and methods of
          resolution for the user. Where previously only a generic error was
          provided, I was able to clarify for the user what went wrong. This
          assignment helped me better understand error handling, middleware,
          payments, and data fetching from both local and third-party APIs.
        </S.Description>
        <S.SubHeader>Reflection</S.SubHeader>
        <S.Description>
          My time at Solin has been valuable. Working on a live application with
          thousands of active users, in a supportive development team with years
          of experience, has quickly transformed me from bootcamp grad to
          professional developer. I owe many thanks to the team for their
          knowledge, time and support, and I hope to work with a team like this
          in the future.
        </S.Description>
      </S.Container>
    </>
  );
}

const BackArrow = () => {
  return (
    <div style={{ padding: "5% 0 0 5%", maxWidth: "fit-content" }}>
      <Link to="/projects">
        <img src={backArrow} alt="back arrow" />
      </Link>
    </div>
  );
};
