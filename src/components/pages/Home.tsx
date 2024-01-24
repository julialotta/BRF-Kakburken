import { GlobalStyle } from "../style/fonts";
import { StyledImg } from "../style/Images";
import fasadRitning from "../../assets/Fasadritning.png";
import fasadRitning2 from "../../assets/Fasadritning2.png";
import { StyledDLLink, StyledH4, StyledP } from "../style/TextElements";
import { BsDownload } from "react-icons/bs";
import { FlexDiv, StyledHr } from "../style/Wrappers";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledH4>Välkomna till BRF Kakburken</StyledH4>
      <FlexDiv
        width="100%"
        dir="column"
        tabletDir="row"
        tabletAlign="start"
        gap="20px">
        <FlexDiv width="80%" tabletWidth="50%">
          <FlexDiv dir="column" gap="30px">
            <StyledImg
              width="100%"
              tabletWidth="100%"
              laptopWidth="100%"
              src={fasadRitning}
              alt="Drefviken"
            />
            <StyledImg
              width="100%"
              tabletWidth="100%"
              laptopWidth="100%"
              displayTablet="block"
              display="none"
              src={fasadRitning2}
              alt="Drefviken"
            />
          </FlexDiv>
        </FlexDiv>
        <FlexDiv
          width="80%"
          tabletWidth="50%"
          dir="column"
          tabletAlign="start"
          align="center"
          justify="start"
          textAlign="start">
          <StyledH4>Nyheter</StyledH4>
          <StyledP fontSize="1.3rem">
            {/*  */}
            Dec, 2023
            <br />
            Hej! Nu står julen för dörren och vi i styrelsen för Brf Kakburken
            vill önska er alla en God Jul och ett Gott Nytt År!
            <br />
            <br />
            Det har på många sätt varit ett oroligt år och den ekonomiska
            utvecklingen är en utmaning för många. Som vi meddelade på
            föreningens höstmöte har vi tagit beslut att höja våra
            bostadavgifter. Efter noga beräkningar landar vi i en avgiftshöjning
            med 14%. <br />
            Vår förening har fortfarande en stark ekonomi och låg belåningsgrad,
            men då samtliga driftskostnader har ökat markant under de senaste
            åren medför det att våra avgifter långt ifrån matchar dessa
            kostnader. Det medför som ni säkert förstår att om vi inte höjer
            avgiften kommer vi snabbt att förbruka våra tillgångar.
            <br />
            Avgiftshöjningen kommer att tas i bruk från och med första januari
            2024 med ett retroaktivt pålägg för första kvartalet på avgiften som
            ska betalas inför april. Vi hoppas att ni alla förstår och stödjer
            vårt beslut. Har ni några frågor eller funderingar om vår ekonomi är
            det bara att kontakta oss i styrelsen.
            <br />
            <br />
            Så hoppas vi att ni alla får en lugn, och skön julhelg.
            <br />
            God Jul och Gott Nytt År hälsar styrelsen i Brf Kakburken
            <br />
            <br />
            <StyledHr />
            {/*  */}
            Sep 1, 2023
            <br />
            Vid bokning av tvättid via webbsidan:
            <br />
            Surfa till
            <a href="http://kakburken.ddns.net/">
              {" "}
              http://kakburken.ddns.net/{" "}
            </a>
            med valfri webbläsare. Första gången du loggar in använd följande
            uppgifter: <br />
            Användarnamn: Passerbrickans AVM-nummer (hittas på baksidan)  {" "}
            <br />
            Lösenord: Lägenhetsnummer <br />
            <br />
            Väl inne kan du ändra dina inloggningsuppgifter under
            “Inställningar” till e-postadress och eget lösenord. Skulle du
            glömma bort dina nya inloggningsuppgifter, kan du alltid använda dig
            av AVM-numret tillsammans med lägenhetsnummer. <br /> <br /> Exempel
            på hur du klurar ut ditt lägenhetsnummer:
            <br />
            1921 <br />
            De två första siffrorna är portnummer, i det här fallet 19 (om port
            9 är det 09) Den tredje siffran är våning, i det här fallet 2 Den
            sista siffran är lägenhetens ordning från vänster, i det här fallet
            1  
            <br />
            <br />
            <StyledDLLink
              href="https://brfkakburken.se/tvattstugan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="1rem">
              Bokningsregler & information om bokning via tavla
              <BsDownload />
            </StyledDLLink>
            <StyledHr />
            Aug 16, 2023
            <br />
            Hej! Hoppas ni alla har haft en fin sommar.
            <br />
            Vi vill passa på att tacka er som deltog på föreningens årsstämma.
            <br />
            <br />
            Styrelsen har förnyats med en ny ledamot, Jacob Thomas. Jacob kommer
            skolas in i styrelsearbetet och framför allt fokusera på arbetet som
            rör föreningens ekonomi, tillsammans med Robban Röder. Torbjörn
            Hedström har avslutat sitt arbete i styrelsen efter många års
            deltagande. Som ny ordförande har vi Josefine Öberg, tidigare
            sekreterare i styrelsen. Sekreterarrollen har övertagits av
            Julia-Lotta Tinglöf. Olivia Hansson Lindblom kommer ansvara för
            kommunikation och it-frågor. Daniel De Luca och David Bäckström
            Leima kommer framför allt att fokusera på våra fastigheter. <br />
            <br />
            Nu har det så här lagom till höststarten blivit dags för
            installation av det digitala bokningssystemet till tvättstugan. I
            våras hade vi en omröstning gällande om vi skulle byta till ett
            digitalt bokningssystem eller inte - 38 JA och 10 NEJ. Styrelsen har
            därefter tittat på flera olika system och enats om ett system från
            samma företag som vi har våra portlås ifrån. Det systemet uppfyller
            även på flera andra punkter de behov vår förening har.
            Installationen av bokningssystemet kommer ske 28-29/8. Tvättstugan
            kommer vara stängd under installationen. Efter den 29/8 bokas
            tiderna på den nya bokningstavlan eller via en webbsida. <br />
            Mer information om bokningssystemet och blippar för bokning vid
            tavlan kommer att distribueras i god tid innan installationen. Med
            det nya bokningssystemet kommer den som har bokat tiden ha hela
            tvättstugan till förfogande under den bokade tiden. Vi kommer börja
            med tretimmarsbokningar, fem stycken per dag. Detta kommer
            utvärderas efter några veckor. <br />
            <br />
            Vi planerar att ha ett höstmöte under oktober, datum är inte satt
            än. Det återkommer vi med så snart vi har det klart. <br />
            <br />
            Med vänliga hälsningar Styrelsen i Kakburken
          </StyledP>
          <StyledP fontSize="1.3rem">
            {/*  */}
            Nov, 2023
            <br />
            Information om höstmotet 8 nov 2023
            <br />
            Styrelsen bjöd in till höstmöte för att diskutera föreningens
            nuvarande och framtida ekonomi. Brf Kakburken har en bra ekonomi med
            låga lån och en kassa för underhåll och oförutsedda utgifter. Vad vi
            ser nu ar att vi, precis som resten av världen, påverkas av ökade
            kostnader framför allt för värme, vatten, och sophantering. I och
            med det har vi beslutat oss för att genomföra en avgiftshöjning från
            och med nästa år. Exakt vad den kommer att landa på är inte bestämt
            ännu, utan kommer fastställas i samband med att nästa års budget är
            lagd.
            <br />
            <br />
            Under mötet presenterade vi vår nuvarande ekonomi och planerade
            budget för nästa år. Det ses i den pdf som finns tillgänglig. Där
            ses hur våra utgifter de senaste åren och prognosticerat för 2024 är
            ökande och överstiger våra intäkter.
            <br />
            Styrelsen uppfattar att föreningens medlemmar är medvetna om de
            ökade kostnaderna och att vi trots avgiftshöjning kan hålla
            avgifterna konkurrenskraftiga i området. Styrelsen mottog även goda
            förslag på andra förbättringsområden som kan påverka ekonomin
            positivt. Vi tackar de medlemmar som kom på mötet.
            <br />
            <br />
            <StyledDLLink
              href="https://brfkakburken.se/brfkakburkenbudget2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="1rem">
              Budget och ekonomi 2024
              <BsDownload />
            </StyledDLLink>
            <StyledHr />
            {/*  */}
            Sep 1, 2023
            <br />
            Vid bokning av tvättid via webbsidan:
            <br />
            Surfa till
            <a href="http://kakburken.ddns.net/">
              {" "}
              http://kakburken.ddns.net/{" "}
            </a>
            med valfri webbläsare. Första gången du loggar in använd följande
            uppgifter: <br />
            Användarnamn: Passerbrickans AVM-nummer (hittas på baksidan)  {" "}
            <br />
            Lösenord: Lägenhetsnummer <br />
            <br />
            Väl inne kan du ändra dina inloggningsuppgifter under
            “Inställningar” till e-postadress och eget lösenord. Skulle du
            glömma bort dina nya inloggningsuppgifter, kan du alltid använda dig
            av AVM-numret tillsammans med lägenhetsnummer. <br /> <br /> Exempel
            på hur du klurar ut ditt lägenhetsnummer:
            <br />
            1921 <br />
            De två första siffrorna är portnummer, i det här fallet 19 (om port
            9 är det 09) Den tredje siffran är våning, i det här fallet 2 Den
            sista siffran är lägenhetens ordning från vänster, i det här fallet
            1  
            <br />
            <br />
            <StyledDLLink
              href="https://brfkakburken.se/tvattstugan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="1rem">
              Bokningsregler & information om bokning via tavla
              <BsDownload />
            </StyledDLLink>
            <StyledHr />
            Aug 16, 2023
            <br />
            Hej! Hoppas ni alla har haft en fin sommar.
            <br />
            Vi vill passa på att tacka er som deltog på föreningens årsstämma.
            <br />
            <br />
            Styrelsen har förnyats med en ny ledamot, Jacob Thomas. Jacob kommer
            skolas in i styrelsearbetet och framför allt fokusera på arbetet som
            rör föreningens ekonomi, tillsammans med Robban Röder. Torbjörn
            Hedström har avslutat sitt arbete i styrelsen efter många års
            deltagande. Som ny ordförande har vi Josefine Öberg, tidigare
            sekreterare i styrelsen. Sekreterarrollen har övertagits av
            Julia-Lotta Tinglöf. Olivia Hansson Lindblom kommer ansvara för
            kommunikation och it-frågor. Daniel De Luca och David Bäckström
            Leima kommer framför allt att fokusera på våra fastigheter. <br />
            <br />
            Nu har det så här lagom till höststarten blivit dags för
            installation av det digitala bokningssystemet till tvättstugan. I
            våras hade vi en omröstning gällande om vi skulle byta till ett
            digitalt bokningssystem eller inte - 38 JA och 10 NEJ. Styrelsen har
            därefter tittat på flera olika system och enats om ett system från
            samma företag som vi har våra portlås ifrån. Det systemet uppfyller
            även på flera andra punkter de behov vår förening har.
            Installationen av bokningssystemet kommer ske 28-29/8. Tvättstugan
            kommer vara stängd under installationen. Efter den 29/8 bokas
            tiderna på den nya bokningstavlan eller via en webbsida. <br />
            Mer information om bokningssystemet och blippar för bokning vid
            tavlan kommer att distribueras i god tid innan installationen. Med
            det nya bokningssystemet kommer den som har bokat tiden ha hela
            tvättstugan till förfogande under den bokade tiden. Vi kommer börja
            med tretimmarsbokningar, fem stycken per dag. Detta kommer
            utvärderas efter några veckor. <br />
            <br />
            Vi planerar att ha ett höstmöte under oktober, datum är inte satt
            än. Det återkommer vi med så snart vi har det klart. <br />
            <br />
            Med vänliga hälsningar Styrelsen i Kakburken
          </StyledP>
          <StyledDLLink
            href="https://brfkakburken.se//AR2022BrfKakburken.pdf"
            target="_blank"
            rel="noopener noreferrer"
            margin="10px 0 10px 0"
            fontSize="1.3rem">
            Årsredovisning 2022
            <BsDownload />
          </StyledDLLink>
          <StyledDLLink
            href="https://brfkakburken.se//Protokoll270623.pdf"
            target="_blank"
            rel="noopener noreferrer"
            margin="10px 0 10px 0"
            fontSize="1.3rem">
            Årsstämma 2023
            <BsDownload />
          </StyledDLLink>
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
