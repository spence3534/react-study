import Head from 'next/head';

const Myhead = () => {
  return(
    <div>
      <Head>
        {/* 这里面可以定义html的所有头部标签 */}
        <title>Hello Next.com</title>
      </Head>
    </div>
  )
}

export default Myhead;