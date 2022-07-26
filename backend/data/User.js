import bcrypt from 'bcryptjs'

const users =[
    {
        name:'Admin user',
        email:'admin@domain.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'Manu',
        email:'manu@domain.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Me',
        email:'me@domain.com',
        password:bcrypt.hashSync('123456',10),
    }
]

export default users