import Details from "@/components/details/Details";

export default async function detail({params}) {
  const {id} = params
  

  return (
    <>
      <Details id={id} />
    </>
  );
}
