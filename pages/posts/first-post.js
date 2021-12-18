import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import Layout from '.././../components/Layout'


export default function FirstPost (){
    return (
        <Layout>
            <div>
            <Head>
                <title>About</title>
            </Head>
                
                   <h2>Hi my name is Nii Darku , welcome to my website.</h2>
                   <p>I am a Software Developer with skills in both web and mobile development.</p>
            </div>
        </Layout>
    )
}

