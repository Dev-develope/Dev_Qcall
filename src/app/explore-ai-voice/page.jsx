import Exploring from "src/components/common/Exploring";
import Navbar from "src/components/common/Navbar";
import ExploreAIVoice from "src/components/common/ExploreAIVoice";
export default function page() {
    return (<>
        <Navbar className="bg-black"/>
        <ExploreAIVoice/>
        <Exploring />
    </>)
}