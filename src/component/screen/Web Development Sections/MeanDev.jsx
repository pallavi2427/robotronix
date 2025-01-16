import SectionFront from "./Section Components/SectionFront";
import { Data } from "./../Data";
import InfoSection from "./Section Components/InfoSection"
import ExpertTalkSection from "./Section Components/ExpertTalkSection";
import TechStackSection from "./Section Components/TechStackSection"
import HiringSection from "./Section Components/HiringSection"


const MeanDev = () => {
  return (
    <>
      <div className="container-fluid">
        {/* first section start */}
        <SectionFront
          title={Data.meanDev.sectionFront.title}
          content={Data.meanDev.sectionFront.content}
          imageSrc={Data.meanDev.sectionFront.img}
        />
        {/* first section end */}
        {/* second section start */}
        <InfoSection
          title={Data.meanDev.infoSection.title}
          content={Data.meanDev.infoSection.content}
        />
        {/* second section end */}
        {/* third section start */}
        <ExpertTalkSection content={Data.meanDev.expertTalkSection.content} />
        {/* third section end */}
        {/* fourth section start */}
        <TechStackSection
          title={Data.meanDev.techStackSection.title}
          content={Data.meanDev.techStackSection.content}
          cardData={Data.meanDev.techStackSection.cardData}
        />
        <hr />
        {/* fourth section end */}
        {/* fifth section start */}
        <HiringSection
          title={Data.meanDev.hiringSection.title}
          content={Data.meanDev.hiringSection.content}
          imageSrc={Data.meanDev.hiringSection.img}
        />
        {/* fifth section end */}
      </div>
    </>
  );
};

export default MeanDev;
