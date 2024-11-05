import Details from "@/components/details/Details";

export default async function detail({params}) {
  const {id} = params;
  console.log(id);
  

  return (
    <>
      <Details id={id} />
    </>
  );
}
