import axios from 'axios';
export const URL = `http://192.168.0.107:3434`;

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
	  url: `${URL}/auth`,
	  data: JSON.stringify(data),
	  headers: {'Content-Type': 'application/json', Accept: '*/*', 'Access-Key': '13579'},
	})
	  .then((res) => console.log('log user token', res))
	  .catch((e) => console.log('error user token', e));
  };


export const getJob = async (id) => {
	let url = `${URL}/jobsprofile/${id}`;
	const res = await axios({
		method: 'get',
		url,
		headers: {'Access-Key': '13579'}
	});
	return res
}