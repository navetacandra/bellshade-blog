import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Typescript'
      metaImage='/meta-image/learn/typescript.png'
    >
      <WrapperTemplate>
        <div className='my-5 flex justify-center'>
          <h2 className='mb-5 title-2'>Coming Soon!</h2>
        </div>
      </WrapperTemplate>
    </Layout>
  );
}