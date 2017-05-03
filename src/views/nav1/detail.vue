<template>
  <div>
    <div class="detail_main">
    <h1 class="title"> {{article.title}}</h1>
      <div class="detail_content">
      {{article.content}}
      </div>
    </div>


      <div>
      <el-form ref="form" :model="form" :rules="rules" label-width="130px">
        <el-form-item label="发表你的评论" prop="comment">
          <el-input type="textarea" :rows="8" v-model="form.comment" class="detail_comment"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native.prevent="onCommit">提交</el-button>
        </el-form-item>
      </el-form>
      </div>
  </div>

</template>

<script>

	import { getArticleById } from '../../api/api';
export default{
data(){
  return{
    article:'',
    form: {
      comment: ''
    },
    rules:{
      comment:[{require:true,message:"不能为空",trigger:'blur'}]
    }
  }
},
methods:{
  getArticle(){
    var id = this.$route.query.id;
    let param={id:id};
    getArticleById(param).then((res)=>{
     this.article=res.data.article[0];
    })
  }
},
mounted() {
  this.getArticle();
}
}
</script>

<style>
.detail_main{
background:rgba(247, 247, 250, 0.901961);
}
  .title{
    padding:10px;
     margin:10px;
  }
  .detail_content{
    margin:20px;
    padding:10px;
  }
  .detail_comment{

  }
</style>
