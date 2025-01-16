import SectionFront from "./Section Components/SectionFront";
import { Data } from "./../Data";
import InfoSection from "./Section Components/InfoSection"
import ExpertTalkSection from "./Section Components/ExpertTalkSection";
import TechStackSection from "./Section Components/TechStackSection"
import HiringSection from "./Section Components/HiringSection"


const NodeJsDev = () => {
  return (
    <>
      <div className="container-fluid">
        {/* first section start */}
        <SectionFront
          title={Data.nodeJsDev.sectionFront.title}
          content={Data.nodeJsDev.sectionFront.content}
          imageSrc={Data.nodeJsDev.sectionFront.img}
        />
        {/* first section end */}
        {/* second section start */}
        <InfoSection
          title={Data.nodeJsDev.infoSection.title}
          content={Data.nodeJsDev.infoSection.content}
        />
        {/* second section end */}
        {/* third section start */}
        <ExpertTalkSection content={Data.nodeJsDev.expertTalkSection.content} />
        {/* third section end */}
        {/* fourth section start */}
        <TechStackSection
          title={Data.nodeJsDev.techStackSection.title}
          content={Data.nodeJsDev.techStackSection.content}
          cardData={Data.nodeJsDev.techStackSection.cardData}
        />
        <hr />
        {/* fourth section end */}
        {/* fifth section start */}
        <HiringSection
          title={Data.nodeJsDev.hiringSection.title}
          content={Data.nodeJsDev.hiringSection.content}
          imageSrc={Data.nodeJsDev.hiringSection.img}
        />
        {/* fifth section end */}
      </div>
    </>
  );
};

export default NodeJsDev;
