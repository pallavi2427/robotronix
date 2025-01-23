import SectionFront from "./Web Development Sections/Section Components/SectionFront";
import { Data } from "./Data";
import InfoSection from "./Web Development Sections/Section Components/InfoSection"
import ExpertTalkSection from "./Web Development Sections/Section Components/ExpertTalkSection";
import TechStackSection from "./Web Development Sections/Section Components/TechStackSection"
import HiringSection from "./Web Development Sections/Section Components/HiringSection"

const IosAppDev = () => {
  return (
    <>
      <div className="container-fluid">
        {/* first section start */}
        <SectionFront
          title={Data.iosAppDev.sectionFront.title}
          content={Data.iosAppDev.sectionFront.content}
          imageSrc={Data.iosAppDev.sectionFront.img}
        />
        {/* first section end */}
        {/* second section start */}
        <InfoSection
          title={Data.iosAppDev.infoSection.title}
          content={Data.iosAppDev.infoSection.content}
        />
        {/* second section end */}
        {/* third section start */}
        <ExpertTalkSection content={Data.iosAppDev.expertTalkSection.content} />
        {/* third section end */}
        {/* fourth section start */}
        <TechStackSection
          title={Data.iosAppDev.techStackSection.title}
          content={Data.iosAppDev.techStackSection.content}
          cardData={Data.iosAppDev.techStackSection.cardData}
        />
        <hr />
        {/* fourth section end */}
        {/* fifth section start */}
        <HiringSection
          title={Data.iosAppDev.hiringSection.title}
          content={Data.iosAppDev.hiringSection.content}
          imageSrc={Data.iosAppDev.hiringSection.img}
        />
        {/* fifth section end */}
      </div> 
    </>
  )
}

export default IosAppDev