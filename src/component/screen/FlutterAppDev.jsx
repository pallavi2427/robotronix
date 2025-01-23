import SectionFront from "./Web Development Sections/Section Components/SectionFront";
import { Data } from "./Data";
import InfoSection from "./Web Development Sections/Section Components/InfoSection"
import ExpertTalkSection from "./Web Development Sections/Section Components/ExpertTalkSection";
import TechStackSection from "./Web Development Sections/Section Components/TechStackSection"
import HiringSection from "./Web Development Sections/Section Components/HiringSection"

const FlutterAppDev = () => {
  return (
    <>
      <div className="container-fluid">
        {/* first section start */}
        <SectionFront
          title={Data.flutterAppDev.sectionFront.title}
          content={Data.flutterAppDev.sectionFront.content}
          imageSrc={Data.flutterAppDev.sectionFront.img}
        />
        {/* first section end */}
        {/* second section start */}
        <InfoSection
          title={Data.flutterAppDev.infoSection.title}
          content={Data.flutterAppDev.infoSection.content}
        />
        {/* second section end */}
        {/* third section start */}
        <ExpertTalkSection content={Data.flutterAppDev.expertTalkSection.content} />
        {/* third section end */}
        {/* fourth section start */}
        <TechStackSection
          title={Data.flutterAppDev.techStackSection.title}
          content={Data.flutterAppDev.techStackSection.content}
          cardData={Data.flutterAppDev.techStackSection.cardData}
        />
        <hr />
        {/* fourth section end */}
        {/* fifth section start */}
        <HiringSection
          title={Data.flutterAppDev.hiringSection.title}
          content={Data.flutterAppDev.hiringSection.content}
          imageSrc={Data.flutterAppDev.hiringSection.img}
        />
        {/* fifth section end */}
      </div> 
    </>
  )
}

export default FlutterAppDev