import axios from 'axios';

// export const getJobs = async (title = '') => {
//   const queryStr = title !== '' ? `?title=${title}` : '';
//   const res = await axios.get(`http://192.168.31.88:8080/jobs${queryStr}`); //`http://192.168.31.29:8124/filtered-jobs${queryStr}`
//   return res;
// };

// export const getFilteredJobs = async () => { //filtered-jobs
//   const res = await axios.get(`http://192.168.31.88:8080/filtered-jobs`); //`http://192.168.31.29:8124/filtered-jobs${queryStr}`
//   return res;
// }

export const setUserToken = (userId, email, token) => {
	
	const data = {
	  userId,
	  email,
	  token,
	};
	axios({
	  method: 'post',
	  url: 'http://192.168.0.103:3306/auth',
	  data: JSON.stringify(data),
	  headers: {'Content-Type': 'application/json', Accept: '*/*'},
	})
	  .then((res) => console.log('log user token', res))
	  .catch((e) => console.log('error user token', e));
  };


export const getJob = async (jobId) => {
	console.log(jobId)
	let url = `http://192.168.0.103:3306/jobsprofile/${jobId}`
	const res = await axios.get(url);
	return res
}