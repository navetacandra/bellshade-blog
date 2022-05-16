import React, { Fragment } from 'react'
import SyntaxHighlighter from '../../../components/SyntaxHighlighter'
import TextStyle from '../../../components/TextStyle'
import WrapperTemplate from '../../../components/WrapperTemplate'
import data_json from '../../../data-json/javascript/basic/004_string-dan-manipulasi-string.json'

function String_Manipulasi() {
    return (
        <WrapperTemplate>
            <section className='my-5'>
                <h2 className="title-2">String dan Cara Memanipulasinya</h2>
                {
                    data_json.declare_string.map((data, i) => (
                        <Fragment key={i}>
                            {data.title ? <h3 className="subtitle-h3">{data.title}</h3> : null}
                            <p className='section_text'>
                                {
                                    data.desc.map((val, key) => (
                                        <TextStyle list_text={val} key={key} />
                                    ))
                                }
                            </p>
                            {data.note ? <div className="note-text mb-3"><p>{data.note}</p></div> : null}
                            <p className="section_text">Contoh:</p>
                            {
                                data.code ? <SyntaxHighlighter code={data.code} /> : null
                            }
                        </Fragment>
                    ))
                }
                <h3 className="subtitle-h3">Manipulasi String</h3>
                {
                    data_json.string_manipulation.map((data, i) => (
                        <Fragment key={i}>
                            {
                                data.title ? [data.title].map((val, key) => (
                                    <p className='section_text' key={key}>
                                        <TextStyle list_text={val} />
                                    </p>
                                )) : null
                            }

                            <p className="section_text">
                                {
                                    data.desc.map((val, key) => (
                                        <TextStyle list_text={val} key={key} />
                                    ))
                                }
                            </p>
                            <p className="section_text">Contoh:</p>
                            <SyntaxHighlighter code={data.code} />
                            {
                                data.note ? (
                                    <div className="note-text mb-3">
                                        <p>{data.note}</p>
                                    </div>
                                ) : null
                            }
                        </Fragment>
                    ))
                }
            </section>
        </WrapperTemplate>
    )
}

export default String_Manipulasi