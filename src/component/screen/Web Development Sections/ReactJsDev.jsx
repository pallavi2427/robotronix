import SectionFront from "./Section Components/SectionFront";
import { Data } from "./../Data";
import InfoSection from "./Section Components/InfoSection"
import ExpertTalkSection from "./Section Components/ExpertTalkSection";
import TechStackSection from "./Section Components/TechStackSection"
import HiringSection from "./Section Components/HiringSection"

const ReactJsDev = () => {
  return (
    <>
      <div className="container-fluid">
        {/* first section start */}
        <SectionFront
          title={Data.reactDev.sectionFront.title}
          content={Data.reactDev.sectionFront.content}
          imageSrc={Data.reactDev.sectionFront.img}
        />
        {/* first section end */}
        {/* second section start */}
        <InfoSection
          title={Data.reactDev.infoSection.title}
          content={Data.reactDev.infoSection.content}
        />
        {/* second section end */}
        {/* third section start */}
        <ExpertTalkSection content={Data.reactDev.expertTalkSection.content} />
        {/* third section end */}
        {/* fourth section start */}
        <TechStackSection
          title={Data.reactDev.techStackSection.title}
          content={Data.reactDev.techStackSection.content}
          cardData={Data.reactDev.techStackSection.cardData}
        />
        <hr />
        {/* fourth section end */}
        {/* fifth section start */}
        <HiringSection
          title={Data.reactDev.hiringSection.title}
          content={Data.reactDev.hiringSection.content}
          imageSrc={Data.reactDev.hiringSection.img}
        />
        {/* fifth section end */}
      </div>
    </>
  );
};

export default ReactJsDev;