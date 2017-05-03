<template>
	<section>
			<!--工具条-->
			<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
				<el-form :inline="true" :model="filters">
					<el-form-item>
						<el-input v-model="filters.title" placeholder="title"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click="getArticle">查询</el-button>
					</el-form-item>
				</el-form>
			</el-col>
				<div style="clear:both"></div>
				<div class="list">
				<ul v-loading="loading" >
						<li v-for="article  in articles" >
								<article>
									<header>
										<h3><router-link :to="{path:'/detail', query:{id:article.id}}" class="article_title">{{article.title}}</router-link></h3>
										<time> {{article.date}}</time>
									</header>
									<section class="content">
										{{article.content}}
									</section>
									<footer>
											<span class="article_author">{{article.createName}}</span>
									</footer>
								</article>
						</li>

				</ul>
				<el-col :span="24" class="toolbar">
					<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="5" :total="total" style="float:right;">
					</el-pagination>
				</el-col>
				</div>

	</section>
</template>
<script>
	import { getArticleListPage } from '../../api/api';
	export default {
		data() {
			return {
				filters: {
					title: ''
				},
				page:1,
				total:0,
				loading: false,
				articles: [
				]
			}
		},
		methods: {
		handleCurrentChange(val) {
			this.page = val;
			this.getArticle();
		},
			//获取文章列表
			getArticle: function () {
				let para = {
					title: this.filters.title,
					page: this.page
				};
				this.loading = true;
				getArticleListPage(para).then((res) => {
					this.total=res.data.total;
					this.articles = res.data.articles;
					this.loading = false;
				});
			}
		},
		mounted() {
			this.getArticle();
		}
	};

</script>

<style >
  .article_author{
  right: 120px;
  position: absolute;
  bottom: 13px;
  font-size:14px;
  }
	.article_title{
		color:#313F4A;

	}
	.article_title:hover{
		color:#d90a81;
		text-decoration:underline;
	}
	.article_title:active{
		color:#d90a81;
	}
  .list li{
    background:rgba(247, 247, 250, 0.901961);
  }

  article{
    margin:30px;
    position: relative;
  }
  .list header h2{
  margin: 0;
  font-size: 26px;
  padding-right: 110px;
  }
	li{
	list-style-type:none;
	}
  a{
  cursor:pointer;
  }

  article header{
  border-left: 3px solid;
  padding: 15px 30px 15px 25px;
}

.list header time{
  position:absolute;
  top:30px;
  right:50px;
}
article footer{
padding: 20px 35px 20px 0;
margin: 30px 30px 20px;
border-top: 1px solid #ddd;
}
</style>
