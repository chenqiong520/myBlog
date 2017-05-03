import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: '../assets/user.png',
    name: 'aileen'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
};


const Articles = [];
const comments=[];
for (let i = 0; i < 20; i++) {
  comments.push(Mock.mock({
    id: Mock.Random.guid(),
    content: Mock.Random.cparagraph(),
    date: Mock.Random.date(),
    createName: Mock.Random.cname()
  }));
}

for (let i = 0; i < 20; i++) {
  Articles.push(Mock.mock({
    id: Mock.Random.guid(),
    title: Mock.Random.ctitle(5,15),
    content: Mock.Random.cparagraph(),
    date: Mock.Random.date(),
    createName: Mock.Random.cname(),
    comments:comments
  }));
}
export { LoginUsers, Users,Articles,comments};
