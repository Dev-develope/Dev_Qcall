// list-disc list-inside
import Hero from "src/components/common/Hero";
import SingleButton from "src/components/common/SingleButton";
import { compareHeroData, comprisionHerocardData} from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={compareHeroData[0]} herocardData={comprisionHerocardData} className="text-start">
            <SingleButton title="Become a Partner" route={"#"}/>
        </Hero>
    </>)
}