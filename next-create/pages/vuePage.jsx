import { withRouter } from 'next/router';
import Link from 'next/link'
import axios from 'axios';

// 页面跳转接收参数
const vuePage = ({ router, list }) => {
  return (
    <>
      <div>
        我是{router.query.name}
      </div>
      <div>
        {
          list.map((item, index) => {
            return (
              <p key={ index }>{ item }</p>
            )
          })
        }
      </div>
      <br />
      <div></div>
      <Link href="/">
        <a>返回首页</a>
      </Link>
    </>
  );
}
// 所有请求都要写到getInitialProps这个方法里面。
vuePage.getInitialProps = async () => {
  // 使用next向后端请求数据
  const promise = new Promise((resolve, rej) => {
    axios.get(
      "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
    )
      .then(res => {
        resolve(res.data.data);
      })
      .catch(err => {
        console.log(err);
        rej(err);
      });
  })
  return await promise;
}

export default withRouter(vuePage);