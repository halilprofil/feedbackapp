import Details from "@/components/details/Details";
import { AdvancedFetch } from "@/utils/advancedfetch";

export default async function detail({params}) {
  const {id} = params;
  console.log(id);
  const {response} = await AdvancedFetch("https://feedback.nazlisunay.com.tr/api/User/me");
  console.log(response);
  

  return (
    <>
      <Details id={id} />
    </>
  );
}
