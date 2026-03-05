import SectionTitle from "@/components/SectionTitle";
import MediaGrid from "@/components/MediaGrid";
import ContactCard from "@/components/ContactCard";

export default function MediaPage() {
  return (
    <div className="container-pad py-10">
      <SectionTitle kicker="Media" title="Photos" subtitle="A curated set of headshots, lifestyle, character, and stage images." />
      <MediaGrid />
      <div className="mt-12"><ContactCard /></div>
    </div>
  );
}
