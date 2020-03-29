'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    // 首页文章列表数据
    this.ctx.body = 'hi api';
  }
  // 登录
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = " SELECT userName FROM admin_user WHERE userName = '" + userName +
      "' AND password = '" + password + "'";

    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      // 登录成功，进行session缓存
      const openId = new Date().getTime();
      // eslint-disable-next-line quote-props
      this.ctx.session.openId = { 'openId': openId };
      // eslint-disable-next-line quote-props
      this.ctx.body = { data: '登录成功', 'openId': openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }
  // 后台文章分类信息
  async getTypeInfo() {
    const resType = await this.app.mysql.select("type");
    this.ctx.body = { data:resType };
  }
  // 添加文章
  async addArticle() {
    let tmpArticle = this.ctx.request.body

    const result = await this.app.mysql.insert('article', tmpArticle);
    const insertSuccess = result.affectedRows === 1
    const insertId = result.insertId

    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId: insertId
    }
  }

  // 修改文章
  async updateArticle() {
    let tmpArticle = this.ctx.request.body;

    const result = await this.app.mysql.update('article', tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess)
    this.ctx.body = {
      isSuccess: updateSuccess
    }
  }
}

module.exports = MainController;
