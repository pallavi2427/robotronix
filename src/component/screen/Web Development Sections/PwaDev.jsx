import SectionFront from "./Section Components/SectionFront";
import { Data } from "./../Data";
import InfoSection from "./Section Components/InfoSection"
import ExpertTalkSection from "./Section Components/ExpertTalkSection";
import TechStackSection from "./Section Components/TechStackSection"
import HiringSection from "./Section Components/HiringSection"


const PwaDev = () => {
  return (
    <>
      <div className="container-fluid">
        {/* first section start */}
        <SectionFront
          title={Data.pwaDev.sectionFront.title}
          content={Data.pwaDev.sectionFront.content}
          imageSrc={Data.pwaDev.sectionFront.img}
        />
        {/* first section end */}
        {/* second section start */}
        <InfoSection
          title={Data.pwaDev.infoSection.title}
          content={Data.pwaDev.infoSection.content}
        />
        {/* second section end */}
        {/* third section start */}
        <ExpertTalkSection content={Data.pwaDev.expertTalkSection.content} />
        {/* third section end */}
        {/* fourth section start */}
        <TechStackSection
          title={Data.pwaDev.techStackSection.title}
          content={Data.pwaDev.techStackSection.content}
          cardData={Data.pwaDev.techStackSection.cardData}
        />
        <hr />
        {/* fourth section end */}
        {/* fifth section start */}
        <HiringSection
          title={Data.pwaDev.hiringSection.title}
          content={Data.pwaDev.hiringSection.content}
          imageSrc={Data.pwaDev.hiringSection.img}
        />
        {/* fifth section end */}
      </div>
    </>
  );
};

export default PwaDev;
