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

export const initMeeting = async(title, discription, ownerId) => {
  const postData = {
    'title': title,
    'discription': discription,
    'owner_id': ownerId
  }
  return await axios.post(baseUrl + 'meetings/init', postData)
}

export const addUser = async(meetingId, userId) => {
  const postData = {
    'meeting_id': meetingId,
    'user_id': userId
  }
  return await axios.post(baseUrl + 'meetings/add_record', postData)
}

export const addRecord = async(meetingId, userId, recordData) => {
  const postData = {
    'meeting_id': meetingId,
    'user_id': userId,
    'record_data': recordData
  }
  return await axios.post(baseUrl + 'meetings/add_record', postData)
}

export const addBlackList = async(meetingId, blackWords) => {
  const postData = {
    'meeting_list': meetingId,
    'black_words': blackWords
  }
  return await axios.post(baseUrl + 'meetings/add_black_list', postData)
}

export const finishMeeting = async(meetingId) => {
  const postData = {
    'meeting_id': meetingId
  }
  return await axios.post(baseUrl + 'meetings/finish', postData)
}