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

export const getJobs = async (page, length) => {
	let url = `http://192.168.0.103:3306/parsed-jobs?page=${page}&skip=${length}`
    const res = await axios.get(url);
	return res
}
