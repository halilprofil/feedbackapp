export const dynamic = "force-dynamic";
import Details from "@/components/details/Details";
import { AdvancedFetch } from "@/utils/advancedfetch";

export default async function detail({ params }) {
  const { id } = params;
  const { response } = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/me");
  return (
    <>
      <Details id={id} />
    </>
  );
}
