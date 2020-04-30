import axios from 'axios'

const baseUrl = 'localhost:5000/'

export const getTest = async() => {
    return await axios.get(baseUrl + 'test')
}

export const getUser = async(userId) => {
    return await axios.get(baseUrl + 'users/' + userId)
}

export const getMeeting = async(meetingId) => {
    return await axios.get(baseUrl + 'meetings/' + meetingId)
}

export const signUp = async(name, email, passward) => {
  const postData = {
    'name': name,
    'email': email,
    'passward': passward
  }
  return await axios.post(baseUrl + 'users/sign_up', postData)
}

export const signIn = async(email, passward) => {
  const postData = {
    'email': email,
    'passward': passward
  }
  return await axios.post(baseUrl + 'users/sign_in', postData)
}