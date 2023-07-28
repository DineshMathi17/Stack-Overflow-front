import axios from "axios";

const API = axios.create({baseURL:'https://stack-overflow-back-n0g0.onrender.com'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const LogIn = (authData) =>API.post('/login',authData)
export const SignUp = (authData) =>API.post('/signup',authData)


export const postQuestions = (questionData) =>API.post('/ques/ask',questionData)
export const getAllQuestions =()=>API.get('/ques/get')
export const deleteQuestion =(id)=>API.delete(`/ques/delete/${id}`)
export const voteQuestion=(id , value, userId)=>API.patch(`/ques/vote/${id}`,{value, userId})

export const postAnswer = (id,noOfAnswers,answerBody,userAnswered, userId) =>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteAnswer = (id, answerId, noOfAnswers)=>API.patch(`/answer/delete/${id}`,{ answerId, noOfAnswers})

export const fetchAllUsers =()=>API.get('/getAllUsers')
export const updateProfile =(id, updateData)=>API.patch(`/update/${id}`, updateData)
