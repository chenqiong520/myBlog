<template>
	<el-form ref="form" :model="form" :rules="rules" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="题目" prop="title">
			<el-input v-model="form.title"></el-input>
		</el-form-item>
		<el-form-item label="版块" prop="plate">
			<el-select v-model="form.plate" placeholder="请选择版块">
				<el-option label="js" value="js"></el-option>
				<el-option label="html" value="html"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="日期" prop="date" >
			<el-col :span="11">
				<el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
			</el-col>
		</el-form-item>
		<el-form-item label="内容" prop="content">
			<el-input type="textarea" :rows="10" v-model="form.content"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click.native.prevent="onSubmit">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					title: '',
					plate: '',
					date: '',
					content: ''
				},
				rules:{
					title:[{required:true,message:'请输入标题',trigger:'blur'},],
					content:[{required:true,message:'不能为空',trigger:'blur'}],
					plate:[{required:true,message:'请选择版块',trigger:'change'}]
				}
			}
		},
		methods: {
			onSubmit(ev) {
			var _this=this;
			this.$refs.form.validate((valid)=>{
				if(valid){
				alert('submit!');
				}
			});

			}
		}
	}

</script>
