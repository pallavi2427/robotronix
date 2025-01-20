import SectionFront from "./Web Development Sections/Section Components/SectionFront";
import { Data } from "./Data";
import InfoSection from "./Web Development Sections/Section Components/InfoSection"
import ExpertTalkSection from "./Web Development Sections/Section Components/ExpertTalkSection";
import TechStackSection from "./Web Development Sections/Section Components/TechStackSection"
import HiringSection from "./Web Development Sections/Section Components/HiringSection"


const AndriodAppDev = () => {
  return (
    <>
      <div className="container-fluid">
        {/* first section start */}
        <SectionFront
          title={Data.androidAppDev.sectionFront.title}
          content={Data.androidAppDev.sectionFront.content}
          imageSrc={Data.androidAppDev.sectionFront.img}
        />
        {/* first section end */}
        {/* second section start */}
        <InfoSection
          title={Data.androidAppDev.infoSection.title}
          content={Data.androidAppDev.infoSection.content}
        />
        {/* second section end */}
        {/* third section start */}
        <ExpertTalkSection content={Data.androidAppDev.expertTalkSection.content} />
        {/* third section end */}
        {/* fourth section start */}
        <TechStackSection
          title={Data.androidAppDev.techStackSection.title}
          content={Data.androidAppDev.techStackSection.content}
          cardData={Data.androidAppDev.techStackSection.cardData}
        />
        <hr />
        {/* fourth section end */}
        {/* fifth section start */}
        <HiringSection
          title={Data.androidAppDev.hiringSection.title}
          content={Data.androidAppDev.hiringSection.content}
          imageSrc={Data.androidAppDev.hiringSection.img}
        />
        {/* fifth section end */}
      </div>
    </>
  );
};

export default AndriodAppDev;
