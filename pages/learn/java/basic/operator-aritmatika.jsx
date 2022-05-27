import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/java/basic/004_aritmatika.json";

export default function Page() {
  return (
    <Layout
      pageTitle="Bellshade | Java - Operator Aritmatika"
      metaImage="/meta-image/java/basic/operator-aritmatika.png"
    >
      <WrapperTemplate>
        <section className="my-5">
          <h2 className="title-2">Operator Aritmatika</h2>
          <p className="section_text">
            Aritmatika atau biasa disebut penghitungan merupakan cabang
            matematika yang mempelajari operasi dasar bilangan seperti
            penjumlahan, pengurangan, perkalian, pembagian, dan sebagainya.
          </p>
          <p className="section_text">
            Setiap bahasa pemrograman termasuk Java memiliki operator aritmatika
            untuk melakukan penghitungan dasar. Dalam Java sendiri terdapat
            beberapa operator yaitu :
          </p>
        </section>
        {dataJson.map((data, i) => (
          <section className="my-5" key={i}>
            <h4 className="subtitle-h4">{data.title}</h4>
            <p className="section_text">{data.desc}</p>
            <p className="section_text">Contoh:</p>
            <SyntaxHighlighter code={data.code} />
          </section>
        ))}
      </WrapperTemplate>
    </Layout>
  );
}
